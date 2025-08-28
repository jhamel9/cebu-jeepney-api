const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log method and URL of incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const routes = [
    {
      routeNumber: "01A",
      mainRoute: "Urgello to Colon",
      startPoint: "Urgello",
      endPoint: "Colon",
      via: ["North Bus Terminal", "Parkmall", "Pier"],
      description: "Route from Urgello to Colon via North Bus Terminal, Parkmall, and Pier area"
    },

    {
        "routeNumber": "01B",
        "mainRoute": "Urgello to North Bus Terminal",
        "startPoint": "Urgello",
        "endPoint": "North Bus Terminal",
        "via": ["Colon Street"],
        "description": "Route from Urgello to North Bus Terminal"
      },
      {
        "routeNumber": "01C",
        "mainRoute": "Urgello to Pier",
        "startPoint": "Urgello",
        "endPoint": "Pier 1, 2, 3",
        "via": ["Colon Street"],
        "description": "Route from Urgello to Pier area"
      },
      {
        "routeNumber": "01K",
        "mainRoute": "Urgello to Colon via Parkmall and Pier",
        "startPoint": "Urgello",
        "endPoint": "Colon",
        "via": ["Parkmall", "Pier"],
        "description": "Route from Urgello to Colon via Parkmall and Pier"
      },
      {
        "routeNumber": "02A",
        "mainRoute": "Pier 1 to South Bus Terminal",
        "startPoint": "Pier 1",
        "endPoint": "South Bus Terminal",
        "via": ["Colon Street"],
        "description": "Route from Pier 1 to South Bus Terminal"
      },
      {
        "routeNumber": "02B",
        "mainRoute": "Pier 2 to South Bus Terminal",
        "startPoint": "Pier 2",
        "endPoint": "South Bus Terminal",
        "via": ["Colon Street"],
        "description": "Route from Pier 2 to South Bus Terminal"
      },
      {
        "routeNumber": "03A",
        "mainRoute": "Mabolo to Carbon",
        "startPoint": "Mabolo",
        "endPoint": "Carbon Market",
        "via": ["Panagdait"],
        "description": "Route from Mabolo to Carbon Market via Panagdait"
      },
      {
        "routeNumber": "03B",
        "mainRoute": "Mabolo to Colon",
        "startPoint": "Mabolo",
        "endPoint": "Colon Street",
        "via": ["Mango Avenue", "Fuente Osmeña"],
        "description": "Route from Mabolo to Colon via Mango Avenue and Fuente Osmeña"
      },
      {
        "routeNumber": "03L",
        "mainRoute": "Mabolo to Carbon via Mabolo Luyo",
        "startPoint": "Mabolo",
        "endPoint": "Carbon Market",
        "via": ["Mabolo Luyo"],
        "description": "Route from Mabolo to Carbon Market via Mabolo Luyo"
      },
      {
        "routeNumber": "03Q",
        "mainRoute": "Mabolo to SM City Cebu",
        "startPoint": "Mabolo",
        "endPoint": "SM City Cebu",
        "via": ["Ayala Mall"],
        "description": "Route from Mabolo to SM City Cebu via Ayala Mall"
      },
      {
        "routeNumber": "04B",
        "mainRoute": "Lahug to Carbon",
        "startPoint": "Lahug",
        "endPoint": "Carbon Market",
        "via": ["Escario Street", "Fuente Osmeña"],
        "description": "Route from Lahug to Carbon Market"
      },
      {
        "routeNumber": "04C",
        "mainRoute": "Lahug to Colon",
        "startPoint": "Lahug",
        "endPoint": "Colon Street",
        "via": ["Escario Street", "Fuente Osmeña"],
        "description": "Route from Lahug to Colon via Fuente Osmeña"
      },
      {
        "routeNumber": "04D",
        "mainRoute": "Lahug to Colon via Escario",
        "startPoint": "Lahug",
        "endPoint": "Colon Street",
        "via": ["Escario Street"],
        "description": "Route from Lahug to Colon via Escario"
      },
      {
        "routeNumber": "04H",
        "mainRoute": "Lahug to Colon",
        "startPoint": "Lahug",
        "endPoint": "Colon Street",
        "via": ["Escario Street", "Fuente Osmeña"],
        "description": "Route from Lahug to Colon"
      },
      {
        "routeNumber": "04L",
        "mainRoute": "Lahug to Colon",
        "startPoint": "Lahug",
        "endPoint": "Colon Street",
        "via": ["Escario Street", "Fuente Osmeña"],
        "description": "Route from Lahug to Colon"
      },
      {
        "routeNumber": "06A",
        "mainRoute": "Guadalupe to Colon",
        "startPoint": "Guadalupe",
        "endPoint": "Colon Street",
        "via": ["Mango Avenue", "Fuente Osmeña"],
        "description": "Route from Guadalupe to Colon"
      },
      {
        "routeNumber": "06B",
        "mainRoute": "Guadalupe to Carbon",
        "startPoint": "Guadalupe",
        "endPoint": "Carbon Market",
        "via": ["Mango Avenue"],
        "description": "Route from Guadalupe to Carbon Market"
      },
      {
        "routeNumber": "06C",
        "mainRoute": "Guadalupe to Colon",
        "startPoint": "Guadalupe",
        "endPoint": "Colon Street",
        "via": ["Mango Avenue", "Fuente Osmeña"],
        "description": "Route from Guadalupe to Colon"
      },
      {
        "routeNumber": "06G",
        "mainRoute": "Guadalupe to Colon",
        "startPoint": "Guadalupe",
        "endPoint": "Colon Street",
        "via": ["Mango Avenue"],
        "description": "Route from Guadalupe to Colon"
      },
      {
        "routeNumber": "06H",
        "mainRoute": "Guadalupe to Colon",
        "startPoint": "Guadalupe",
        "endPoint": "Colon Street",
        "via": ["Mango Avenue", "Fuente Osmeña"],
        "description": "Route from Guadalupe to Colon"
      },
      {
        "routeNumber": "09C",
        "mainRoute": "Basak to Colon",
        "startPoint": "Basak",
        "endPoint": "Colon Street",
        "via": ["Cebu City Hall"],
        "description": "Route from Basak to Colon passing Cebu City Hall"
      },
      {
        "routeNumber": "09G",
        "mainRoute": "Basak to Quiot",
        "startPoint": "Basak",
        "endPoint": "Quiot",
        "via": [],
        "description": "Route from Basak to Quiot"
      },
      {
        "routeNumber": "10C",
        "mainRoute": "Pardo to Colon",
        "startPoint": "Pardo",
        "endPoint": "Colon Street",
        "via": [],
        "description": "Route from Pardo to Colon"
      },
      {
        "routeNumber": "10G",
        "mainRoute": "Pardo to Colon",
        "startPoint": "Pardo",
        "endPoint": "Colon Street",
        "via": [],
        "description": "Route from Pardo to Colon"
      },
      {
        "routeNumber": "10K",
        "mainRoute": "Pardo to Colon",
        "startPoint": "Pardo",
        "endPoint": "Colon Street",
        "via": [],
        "description": "Route from Pardo to Colon"
      },
      {
        "routeNumber": "11A",
        "mainRoute": "Inayawan to Colon",
        "startPoint": "Inayawan",
        "endPoint": "Colon Street",
        "via": [],
        "description": "Route from Inayawan to Colon"
      },
      {
        "routeNumber": "11D",
        "mainRoute": "Inayawan to Colon",
        "startPoint": "Inayawan",
        "endPoint": "Colon Street",
        "via": [],
        "description": "Route from Inayawan to Colon"
      },
      {
        "routeNumber": "13B",
        "mainRoute": "Talamban to Colon via Ayala",
        "startPoint": "Talamban",
        "endPoint": "Colon Street",
        "via": ["Ayala", "Gaisano Country Mall"],
        "description": "Route from Talamban to Colon via Ayala and Gaisano Country Mall"
      },
      {
        "routeNumber": "13C",
        "mainRoute": "Talamban to Colon via Banilad Town Center",
        "startPoint": "Talamban",
        "endPoint": "Colon Street",
        "via": ["Ayala", "Banilad Town Center", "Gaisano Country Mall"],
        "description": "Route from Talamban to Colon via Ayala, Banilad Town Center, and Gaisano Country Mall"
      },
      {
        "routeNumber": "14B",
        "mainRoute": "Ayala to Colon via Escario",
        "startPoint": "Ayala",
        "endPoint": "Colon Street",
        "via": ["Escario Street", "Osmeña Boulevard"],
        "description": "Route from Ayala to Colon passing Escario and Osmeña Boulevard"
      },
      {
        "routeNumber": "14D",
        "mainRoute": "Ayala to Colon",
        "startPoint": "Ayala",
        "endPoint": "Colon Street",
        "via": ["Escario Street", "Osmeña Boulevard"],
        "description": "Route from Ayala to Colon passing Escario and Osmeña Boulevard"
      },
      {
        "routeNumber": "17B",
        "mainRoute": "Apas to IT Park and Colon",
        "startPoint": "Apas",
        "endPoint": "Colon Street",
        "via": ["IT Park"],
        "description": "Route from Apas to IT Park and Colon"
      },
      {
        "routeNumber": "17C",
        "mainRoute": "D. Jakosalem to IT Park",
        "startPoint": "D. Jakosalem Street",
        "endPoint": "IT Park",
        "via": ["Ramos Street", "Mango Avenue"],
        "description": "Route from D. Jakosalem to IT Park via Ramos Street and Mango Avenue"
      },
      {
        "routeNumber": "20A",
        "mainRoute": "Ayala to Mandaue City",
        "startPoint": "Ayala",
        "endPoint": "Mandaue City",
        "via": ["Bureau of Internal Revenue"],
        "description": "Route from Ayala to Mandaue City and vice versa"
      },
      {
        "routeNumber": "20B",
        "mainRoute": "Mandaue City route",
        "startPoint": "Mandaue City",
        "endPoint": "Ayala",
        "via": [],
        "description": "Route from Mandaue City to Ayala"
      },
      {
        "routeNumber": "62B",
        "mainRoute": "Pit-os to Carbon",
        "startPoint": "Pit-os",
        "endPoint": "Carbon Market",
        "via": [],
        "description": "Route from Pit-os to Carbon Market"
      },
      {
        "routeNumber": "62C",
        "mainRoute": "Carbon to Pit-os",
        "startPoint": "Carbon Market",
        "endPoint": "Pit-os",
        "via": [],
        "description": "Route from Carbon Market to Pit-os"
      }

]


