import {listings} from "../listings";
import {IResolvers} from "apollo-server-express";

export const resolvers: IResolvers = {
    Query: {
        listings: () => {
            return listings;
        }
    },

    Mutation: {
        deleteListing: (_root: undefined, {id}: { id: string }) => {
            listings.find((el, i) => {
                if (el.id === id) {
                    listings.splice(i, 1);
                    return true
                }
                throw new Error("Delete failed!")
            });
        }
    }
}
