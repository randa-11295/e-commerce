import { PureComponent } from "react";
import classes from "./CartLayout.module.css";
import CartCard from "../CartCard/CartCard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext.js"
class CartLayOut extends PureComponent{ 

  componentDidMount(){
      this.props.calculateTotalPrice()
 }

 componentDidUpdate(prevProps) {
      if ( this.props.cartItems !== prevProps.cartItem   ) {        
            this.componentDidMount()         
         }   
 }
    
render(){return(
<DataContext.Consumer>
{(val)=>{ return ( <section onClick={()=>{val.showCartLayout(false)}} className={classes.box}>
<main className={classes.container}   onClick={(e)=>{e.stopPropagation()}}  >
   
      <h5 className={classes.qty} >
         My Bag, <b>{val.totalQty} items</b>
      </h5>

      {val.cartItems.length === 0 ? <p className={classes.empty}> Your cart is Empty </p> :   
         <div className={classes.cards}  >  
            <CartCard   layout={true}   data={val} />
         </div>
      }

      <figcaption>
         <aside className={classes.price}  >
            <h4> Price : </h4>
            <b>   {val.currencie}  {val.totalPrice} </b>
         </aside>

         <footer className={classes.btnArea} >
            <div className={classes.btnBox}>
               <Link to="/cart"   >
                  <Button clickHandel={()=>{  val.showCartLayout()}}  outLine={true} text="view bag" />
               </Link>
               </div>
               <div className={classes.btnBox}>
                  <Button  clickHandel={()=>{  val.showOrder(true)}} text="check out"/>
               </div>
         </footer>
      </figcaption>
   </main>
</section>
)}}
</DataContext.Consumer>
)}} 

export default CartLayOut