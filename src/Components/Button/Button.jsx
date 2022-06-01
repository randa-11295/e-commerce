import { PureComponent} from 'react';
import classes from "./Button.module.css"


class Button extends PureComponent {

   
  
      
   render(){
        return(
               <button onClick={()=>{this.props.clickHandel()}}
          
                   className={classes.btn +" "+ (this.props.outLine  ? classes.outLine : classes.solid )}>
                   {this.props.text}</button>
        )
   }

}

export default Button