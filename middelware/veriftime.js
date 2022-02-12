//this web application should be available only during working hours (Monday to Friday,  from 9 to 17)
//var express = require('express');
//var app = express();
//middleware qui vérifie le créneau horaire
const veriftime = function (req, res, next) {
    const today=new Date();  
      if (( today.getDay() === 0 || today.getDay() === 6 ) || (today.getHours()<9 || today.getHours()>17) )
           {console.log ("not available");
            res.sendFile(__dirname + "/public/notavailable.html");
        }
  
       else //????
       next();
  
  };

module.exports = veriftime;