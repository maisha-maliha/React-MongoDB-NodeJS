const { MongoClient } = require("mongodb");
const uri = "mongodb://0.0.0.0:27017";

const client = new MongoClient(uri);
client.connect();

async function shoes(){
    try{
        const dataset = await client.db('Ecommerce').collection('shoes').find().toArray();
        return JSON.stringify(dataset);
        // console.log(dataset);
        // console.log(JSON.stringify(dataset));
        // return Buffer.from(JSON.stringify(dataset));
        // console.log(dataset.toString());// this will convert into obj obj array without the actual values
    }
    catch{
        console.log("db closed");
        await client.close();
    }
}
shoes();
module.exports = {shoes};