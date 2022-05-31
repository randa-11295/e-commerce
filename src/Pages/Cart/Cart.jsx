import {Component} from 'react';
import Title from '../../Components/Title/Title';
import dataContext from '../../Context/DataContext';
import CartCard from "../../Components/CartCard/CartCard"
import CartContent from '../../Components/CartContent/CartContent';
import classes from './Cart.module.css'

class Cart extends Component {

   render(){
        return(
           <section className={classes.box}>
                <Title text='cart'/>

                <dataContext.Consumer   >
                    {(val)=>{            
                         return(<>
                                   <CartCard    data={val} />
                                   <CartContent data={val} />
                                </>
                         )}}
                </dataContext.Consumer>
           </section>
        )
   }

}

export default Cart