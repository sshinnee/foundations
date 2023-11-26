# Connect to MongoDB with NodeJS server

This is a simple starter project that is a NodeJS Server that connects to a MongoDB Atlas Cluster and lists the databases inside that cluster.

## Run

Preparatory work:

1. Run `npm install` inside the `nodejs` directory

2. Replace the `uri` string in `server.js` with your MongoDB Atlas Cluster connection string.

Then to run the app:

`node server.js`

on your command line in the `nodejs` directory.

The list of databases will appear on your console.

To stop the app:

`Ctrl+C` or `Cmd+C`

## Debug

After making changes to the app, you have to stop the server and restart it for the changes to take effect.

Make sure you save your changes before doing the above.

## References

Project takes reference from this starter [structure](
https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database).

Some commands have to be amended with the latest [here](https://www.mongodb.com/community/forums/t/how-to-list-all-databases-in-atlas-using-nodejs-driver/222607).

[MongoDB Command Reference](https://www.mongodb.com/docs/manual/reference/command/listDatabases/) for comparison.

MongoDB's NodeJS [starter app](https://github.com/mongodb-university/atlas_starter_nodejs).
