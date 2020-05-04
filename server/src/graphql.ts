import {
    GraphQLSchema,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType
} from 'graphql';
import {listings} from "./listings";

const Listing = new GraphQLObjectType({
    name: "Listing",
    fields: {
        id: {type: GraphQLNonNull(GraphQLID)},
        title: {type: GraphQLNonNull(GraphQLString)},
        image: {type: GraphQLNonNull(GraphQLString)},
        address: {type: GraphQLNonNull(GraphQLString)},
        price: {type: GraphQLNonNull(GraphQLInt)},
        numOfGuests: {type: GraphQLNonNull(GraphQLInt)},
        numOfBeds: {type: GraphQLNonNull(GraphQLInt)},
        rating: {
            type: GraphQLNonNull(GraphQLInt)
        }
    }
})
const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        listings: {
            type: GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))),
            resolve: () => listings
        }
    }
});

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        deleteListing: {
            type: GraphQLNonNull(Listing),
            args: {
                id: {
                    type:GraphQLNonNull(GraphQLID)
                }
            },
            resolve: (_root, {id}) => {
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
});

export const schema = new GraphQLSchema({query, mutation})
