import {PureComponent} from 'react';
import Price from '../Price/Price';
import Attributes from '../Attributes/Attributes';
import classes from "./CartCard.module.css";
class CartCard extends PureComponent {

decreaseHandel  = (item)=>{
if(item.Qty > 1){
     const num = item.Qty - 1
     this.props.data.changeProprty(item.uniqeId , num , 'Qty')   }
}

increaseHandel =(item)=>{
const num = item.Qty + 1
this.props.data.changeProprty(item.uniqeId , num , 'Qty')
}

previousBgChangeHandel = (item )=>{
if( item.imgCount > 0 ){
     const num = item.imgCount - 1
     this.props.data.changeProprty(item.uniqeId , num , 'imgCount')
     }   
}

nextBgChangeHandel = ( item) =>{
if( item.imgCount < item.data.gallery.length -1 ){
     const num = item.imgCount + 1
     this.props.data.changeProprty(item.uniqeId , num , 'imgCount')
     }
}
 
render(){return(
<main>
{ this.props.data.cartItems?.map((item)=>{

return (<section key={item.uniqeId } className= {this.props.layout ? classes.boxLayout :classes.box}  >

<div className={this.props.layout ? classes.contentLayout : classes.content} >

<p className={this.props.layout ? classes.headerLayout :classes.headerBrand}>
          {item.data.brand}
</p>

<p className={this.props.layout ? classes.headerLayout :classes.header} >  
{item.data.name}
</p>


<Price currencie={this.props.data.currencie}                             
          price={item.data.prices} 
          layoutCart ={this.props.layout}  
/>

<Attributes  selectedValues={item.selectedAttributes}  
               attributes={item.data.attributes}
               foucus= {()=>{}}
               layOut={this.props.layout}
/>    


<b className={classes.remove} onClick={()=>{this.props.data.removeCart(item.uniqeId )}} >Remove</b>  
     
          

</div>


<aside className={this.props.layout ? classes.albumLayout :  classes.album}>

<figure className={classes.control}>
     <p className={this.props.layout ? classes.controlItemLayout :classes.controlItem} onClick={()=>{this.increaseHandel(item)}}> + </p>
     <h5> {item.Qty} </h5>
     <p className={this.props.layout ? classes.controlItemLayout :classes.controlItem}  onClick={()=>{this.decreaseHandel(item)}} > - </p>
</figure>

<div className={classes.photoContiner} >  
          <img className={ classes.photo}  
               src={item.data.gallery[item.imgCount]} alt={item.data.name}/>

     <figcaption className={classes.changeImg}  >
          <h6 onClick={()=>{this.previousBgChangeHandel(item )}} > &lt; </h6>
          <h6 onClick={()=>{this.nextBgChangeHandel( item )}}> &gt; </h6>
     </figcaption>

</div>
</aside>
</section>
)})
} 
</main>
)
}

}

export default CartCard