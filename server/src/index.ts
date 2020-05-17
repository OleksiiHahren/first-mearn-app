require('dotenv').config()
const app = require('express');
import {Application}  from "express";
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./graphQl";
import {connectDatabase} from "./database";


const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({
        typeDefs, resolvers,
        context: () => ({db})
    });
    server.applyMiddleware({app, path: '/api'})
    console.log('here!')
    app.listen(process.env.PORT);
    const listings = await db.listings.find({}).toArray();
    console.log(listings);

}

mount(app());
