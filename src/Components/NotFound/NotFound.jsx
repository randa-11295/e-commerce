import { Component } from "react";
import classes from "./NotFound.module.css";

class NotFound extends Component {

     render(){
          return (
               <section className={classes.box} >
                    <div>
                         <h3>sorry .. </h3>
                         <p> There's nothing here!  </p>
                    </div>
               </section>
          )
     }
}

export default NotFound ;