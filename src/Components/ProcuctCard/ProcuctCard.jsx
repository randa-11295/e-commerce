import {PureComponent} from 'react';
import classes from './ProuductCard.module.css';
import {Link } from "react-router-dom";
import Price from '../Price/Price';
import dataContext from '../../Context/DataContext';

class ProcuctCard extends PureComponent {
state = {}

addToCartHandel = (event)=>{
event.preventDefault()
const selectedAttributes={}
this.props.data.attributes.forEach( (el)=>{
     selectedAttributes[el.name]  = el.items[0].value;
})
this.props.context.addToCart({selectedAttributes, data : this.props.data  })  
}

 

render(){
return(
<aside className={classes.box}  >
<Link className={classes.price} 
     to={`/Details/${this.props.data.id}`}>

<div   className={classes.photoContiner} >
     <img src={this.props.data.gallery[0]} className={classes.photo}  alt={this.props.data.id} />                               
     { this.props.data.inStock ? null : <div className={classes.stock} >
                                             out of stock
                                        </div>
     }         
</div>
<div  className={classes.content}>
     <figure className={classes.data +" "+ (this.props.data.inStock ? null : classes.textOutStock )} >
          <p> {this.props.data.brand} {" "}
               {this.props.data.name} </p>

          <dataContext.Consumer>
               {(val)=>{return(
                    <Price currencie={val.currencie} layoutCart={true}  price={this.props.data.prices} />
               )}}
          </dataContext.Consumer>
          
     </figure>
     {this.props.data.inStock ? <figcaption  onClick = {this.addToCartHandel}  className={classes.cart}  /> : null  }
</div>
</Link>
</aside>
)
}

}

export default ProcuctCard