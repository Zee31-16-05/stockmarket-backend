import express from 'express';
const router = express.Router();

import * as  apiController from '../controllers/api.controller.js'

router.get('/',function (req, res){
    res.header("Access-Control-Allow-Origin", "*");
    return apiController.getApi(req, res)
})

export {router}