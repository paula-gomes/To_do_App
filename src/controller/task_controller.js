const taskDao= require('../DAO/tasks_DAO');
const db=require('../config/db_close_todoapp');
const viewToDo= require ('../views/template_todoapp');

class TaskController{
    
    static showTask(){

      return( (req,res)=> 
       { const taskDaoInstance = new taskDao(db);

            taskDaoInstance.viewTasks().then((row)=>{
                if (row.length>0){
                    res.send(viewToDo(row))
                }
                else res.send(viewToDo());
            })
            .catch((err)=>console.log(err));      
    });      

    }
}

module.exports= TaskController;