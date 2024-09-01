import jwt from 'jsonwebtoken';

const generateToken=(userId,email,role='user')=>{

    console.log(".JWT_SECRET:", process.env.JWT_SECRET);
    
    const payload = { email,userId, role };
    console.log('payload:',payload);
    
    const token = jwt.sign(payload, process.env.JWT_SECRET || "123HELLO123HII321HELLO", { expiresIn: "30m" });
    console.log('token:',token);
    
    return token;

}

export default generateToken;