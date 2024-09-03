import express from "express";
import { getAvailableBusList ,createBooking} from "../controller/bookingController.js";

const router = express.Router();

router.post('/getBuses',getAvailableBusList);
router.post('/createBooking', createBooking);



export default router;
