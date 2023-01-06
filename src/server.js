import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from './route/web';
import connetDB from './config/connetDB'

require('dotenv').config();

let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

viewEngine(app);
initWebRouter(app);
connetDB();
let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Backeng Nodejs is runing on the port" + port)
})

