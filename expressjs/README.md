# Connect to MongoDB with Express.JS server

This is a simple starter project that is a Express.JS Server that connects to a MongoDB Atlas Cluster and lists the databases inside that cluster.

## Run

Preparatory work:

1. Run `npm install` inside the `expressjs` directory

2. Replace the `uri` string in `server.js` with your MongoDB Atlas Cluster connection string.

Then to run the app:

`node server.js`

on your command line in the `nodejs` directory.

Open a browser to `http://localhost:3004`.

Go to the route `https://localhost:3004/list-databases`. The list of databases will be returned to the browser and also logged to the console.

To stop the app:

`Ctrl+C` or `Cmd+C`

## Debug

After making changes to the app, you have to stop the server and restart it for the changes to take effect.

Make sure you save your changes before doing the above.

## References

[ExpressJS Sample Projects](https://github.com/expressjs/express/tree/master)

### MERN Stack (Advanced)

MERN stands for MongoDB, Express.JS, ReactJS and NodeJS.

MongoDB's [MERN tutorial](https://www.mongodb.com/languages/mern-stack-tutorial).

A [Medium article](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66) detailing how to run your first MERN stack.
