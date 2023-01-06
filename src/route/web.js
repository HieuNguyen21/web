import express from "express";
import homecontroller from "../controllers/homecontroller";
let router = express.Router();

let initWebRouter = (app) =>{
    router.get("/", homecontroller.getHomePage);
    router.get("/about", homecontroller.getAboutPage);
    router.get('/', (req , res) =>{
        return res.send('hello world hieu')
    });
    return app.use("/", router);
}

module.export = initWebRouter;