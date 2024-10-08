import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const isAuthenticated = (req, res, next) => {
    console.log("Authenticating the User !!");
    const authHeader = req.headers["authorization"];
    console.log('authHeader:',authHeader);
    
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token missing from authorization header" });
    }

    jwt.verify(token, process.env.JWT_SECRET || "123HELLO123HII321HELLO", (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }
        console.log("user:", user);
        req.user = user;
        next();
    });
};

export const isAdminAuthenticated = (req, res, next) => {
    console.log("Authenticating the Admin !!");
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    console.log(token);
    

    if (!token) {
        return res.status(401).json({ message: "Token missing from authorization header" });
    }

    jwt.verify(token, process.env.JWT_SECRET || "123HELLO123HII321HELLO", (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        } else if (user.role != "admin") {
            return res.status(403).json({ message: "You don't have the administration permission" });
        }

        req.user = user;
        next();
    });
};

export default isAuthenticated;



