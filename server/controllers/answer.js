import User from '../models/user.js';
export const que1 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);



       const {answer} = req.body;
       if(user.start_time===null)
        user.start_time=Date.now();

        user.end_time=Date.now();

       if(answer==="ER23_fl4T"){
            if(user.que1===false){
                user.score=user.score+1;
                user.que1=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();
        

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();
                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}

export const que2 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();

       const {answer} = req.body;

       if(answer==="gotITrightHERE"){
            if(user.que2===false){
                user.score=user.score+1;
                user.que2=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();

                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}
export const que3 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();

       const {answer} = req.body;

       if(answer==="G U L A B I A N K H E"){
            if(user.que3===false){
                user.score=user.score+1;
                user.que3=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();
              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();
                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}

export const que4 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();

       const {answer} = req.body;

       if(answer==="will-o'-the-wisps"){
            if(user.que4===false){
                user.score=user.score+1;
                user.que4=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();

                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}

export const que5 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();
       const {answer} = req.body;

       if(answer==="CORRETPARITY"){
            if(user.que5===false){
                user.score=user.score+1;
                user.que5=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}

export const que6 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();

       const {answer} = req.body;

       if(answer==="JOEYRGMGRGCBPB"){
            if(user.que6===false){
                user.score=user.score+1;
                user.que6=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();
                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}


export const que7 = async (req, res) => {
    try{
        const user=await User.findById(req.user._id);
        user.end_time=Date.now();

       const {answer} = req.body;

       if(answer==="Elon Musk"){
           if(user.que7===false){
                user.end_time=Date.now();
                user.score=user.score+1;
                user.que7=true;
            }
            user.total_attempted=user.total_attempted+1;
            await user.save();

              return res.status(200).json("correct");

       }

         else{
                user.wrong_attempted=user.wrong_attempted+1;
                user.total_attempted=user.total_attempted+1;
                await user.save();
                return res.json("wrong");
            }
        
    }
    catch(err){
        console.log(err);
    }
}

