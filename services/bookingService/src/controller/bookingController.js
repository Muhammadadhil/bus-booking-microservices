import { getAvailableBuses } from "../grpc/grpcClient.js";
import Booking from "../db/model/bookingModel.js";

export const getAvailableBusList = async (req, res) => {
    try {
        const { from, to, date } = req.body;
        // const buses = await getAvailableBuses("calicut", "banglore", "12-09-2024");
        const buses = await getAvailableBuses(from, to, date);
        console.log("grpc sends the bus data:", buses);

        res.status(200).json({ buses });
        // store the data in redux 
    } catch (error) {
        console.log("Error while fetching available buses:", error);
        res.status(403).json({ message: "Error while getting availabel bus list" });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { busId, busName, from, to, departure, bookingDate} = req.body;
        const userId=req.user.userId;
        const newBooking = new Booking({
            userId,
            busId,
            busName,
            from,
            to, 
            departure,
            bookingDate
        })

        newBooking.save();
        res.json({newBooking});
    } catch (error) {
        res.status(404).json({error});
    }
};

const paymentStatus = async (bookingId,paystatus,status)=>{
    try {
        if(bookingId){
            await Booking.updateOne({ _id: bookingId }, { $set: { paymentStatus: paystatus, bookingStatus: status, updatedAt: new Date() } });
        }
    } catch (error) {
        console.log('Error while updating');
        
    }
}

export const cancelBooking = async (req,res,) => {
    try {
        const bookingId=req.params.id;
        await Booking.updateOne({ _id: bookingId }, { $set: { bookingStatus :"canceled"} });
        res.json({message:"canceled booking successfully"});

    } catch (error) {
        res.status(404).json({ messsage: "Error while updating" });
    }
};
