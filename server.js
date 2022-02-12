// require external module
const express = require("express");
// app: instance d'express (express: class)
const app = express();

//cet appel ne fonctionne pas
//const veriftime = require ("./middelware/veriftime")

// app.use : to use express methods
// acess all files in public
//app.use(express.static("public"));

//middleware qui vérifie le créneau horaire
const veriftime = function (req, res, next) {
    const today=new Date();  
      if ( (today.getDay() === 0 || today.getDay() === 6 ) || (today.getHours()<9 || today.getHours()>17) )
           {console.log ("not available");
            res.sendFile(__dirname + "/public/notavailable.html");
        }
            else
              next();
  
  };
  app.use(veriftime);

// get index.html
app.get("/", (req, res) => {   
    console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html");
});
// get services.html
app.get("/services", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/services.html");
});
// get contactus.html
app.get("/contactus", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/public/contactus.html");
});
// get style.css
app.get("/style", (req, res) => {
    res.sendFile(__dirname + "/public/style.css");
});
const port = 5000;
app.listen(port, () => console.log(`this server is running on ${port}`));
