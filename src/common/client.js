import {  ApolloClient,  InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
     uri: 'http://localhost:4000/',
     //  'https://randa-shop-api.herokuapp.com/' ,
     cache: new InMemoryCache()
});
   