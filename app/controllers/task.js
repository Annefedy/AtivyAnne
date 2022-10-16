const Tarefa = require('../models/Task')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

module.exports = {   
    async index(req,res){
        const task = await Tarefa.find();
    res.json(task);
},
async create(req,res){
    const { title, project, assignedTo, completed } = req.body;
    let data = {};
    let task = await Tarefa.findOne({ title });
    if(!task){
        data = { title, project, assignedTo, completed  };
        task = await Tarefa.create(data);
                          
        return res.status(200).json(task);
    }else{
        return res.status(500).json(task);
    }
   },
   async detalhes(req,res){
    const {_id} = req.params;
    const task = await Tarefa.findOne({_id});
    res.json(task);
   },
   async deletar(req,res){
    const {_id} = req.params;
    const task = await Tarefa.findByIdAndDelete({_id});
   return res.json(task);
   },
   async update(req,res){
    const {_id, title, project, assignedTo, completed } = req.body;
    const data = {};
    const task = await Tarefa.findOneAndUpdate({_id},data,{new:true});
    res.json(task);
   }
}
