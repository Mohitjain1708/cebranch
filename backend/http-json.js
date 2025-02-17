// const http = require('http');
// // const user=[{id:1,name:'Rahul',email:'rahul@example.com'},
// //     {id:2,name:'Raj',email:'raj@example.com'},
// //     {id:3,name:'Ajay',email:'ajay@example.com'}
// // ]
// const fs=require('fs/promises');
// const server = http.createServer(async(req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const filedata= await fs.readFile("./aa.json",'utf8');
//     // const newdata=users.map((user)=>{
//     //     return user.name
//     // });
//     const parsedata=JSON.parse(filedata);
//     res.end(JSON.stringify(parsedata));
// });

// PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server running at ${PORT}`);
// });
// const http = require('http');
// const user=[{id:1,name:'Rahul',email:'rahul@example.com'},
//     {id:2,name:'Raj',email:'raj@example.com'},
//     {id:3,name:'Ajay',email:'ajay@example.com'}
// ]
const http = require('http');
const fs=require('fs/promises');
const server = http.createServer(async(req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const filedata1= await fs.readFile("./error.html");
    const filedata2=await fs.readFile("./home.html");
    const filedata3=await fs.readFile("./aa.json");
    if(req.url=="/"){
    res.end(filedata3);}
    else if(req.url=="/home"){
        res.end(filedata2);}
    else{
        res.end(filedata1);}
});

PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});