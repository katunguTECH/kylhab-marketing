const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;

// Where uploaded cars live. On Railway, point DATA_DIR at a mounted Volume (e.g. /data)
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(DATA_DIR, 'uploads');
const DB_FILE = path.join(DATA_DIR, 'vehicles.json');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const readDb = () => { try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); } catch { return []; } };
const writeDb = (list) => fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2));

// ---- Simple password protection (set ADMIN_PASSWORD in Railway variables) ----
function requireAdmin(req, res, next) {
    const pass = process.env.ADMIN_PASSWORD;
    if (!pass) return res.status(500).send('Set ADMIN_PASSWORD in your environment variables.');
    const h = req.headers.authorization || '';
    const given = Buffer.from(h.split(' ')[1] || '', 'base64').toString().split(':').slice(1).join(':');
    if (given === pass) return next();
    res.set('WWW-Authenticate', 'Basic realm="Kylhab Admin"').status(401).send('Login required');
}

const upload = multer({
    storage: multer.diskStorage({
        destination: UPLOAD_DIR,
        filename: (req, file, cb) => cb(null, `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`)
    }),
    limits: { fileSize: 10 * 1024 * 1024, files: 12 },
    fileFilter: (req, file, cb) => cb(null, /^image\//.test(file.mimetype))
});

// ---- Public API ----
app.get('/api/vehicles', (req, res) => res.json(readDb()));
app.use('/uploads', express.static(UPLOAD_DIR, { maxAge: '30d' }));

// ---- Admin ----
app.get('/admin', requireAdmin, (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

app.post('/api/vehicles', requireAdmin, upload.array('photos', 12), (req, res) => {
    const { name, price, details } = req.body;
    if (!name || !req.files || !req.files.length) return res.status(400).json({ error: 'Name and at least one photo are required.' });
    const images = req.files.map(f => `/uploads/${f.filename}`);
    const car = { id: Date.now(), name: name.trim(), price: (price || '').trim(), details: (details || '').trim(), image: images[0], images };
    const list = readDb();
    list.unshift(car); // newest first
    writeDb(list);
    res.json(car);
});

app.delete('/api/vehicles/:id', requireAdmin, (req, res) => {
    const list = readDb();
    const car = list.find(c => String(c.id) === req.params.id);
    if (!car) return res.status(404).json({ error: 'Not found' });
    (car.images || []).forEach(p => fs.unlink(path.join(UPLOAD_DIR, path.basename(p)), () => {}));
    writeDb(list.filter(c => c !== car));
    res.json({ ok: true });
});

// ---- Existing site ----
app.use(express.static(path.join(__dirname)));
// Missing files (e.g. a .js or image) should 404, not return the home page
app.get('*', (req, res) => {
    if (path.extname(req.path)) return res.status(404).send('Not found');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}, data in ${DATA_DIR}`));
