const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function shoes(){
    try{
        const dataset = await client.db('Ecommerce').collection('shoes').find().toArray();
        return Buffer.from(JSON.stringify(dataset));
    }
    catch{
        console.log("db closed");
        await client.close();
    }
}
async function user(){
    try{
        const dataset = await client.db('Ecommerce').collection('User').find().toArray();
        return dataset;
    }
    catch{
        await client.close();
    }
}
module.exports = {shoes, user};