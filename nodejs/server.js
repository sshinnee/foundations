import { MongoClient } from 'mongodb'

async function main() {
    const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/?retryWrites=true&w=majority'
    const client = new MongoClient(uri)

    try {
        await client.connect()

        const admin = client.db('admin')

        await listDatabases(admin)
    
    } catch (e) {
        console.error(e)
    } finally {
        await client.close()
    }

}

async function listDatabases(admin) {
    const databasesList = await admin.command(
        {
            listDatabases: 1
        }
    )
 
    console.log('Databases:')
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}

main().catch(console.error)
