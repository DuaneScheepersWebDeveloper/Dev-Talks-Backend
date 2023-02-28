import {db} from "../config/db.js";
export const register = (req, res) => {
    const q = "SELECT * FROM user WHERE email = ? OR userName =?";
    db.query(q,[req.body.email, req.body.name],(err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists");

        //encryption
        const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    });
};
export const login = (req, res) => {
    
};

export const logout = (req, res) => {
   
};