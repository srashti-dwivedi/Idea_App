const ideas= require('../models/idea.model');
id=3;
// i want to fetch all ideas
exports.getAllIdea=(req,res)=>{
    return res.status(200).send(ideas)
}

// I wanna fetch ideas with id


exports.getIdea=(req,res)=>{

    req_id=req.params.id;
    if(ideas[req_id]){
    return res.status(200).send(ideas[req_id])
    }
    else{
        res.status(404).send({
            message:" Sorry !idea with the id is not found"
        })
    }

    
}

// I wanna create some idea

exports.createIdea=(req,res)=>{
    idea_obj=req.body
    id++;
   idea_obj["id"]=id;
   ideas[id]=idea_obj;

   return res.status(201).send(idea_obj)
}

// I wanna update some ideas

exports.updateIdea=(req,res)=>{
    idea_id=req.params.id;
    if(ideas[idea_id]){
        idea_obj=req.body;
        ideas[idea_id]=idea_obj;
        return res.status(201).send(idea_obj)
    }
    else{
        return res.status(404).send({
            message:"this given id is not found"
        })
    }
}

// I wanna delete ideas

exports.deleteIdea=(req,res)=>{
    idea_id=req.params.id;
    if(ideas[id]){
        delete ideas[idea_id]
        return res.status(200).send({
            message:"yayi !! your given id's item successfully deleted"
        })
    }
  else{
    return res.status(404).send({
        message:"idea id you wanna delete is already not present Ma'am / Sir"
    })
  }
  
  
}