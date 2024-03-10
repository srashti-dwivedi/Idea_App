const exp = require('constants');
const idea_controller =require('../controllers/idea.controller');


// for routing
//127.0.0.1:8080/idea_app/api/v1/ideas

module.exports=(app)=>{
    //get all ideas
    app.get("/idea_app/api/v1/ideas",idea_controller.getAllIdea);

    // get idea based on id
    app.get("/idea_app/api/v1/ideas/:id",idea_controller.getIdea)

    //create some idea
    app.post("/idea_app/api/v1/ideas/",idea_controller.createIdea)

    //update ideas
    app.put("/idea_app/api/v1/ideas/:id",idea_controller.updateIdea)
    
    //delete idea
    app.delete("/idea_app/api/v1/ideas/:id",idea_controller.deleteIdea)



}