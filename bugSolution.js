```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    const query = { someField: 'someValue' };
    const documents = await collection.find(query).toArray();
    documents.forEach(doc => {
        console.log(doc);
    });
  } finally {
    client.close();
  }
}

run().catch(console.dir);
```