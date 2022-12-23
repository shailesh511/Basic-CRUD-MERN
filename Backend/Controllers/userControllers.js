const userModel = require("../Models/userModel");

exports.home = (req, res)=>{
    res.status(200).send("Shailesh keep grinding and hustling...")
}

exports.createNotes = async (req, res)=>{
    try{
        const fname = req.body.name;
        const femail = req.body.email;
        if(!(fname && femail))
            res.status(401).send("All fields are mandatory")
  
        const existing = await userModel.findOne({name: fname});
        if(existing)
           res.status(400).send("User already exists");

        const user = await userModel.create({name: fname, email: femail})
    res.status(200).json(user);

    }catch(err){
        console.log(err);
    }
} 

exports.updateUser = async (req, res)=>{
    try{
     const fname = req.body.name;
     const femail = req.body.email;
     
     if(!(fname || femail))
     res.status(400).send("All Fields are mandatory")

        const existing = await userModel.findOne({name : fname});
        if(!existing)
            res.status(400).send("user doesn't exists!!!");
        
        const user = await userModel.findOneAndUpdate({name: fname}, {email: femail});

        res.status(200).json(user);

    }
    catch(err){

        console.log(err);
    }
}

exports.deleteUser = async (req, res)=>{
    const fname = req.body.name;
    const femail = req.body.email;

    const existing = await userModel.find({name :fname});

    if(!existing)
      res.send(400).send("User doesn't exist!!");

      const user = await userModel.findOneAndDelete({name:fname});

      res.status(400).json({
        sucess:true,
        user
      })
}


exports.getUsers = async (req, res)=>{
   const users = await userModel.find()
    res.status(200).json(users);
}