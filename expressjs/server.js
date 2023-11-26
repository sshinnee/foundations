import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
const port = 3004

const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/?retryWrites=true&w=majority'
const client = new MongoClient(uri)

await client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/list-databases', async (req, res) => {
    const admin = client.db('admin')

    const databasesList = await admin.command(
        {
            listDatabases: 1
        }
    )
 
    var returnString = ''

    console.log('Databases:')
    returnString += 'Databases:<br/>'

    databasesList.databases.forEach(
        db => {
            console.log(` - ${db.name}`)
            returnString += ` - ${db.name}<br/>`
        })

    res.send(returnString)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
