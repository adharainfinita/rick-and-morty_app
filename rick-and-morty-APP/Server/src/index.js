// const http = require("http");
// // const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// http.createServer((request, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*');

//         if(request.url.includes("/rickandmorty/character")){
//             let id = request.url.split("/").at(-1);
//             getCharById(response, id)
//         }
//     // if(request.url.includes("/rickandmorty/character")){
//     //     const id = request.url.split("/").at(-1);

//     //     const charID = data.find((character)=>{
//     //         return  character.id === +id;
//     //     })
//     //     return  response
//     //     .writeHead(200, {"Content-type": "application/json"})
//     //     .end(JSON.stringify(charID))
//     // }
// })
// .listen(3001, "localhost");

const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./routes/index")

server.use(express.json());

server.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
})

server.use("/rickandmorty", router);

server.listen(PORT, ()=>{
    console.log(`Server raised in port ${PORT}`)
})