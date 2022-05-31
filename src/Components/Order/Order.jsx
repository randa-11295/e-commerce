import { Component } from "react";
import classes from "./Order.module.css";
import Button from "../Button/Button";
import dataContext from "../../Context/DataContext";

class Order extends Component {
     
    
     render(){
          return (
                   <dataContext.Consumer>
                        {val=>{return(
                         <section  onClick={()=>{val.showOrder(false)}} className={classes.box} >
                              <main onClick={(event)=>{event.stopPropagation()}} className={classes.container}  >

                                   <h3>Congratulations!</h3>
                                   <p> you completed the purchase process </p>
                                   <b> You Payed : {val.currencie} {val.totalPrice} </b>
                                   <p> Your order is on its way...</p>
                                   
                                   <aside className={classes.btnBox}>
                                        <Button clickHandel={()=>{val.showOrder(false)}} outLine={true}  text="Back to Shoping" />
                                   </aside>

                              </main>
                        </section>
                         ) }}
                   </dataContext.Consumer>
          )
     }
}

export default Order