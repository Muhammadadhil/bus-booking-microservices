import express from "express";
import {isAdminAuthenticated} from "../../../../auth/authentication.js";
import { addBus } from "../controller/busController.js";

const router = express.Router();

router.post("/add", isAdminAuthenticated, addBus);
// router.post("/update", isAuthenticated, );
// router.post("/delete", isAuthenticated, );


export default router;
