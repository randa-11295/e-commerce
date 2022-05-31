import { gql } from "@apollo/client";

export const productsQuery =  gql` query categories( $title: String!)  {
         category(input: { title: $title }){
            name    
            products {
              id
              brand
              category
              name
              gallery
              inStock
              attributes {
                id
                name
                type
                items {
                  displayValue
                  value
                  id
                }}
              prices {
                amount
                currency {
                label
                symbol
   }}}}}`
 

export const categoriesQuery =   gql`  query categories {
                            categories{
                                    name  
 } } `



export const currenciesQuery = gql`
      query currencies  {
          currencies{
              label 
              symbol     
}} `


export const detailsProductQuery = gql`
query product($id: String!) {
  product(id : $id) {
    id
    brand
    name
    gallery
    inStock
    description
    category
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }}} }`