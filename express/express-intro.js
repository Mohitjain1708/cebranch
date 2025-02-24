import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello");
});
//http://localhost:3000/api/Rahul/21
app.get('/api/:name/:age',(req,res)=>{
    try {
        const data=req.params;
    res.send(`Hello dear ${data.name} and age is ${data.age}`)
    } catch (error) {
        console.log(message)
    }
    
});
//http://localhost:3000/api?name=Rahul&rollno=2
app.get('/api',(req,res)=>{
    try{
        const {name,rollno}= req.query;
    console.log(name,rollno);
    if(!name){
        res.status(404).send("Name is required");
    }
    else{
        res.send(`Hello dear ${name} and my roll no. is ${rollno}`);
    }
    }
    catch(error){
        console.log(error.message)
    }
});
const port=3000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});