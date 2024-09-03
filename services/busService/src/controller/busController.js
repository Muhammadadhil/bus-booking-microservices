import busModel from "../db/model/busModel.js";


export const getBus=async (req,res)=>{
    try {
        const buses=await busModel.find();
        return res.json({buses});
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

export const addBus = async (req, res) => {
    try {
        const { name, from, to, departure,arrival, duration, status } = req.body;
        const newbus = new busModel({
            name,
            from,
            to,
            departure,
            arrival,
            duration,
            status,
        });
        await newbus.save();
        res.json({ newbus });
    } catch (error) {
        console.log(error);
        
        res.status(404).json({ error });
    }
};

export const updateBusInfo = async (req, res) => {
    try {
        const { name, from, to, departure, duration, status } = req.body;
        const updatedBusInfo = await busModel.findByIdAndUpdate(req.params.id, { $set: { name, from, to, departure, duration, status } }, { new: true });
        console.log("updatedBusInfo:", updatedBusInfo);
        
        
        if (!updatedBusInfo) {
            return res.json({ message: "No Matching bus info found" });
        }
        res.json({message:"Updated Bus info Succefully"});
    } catch (error) {
        res.status(404).json({ error });
    }
};

export const deleteBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const busInfo = await busModel.findOne({ _id: busId });
        if (!busInfo) {
            return res.json({ message: "No Matching bus info found" });
        }
        await busModel.deleteOne({ _id: busId });
        res.status(200).json({message:'removed bus from the list'});
    } catch (error) {
        res.status(404).json({ error });
    }
};
