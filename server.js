const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const root = __dirname;

app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(root, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(root, 'sitemap.xml'));
});

app.use(express.static(root));

app.get('*', (req, res) => {
    res.sendFile(path.join(root, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Serving files from: ${root}`);
});

