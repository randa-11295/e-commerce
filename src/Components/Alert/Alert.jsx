import {PureComponent} from 'react';
import classes from "./Alart.module.css"


class Alert extends PureComponent {
  

   render(){
        return(
             <p  className={classes.box +" "+ (this.props.error ? classes.error : classes.vaild  )}>
                   {this.props.text}
             </p>
        )
   }

}

export default Alert