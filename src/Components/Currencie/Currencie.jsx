import { PureComponent } from "react";
import classes from "./Currencie.module.css";
import { v4 as uuidv4 } from 'uuid';
class Currencie extends PureComponent {
   
render(){
return (
<main className={classes.box} >
{ this.props.currencies.map((el)=>{
return ( <p key={uuidv4()} onClick={()=>this.props.changeCurrencie(el.symbol)} className={classes.item}>
                {el.symbol}  {el.label}
        </p>   
)})}       
</main>   
 )}
}
export default Currencie