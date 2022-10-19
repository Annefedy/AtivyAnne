module.exports = app  => {
    const { Task } = app.app.models.Task


  const index = async (req,res) => {
        const task = await Task.find();
    res.json(task);
}
const create = async (req,res) => {
    const { title, name_project, description } = req.body;
    let data = {};
    let task = await Task.findOne({ title });
    if(!task){
        data = { title, name_project, description };
        task = await Task.create(data);
                          
        return res.status(200).json(task);
    }else{
        return res.status(500).json(task);
    }
   }
  const detalhes = async (req,res) =>{
    const {_id} = req.params;
    const task = await Task.findOne({_id});
    res.json(task);
   }
   const deletar = async (req,res) =>{
    const {_id} = req.params;
    const task = await Task.findByIdAndDelete({_id});
   return res.json(task);
   }
   const update = async (req,res) => {
    const {_id, title, name_project, description } = req.body;
    const data = {};
    const task = await Task.findOneAndUpdate({_id},data,{new:true});
    res.json(task);
   }
   return {index, create,  detalhes, deletar, update}
 }  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             



 

  


