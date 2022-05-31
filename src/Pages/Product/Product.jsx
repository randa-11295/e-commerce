import {PureComponent} from 'react'
import ProcuctCard from '../../Components/ProcuctCard/ProcuctCard'
import classes from "./Product.module.css";
import Title from '../../Components/Title/Title';
import dataContext from '../../Context/DataContext';
import { client } from '../../common/client';
import {productsQuery} from "../../common/queris"
class Product extends PureComponent {
   state={  products : [] }

componentDidMount() {
   client.query({
         query: productsQuery ,
         variables: { title :this.props.chosenCategorie}})

   .then(result =>{
         const { data } = result;
         this.setState({products :data.category.products }) 
      },
      error =>{
         console.log(error)
      })
}

componentDidUpdate(prevProps){
   if (this.props.chosenCategorie !== prevProps.chosenCategorie ){
      this.componentDidMount()
   }
}

render(){
return(
 <section  className={classes.box} >
    <Title  text={this.props.chosenCategorie}/>
 <dataContext.Consumer  >
    {(val)=>{return(  
      <main  className={classes.content} >
         {this.state.products?.map((el)=>{return(
                  <ProcuctCard key={el.id} data={el}
                               notificationHandel={this.showNotifcation}
                               context={val} />                      
            )}) 
         }
      </main>
        )}}
  </dataContext.Consumer>
</section> 
)}}

export default Product