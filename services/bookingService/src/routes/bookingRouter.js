import express from "express";
import { getAvailableBusList, createBooking, cancelBooking } from "../controller/bookingController.js";

const router = express.Router();

router.post('/getBuses',getAvailableBusList);
router.post('/createBooking', createBooking);
router.post("/cancelBooking/:id", cancelBooking);




export default router;
