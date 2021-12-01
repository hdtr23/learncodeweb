import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get('/', homeController.getHomePage); 
    router.get('/dat_san', (req,res) =>{
        return res.send('Hello! \n dat san');  
    });
    

    return app.use("/", router);
}

module.exports = initWebRoutes;