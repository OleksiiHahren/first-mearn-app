import {MongoClient} from "mongodb";

const url = `mongodb+srv://${process.env.USER}_${process.env.USER_LASTNAME}:${process.env.USER_PASSWORD}@${process.env.CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, {
        useNewUrlParser: true
    })
    const db = client.db('main');
    return {
        listings: db.collection('test_listings')
    }
}
