# Connect to MongoDB with NodeJS server

This is a simple starter project that is a NodeJS Server that connects to a MongoDB Atlas Cluster and lists the databases inside that cluster.

## Run

Replace the `uri` string in `server.js` with your MongoDB Atlas Cluster connection string.

Then to run the app:

`node server.js`

on your command line in the `nodejs` directory.

The list of databases will appear on your console.

## References

Project takes reference from this starter [structure](
https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database).

Some commands have to be amended with the latest [here](https://www.mongodb.com/community/forums/t/how-to-list-all-databases-in-atlas-using-nodejs-driver/222607).

[MongoDB Command Reference](https://www.mongodb.com/docs/manual/reference/command/listDatabases/) for comparison.

MongoDB's NodeJS [starter app](https://github.com/mongodb-university/atlas_starter_nodejs).
