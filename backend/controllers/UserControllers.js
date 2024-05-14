import express from "express"
import User from "../model/userModel.js"
import bcrypt  from "bcryptjs"
export const signUp=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body;
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        const hashPassword= await bcrypt.hash(password,10)
        const createUser=new User({
            fullName,hashPassword,email
        })
      const saveUser= await createUser.save();
        res.status(201).json({message:"user created successfully",saveUser})
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({message:'Server Error'})
    }
}

export const login=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body;
        const user=await User.findOne({email})
        const comparePs=bcrypt.compare(password,user.password)
        if(!user || !comparePs){
         return   res.status(400).json({message:"Invalid email or password"})
        }
        else{
          return  res.status(200).json({message:"Login Succesfull",user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
          }})
        }
    } catch (error) {
        console.log("Error",error)
        res.status(500).json({message:"internal server error"})
    }

}