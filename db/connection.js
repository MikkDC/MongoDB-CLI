const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

// Makes connection asynchronous and then waits for connection
// to be established
const connection = async () => {
    try{
        await client.connect();
        const db = client.db("Movies");
        return db.collection("Movie");
    } catch (error) {
        console.log(error);
        
    }

};


module.exports = { client, connection };

