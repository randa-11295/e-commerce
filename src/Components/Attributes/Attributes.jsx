import {PureComponent} from 'react';
import classes from "./Attributes.module.css"
import { v4 as uuidv4 } from 'uuid';

class Attributes extends PureComponent {

render(){
return(
<>  {
this.props.attributes?.map(type=>{
return(
  <div key={type.id} >
    <h4 className={(this.props.layOut ? classes.titleLayout : classes.title)} > {type.name} : </h4>

    <figure  className={classes.container}>

      { type.items?.map(val =>{
          return(
            <aside  key={uuidv4()}  className={
                ( type.type === "swatch" ?  classes.color + " " +  (this.props.layOut ? classes.layoutColorSize : classes.layoutColor)
                  + " " + (this.props.selectedValues[type.name] === val.value ? classes.colorActive :  (this.props.chose ? classes.colorChose : null)) 
                
                  :
                  
                  classes.value + " " + 
                  (this.props.layOut ? classes.layout : classes.size) + " " +
                  (this.props.selectedValues[type.name] === val.value ? classes.valueActive :  (this.props.chose ? classes.valueChose : null) )
                  )} 
                              
                  onClick={()=>{this.props.foucus({[type.name] : val.value})}} 
                  style={{backgroundColor : val.value }}>
                    
                {  type.type !== "swatch" ?   val.displayValue  : null }

            </aside>
          )})   
      }
      
    </figure>
  </div>
)  })}
    </>  )  }
}

export default Attributes