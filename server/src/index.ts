import express, {Application} from "express";

const app = express();
import {ApolloServer} from "apollo-server-express";
import {typeDefs, resolvers} from "./graphQl";
import {connectDatabase} from "./database";

const port = 8000;


const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({
        typeDefs, resolvers,
        context: () => ({db})
    });
    server.applyMiddleware({app, path: '/api'})
    app.listen(port);
    const listings = await db.listings.find({}).toArray();
    console.log(listings);

}

mount(express());
