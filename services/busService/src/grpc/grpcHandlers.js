import busModel from "../db/model/busModel.js";

export async function getAvailableBuses(call, callback) {
    const { from, to, date } = call.request;
    console.log("FETCHING BUSES !!");

    const buses = await busModel.find({ from, to });
    const formattedBuses = buses.map((bus) => ({
        busId: bus._id,
        busName: bus.name,
        from: bus.from,
        to: bus.to,
        departureTime: bus.departure,
        arrival: bus.arrival,
        status: bus.status,
    }));
    console.log("available buses:", formattedBuses);

    callback(null, { buses: formattedBuses });
}
