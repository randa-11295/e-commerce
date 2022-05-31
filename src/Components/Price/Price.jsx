import {PureComponent} from 'react';
import classes from "./Price.module.css"
class Price extends PureComponent {
  
 //initial values
 state ={
     price : {  
    __typename: 'Price', amount: 0, 
    currency: {__typename: 'Currency', label: 'USD', symbol: '$'}
  }}
  
 //for set prices    
  componentDidMount(){
    const selectedCurrencie =  this.props.price?.find((el)=> {
      return(
      this.props.currencie  === el.currency.symbol  
    )  })
    this.setState( {price :selectedCurrencie } )
  }
 
// update prices when props change
componentDidUpdate(prevProps) {
     if (this.props !== prevProps) {
                 this.componentDidMount()
     }
   }
   render(){
        return(
           <h5 className={classes.price} >
             {this.state.price?.currency.symbol} {this.state.price?.amount }
           </h5>
        )
   }

}

export default Price