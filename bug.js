```javascript
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Find the first document that matches the filter
    const query = { someField: 'someValue' };
    const cursor = collection.find(query);

    // Iterate over the cursor to access all matching documents one by one
    await cursor.forEach(doc => {
      console.log(doc);
    });

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
```