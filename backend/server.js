const http = require('http');
const database = require('./database');
// const cors = require('cors');


http.createServer(async (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    if(req.url == '/api/shoes'){
        try {
            res.writeHead(200, {'Content-Type':'application/json'});
            const dataset = await database.shoes();
            console.log(dataset.toString())
            res.write(dataset.toString());
        }
        finally{
            res.end();
        }
    }
}).listen(4000);