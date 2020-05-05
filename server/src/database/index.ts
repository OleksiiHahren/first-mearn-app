import {MongoClient} from "mongodb";

const user = "oleksii_admin";
const userPassword = "01071988";
const cluster = "cluster0-s5xqi.gcp";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true})
    const db = client.db('main');
    return {
        listings: db.collection('test_listings')
    }
}
