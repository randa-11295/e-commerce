import {  ApolloClient,  InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
     uri: 'https://randa-shop-api.herokuapp.com/' ,
     cache: new InMemoryCache()
});
   