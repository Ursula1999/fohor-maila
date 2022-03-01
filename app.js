const express = require ('express');
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/images'));

require("./database/database");

const DriverRoute = require("./router/driverRoute");
app.use(DriverRoute);

const UserRoute = require("./router/userRoute");
app.use(UserRoute);

const addBinRoute = require("./router/addbinRoute");
app.use(addBinRoute);

const complainRoute = require("./router/userComplainRoute");
app.use(complainRoute);

const noteRoute = require("./router/noteRoute");
app.use(noteRoute);


app.listen("1001");