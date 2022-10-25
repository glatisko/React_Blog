import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {    
    
    const client = new MongoClient(        
        process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD
          ? `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gkog7tt.mongodb.net/?retryWrites=true&w=majority`
          : 'mongodb://localhost:27017');        
      
     
      await client.connect();
      db = client.db(process.env.MONGO_DBNAME || 'react-blog-db');    
       
    
    cb();
}

export {
    db,
    connectToDb,
};