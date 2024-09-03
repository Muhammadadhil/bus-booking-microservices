import { getAvailableBuses } from "../grpc/grpcClient.js";

export const getAvailableBusList = async (req, res) => {
    try {
        const { from, to, date } = req.body;
        // const buses = await getAvailableBuses("calicut", "banglore", "12-09-2024");
        const buses = await getAvailableBuses(from, to, date);
        console.log("grpc sends the bus data:", buses);

        res.status(200).json({ buses });
    } catch (error) {
        console.log("Error while fetching available buses:", error);
        res.status(403).json({ message: "Error while getting availabel bus list" });
    }
};

export const createBooking = async (req, res) => {
    try {
        
    } catch (error) {

    }
};
