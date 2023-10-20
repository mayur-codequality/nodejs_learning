const {MongoClient} = require('mongodb');
//const url = 'mongodb://localhost:27017';
const database = 'mymongodb';
//const client = new MongoClient(url);

async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    const database = client.db('mymongodb');
   }
   connectToDatabase();
/* async function getData() {

    const conn = await client.connect();
    //const dbConn = conn.db(database);
    //const collection = await dbConn.collection('user');
    console.log(collection); 
}

getData(); */



