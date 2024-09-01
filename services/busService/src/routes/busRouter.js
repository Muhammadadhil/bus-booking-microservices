import express from "express";
import isAuthenticated, {isAdminAuthenticated} from "../../../../auth/authentication.js";
import { addBus, updateBusInfo, deleteBus, getBus } from "../controller/busController.js";

const router = express.Router();

router.get('/getbus',isAuthenticated,getBus)
router.post("/add", isAdminAuthenticated, addBus);
router.post("/update/:id", isAdminAuthenticated, updateBusInfo);
router.post("/delete/:id", isAdminAuthenticated, deleteBus);


export default router;
