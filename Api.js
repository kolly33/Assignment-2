const http = require('http');


const port = 3000;

const server = http.createServer((req,res)=>{


    if(req.url === '/students' && req.method === 'POST' ){
  
        const data = [];
req.on('data', ('chunk')=>{
    data.push(chunk)
})

req.on('end', ()=> {
const bufferBody = Buffer.concat(body)
const bodyOfrequest = Json.parse(bufferbody).toString()
   students.push(bodyOfrequest)

   
})

res.end()
}  
})


Server.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
})