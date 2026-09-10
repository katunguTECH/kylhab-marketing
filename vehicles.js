/* =========================================================
   vehicles.js
   NEW vehicles first, then the original 10.
   Images are expected in: images/autos/<filename>
   ========================================================= */

const vehicles = [

  /* ================== NEW ARRIVALS ================== */
  { id: 1,  name: "Nissan Xtrail",                price: "1.45M KSh",                  image: "images/autos/nissan-xtrail.jpg",  details: "HNT32 • 1990cc • KDM • YOM 2016" },
  { id: 2,  name: "Mitsubishi Outlander",         price: "1.76M KSh",                  image: "images/autos/outlander2.jpg",     details: "KDM • YOM 2016 • Price drop" },
  { id: 3,  name: "Toyota Succeed",               price: "1M KSh (Negotiable)",         image: "images/autos/succeed3.jpg",       details: "1500cc • 2WD • Auto • 2018 hybrid" },
  { id: 4,  name: "Toyota Noah 2010",             price: "1,170,000 KSh",               image: "images/autos/2010noah.jpg",       details: "2000cc • 2WD • 8 seater • Auto sliding doors • Trade-in accepted" },
  { id: 5,  name: "Toyota Axio 2015",             price: "1.27M KSh",                   image: "images/autos/2015axio.jpg",       details: "2WD • Accident free • Well maintained" },
  { id: 6,  name: "Toyota Hilux Single Cab",      price: "2.7M KSh (Negotiable)",       image: "images/autos/2018hilux.jpg",      details: "1GD engine • 2018 • 2400cc • 5-speed • Accident free" },
  { id: 7,  name: "Toyota Harrier 2014",          price: "2.2M KSh (Negotiable)",       image: "images/autos/2014harrier.jpg",    details: "YOM 2014 • 2000cc • Sunroof • Leather • Sport rims • South B" },
  { id: 8,  name: "Toyota Vitz 1300cc",           price: "330K KSh (Negotiable)",       image: "images/autos/1300ccvitz.jpg",     details: "1300cc • 2WD • Auto • Accident free" },
  { id: 9,  name: "Toyota Mark X 2014",           price: "1.07M KSh",                   image: "images/autos/markx2014.jpg",      details: "2400cc • Clean • Ngong" },
  { id: 10, name: "Toyota Hilux Double Cab",      price: "2,800,000 KSh",               image: "images/autos/hilux1212.jpg",      details: "3000cc • Auto • Diesel • 2013 • 4WD optional • Accident free" },
  { id: 11, name: "Toyota Prado J120",            price: "3,199,000 KSh (Negotiable)",  image: "images/autos/pradoj120.jpg",      details: "3000cc • 2008 • 164,480 km • Auto diesel • Sunroof • 4WD • 7 seater • Leather" },
  { id: 12, name: "Toyota Esquire",               price: "1.88M KSh (Negotiable)",      image: "images/autos/2016esquire.jpg",    details: "2016 • 2000cc • 8 seater • Fog lights • Accident free" },
  { id: 13, name: "Toyota Hilux Double Cabin",    price: "2,280,000 KSh (Negotiable)",  image: "images/autos/2009doublecab.jpg",  details: "2009 • 3000cc diesel • Auto • 4WD • Original paint" },
  { id: 14, name: "Toyota Allion 2012",           price: "1.35M KSh",                   image: "images/autos/2012allion.jpg",     details: "1800cc • Valvematic • Accident free" },
  { id: 15, name: "Toyota Porte",                 price: "800,000 KSh (Negotiable)",    image: "images/autos/porte.jpg",          details: "2014 • 1.3L • Push-to-start • Clean interior" },
  { id: 16, name: "Toyota Auris 2008",            price: "850K KSh (Negotiable)",       image: "images/autos/2008auris.jpg",      details: "1800cc • 2WD • Accident free • Fog lights • Paddle shift" },
  { id: 17, name: "Volkswagen Polo 2008",         price: "340K KSh",                    image: "images/autos/vwpolo.jpg",         details: "1400cc • Original paint • Buy and drive" },
  { id: 18, name: "Toyota Allion 260",            price: "830K KSh (Negotiable)",       image: "images/autos/allion260.jpg",      details: "2011 • 1800cc • 2WD • Valvematic • Accident free" },
  { id: 19, name: "Volkswagen 2009",              price: "1.48M KSh",                   image: "images/autos/vw2009.jpg",         details: "YOM 2009 • Very clean" },
  { id: 20, name: "Toyota Vigo Double Cab",       price: "1.6M KSh",                    image: "images/autos/dcab.jpg",          details: "Manual • 4WD • Original paint • Accident free" },
  { id: 21, name: "Toyota Harrier 2010",          price: "1.695M KSh (Negotiable)",     image: "images/autos/2010harrier.jpg",    details: "2400cc • Original paint • Sunroof • Fog lights • Neat interior" },
  { id: 22, name: "Toyota Fielder WXB",           price: "1,299,000 KSh (Negotiable)",  image: "images/autos/wxbfielder.jpg",     details: "2013 • 1800cc • 150,796 km • Reverse camera • Android radio • Accident free" },
  { id: 23, name: "Toyota Wish 2016",             price: "1,350,000 KSh (Negotiable)",  image: "images/autos/2016wish.jpg",       details: "1800cc • 164,433 km • 2WD • Auto petrol • Sunroof" },
  { id: 24, name: "Landrover Discovery 4",        price: "4,799,000 KSh (Negotiable)",  image: "images/autos/discovery4.jpg",     details: "2015 • 3000cc • 78,335 km • Auto diesel • Sunroof • 4WD • 7 seater • Leather" },
  { id: 25, name: "Honda Vezel",                  price: "2,199,000 KSh",               image: "images/autos/vezelhonda.jpg",     details: "2018 • 1500cc hybrid • 118,043 km • Auto petrol • Locally used" },
  { id: 26, name: "Nissan Dualis",                price: "899,000 KSh (Negotiable)",    image: "images/autos/dualis.jpg",         details: "2009 • 1990cc • Auto petrol • Alloy rims • Moon roof • Low kms" },
  { id: 27, name: "Nissan Hardbody",              price: "1.3M KSh O.N.O",              image: "images/autos/hardbody.jpg",       details: "2005 • 2500cc • Manual diesel • 4WD • Original paint" },
  { id: 28, name: "Nissan Navara",                price: "1.25M KSh O.N.O",             image: "images/autos/navara.jpg",         details: "2006 • 2500cc • Auto diesel • 4WD • Sunroof • Accident free" },
  { id: 29, name: "Toyota Premio 2008",           price: "1,099,000 KSh (Negotiable)",  image: "images/autos/premio-2008.jpg",    details: "1800cc • 132,420 km • Auto petrol • 2WD" },
  { id: 30, name: "Toyota Hilux Double Cab '13",  price: "2,800,000 KSh",               image: "images/autos/3000ccdcab.jpg",      details: "3000cc • Auto • Diesel • 2013 • 4WD • Accident free" },
  { id: 31, name: "Toyota Axio Hybrid",           price: "1.4M KSh",                    image: "images/autos/hybridaxio.jpg",     details: "2017 • 1500cc • 2WD hybrid" },
  { id: 32, name: "Mercedes E200 2019",           price: "5.5M KSh",                    image: "images/autos/2019e200.jpg",       details: "2019 E200 • Panoramic sunroof" },
  { id: 33, name: "Mercedes G Wagon",             price: "7M KSh",                      image: "images/autos/gwagon.jpg",         details: "G wagon" },
  { id: 34, name: "Toyota Regius Ace",            price: "Call for Price",              image: "images/autos/regiusace.jpg",      details: "2019 • 2.8L 1GD • 14 seater" },
  { id: 35, name: "Subaru Impreza 2017",          price: "1,600,000 KSh",               image: "images/autos/2017impreza.jpg",    details: "1600cc • Original paint • Fully loaded • Alloy rims • Kiambu Road" },
  { id: 36, name: "Toyota Ractis 2012",           price: "890K KSh",                    image: "images/autos/kctractis.jpg",      details: "1500cc • 2WD • Original paint • Accident free • New tyres • Eco/Sport mode" },
  { id: 37, name: "Mazda CX-5 Diesel",            price: "1,680,000 KSh (Negotiable)",  image: "images/autos/2000cccx5.jpg",      details: "2015 • 2000cc • Parking sensors • Reverse camera • Parklands" },
  { id: 38, name: "Ford Ranger Wildtrak",         price: "4.5M KSh",                    image: "images/autos/wildtrac.jpg",       details: "2018 • 2000cc bi-turbo diesel • 500Nm • 10-speed auto • Leather • 4WD • Diff lock" },
  { id: 39, name: "Toyota Vitz Jewela",           price: "890K KSh (Negotiable)",       image: "images/autos/2015jewela.jpg",     details: "2015 • 1320cc petrol • Auto" },
  { id: 40, name: "Toyota Prado J150",            price: "Call for Price",              image: "images/autos/j150toyota.jpg",     details: "YOM 2013 • 3000cc • Sunroof • 7 seater • 6-speed manual • 4WD • New tyres" },
  { id: 41, name: "Toyota Premio T240",           price: "1.08M KSh",                   image: "images/autos/t240.jpg",           details: "2008 • 1800cc • Well maintained • Accident free" },
  { id: 42, name: "Toyota Hiace 7L 2014",         price: "2.25M KSh (Negotiable)",      image: "images/autos/20147l.jpg",         details: "1KD • 2WD • Auto diesel" },
  { id: 43, name: "Toyota Hiace 7L 2015",         price: "2.45M KSh (Negotiable)",      image: "images/autos/20157l.jpg",         details: "1KD • 2WD • Manual diesel" },
  { id: 44, name: "Toyota Hiace 7L 2013",         price: "1.98M KSh (Negotiable)",      image: "images/autos/20137l.jpg",         details: "Diesel • Auto • Well maintained" },
  { id: 45, name: "Mercedes C200 AMG Line",       price: "3.95M KSh",                   image: "images/autos/c200amg.jpg",        details: "2018 • 2000cc petrol • 2WD • Panoramic sunroof • Lane/parking assist • Cruise control" },
  { id: 46, name: "Toyota Premio T260",           price: "1.15M KSh",                   image: "images/autos/t260premio.jpg",     details: "2010 • 1800cc • Well maintained" },
  { id: 47, name: "Toyota GD6 Diff Lock",         price: "3.25M KSh",                   image: "images/autos/gd60.jpg",           details: "2020 • GD6 • Diff lock" },

  /* ================== EXISTING LISTINGS ================== */
  { id: 48, name: "Mazda Axela 2014",             price: "1,420,000 KSh",               image: "images/autos/mazda-2014.jpg",     details: "1500cc Petrol • Clean Dark Interior" },
  { id: 49, name: "Mazda Axela 2015",             price: "Call for Price",              image: "images/autos/mazda-2015.jpg",     details: "1500cc 2WD • Accident Free • HUD" },
  { id: 50, name: "Nissan Nismo 2016",            price: "1,090,000 KSh",               image: "images/autos/nissan-nismo.jpg",   details: "1200cc Petrol • Original Paint" },
  { id: 51, name: "Toyota Axio 2013",             price: "1,250,000 KSh",               image: "images/autos/axio-2013.jpg",      details: "1500cc 2WD • Accident Free" },
  { id: 52, name: "Subaru Forester SHJ",          price: "Call for Price",              image: "images/autos/forester.jpg",       details: "2009 Model • 2000cc Non-Turbo" },
  { id: 53, name: "Toyota Harrier 240",           price: "Call for Price",              image: "images/autos/harrier.jpg",        details: "Leather Interior • 2.4cc Petrol" },
  { id: 54, name: "Mazda Demio 2011",             price: "635,000 KSh",                 image: "images/autos/demio.jpg",          details: "Alloy Rims • Mechanically Excellent" },
  { id: 55, name: "Toyota Axio 2010",             price: "920,000 KSh",                 image: "images/autos/axio-2010.jpg",      details: "1500cc • 2 Wheel Drive" },
  { id: 56, name: "Toyota Axio 2007",             price: "799,000 KSh",                 image: "images/autos/axio-2007.jpg",      details: "1500cc • Finance Available" },
  { id: 57, name: "Toyota Fielder 2013",          price: "Call for Price",              image: "images/autos/fielder-2013.jpg",   details: "Original Paint • Auto Gear" }
];
