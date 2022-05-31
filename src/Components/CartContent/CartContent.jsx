import { PureComponent } from "react";
import Button from "../Button/Button";
import classes from "./CartContent.module.css"


class CartContent extends PureComponent {
     state ={  tax : 0 }

     componentDidMount(){
          this.props.data.calculateTotalPrice()
          this.props.data.calculateTotalQty()
          this.setState({tax : ( this.props.data.totalPrice *21)/100 })
     }

     componentDidUpdate(prevProps) {
    
          if (this.props.data.currencie !== prevProps.data.currencie  
               || this.props.data.cartItems !== prevProps.data.cartItems  
               ) {                
               this.componentDidMount()           
              }   
               
         if (!this.props.data.cartItems.length){
             this.setState({tax : 0})
  
         }
        }

     orderHandel=()=>{
         this.props.data.showOrder(true)
     }

render(){
return (<section className={classes.box} >
            <p> Tax 21% :  <b> {this.props.data.currencie} 
                               {this.state.tax.toFixed(2)}  </b> </p>

            <p> Quantity : <b> {this.props.data.totalQty} </b> </p>
          
            <p> Total :    <b> {this.props.data.currencie}
                               {this.props.data.totalPrice}</b> </p>

            <aside className={classes.btnBox} >
               <Button  clickHandel={this.orderHandel} text="order"/>
            </aside>   
                      
          </section>)
}
}

export default CartContent

