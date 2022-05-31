import {PureComponent} from 'react'
import classes from './ContentDetails.module.css';
import Button from '../Button/Button';
import Price from '../Price/Price';
import Attributes from '../Attributes/Attributes';
import parse from 'html-react-parser';
class ContentDetails extends PureComponent {

 state ={}

//for set prices
//and update prices whem props change
componentDidUpdate(prevProps) {
  if (this.props.data !== prevProps.data) {
      // for know the attributes    
      this.props.data.attributes.forEach( (el)=>{
        this.setState({[el.name] : null}) 
     })
  }
}

foucusHandel=(val)=>{  
    this.setState(val)
}

addToCartHandel = ()=>{
  if (this.props.data.attributes.length === 0){
      this.props.context.addToCart({ data : this.props.data  })  
  }
  else{
      const selectedAttributes = this.state

      for (const property in selectedAttributes) {
        
        if(selectedAttributes[property] === null ){
          this.props.context.showAlart(true , 'must select attributes')
          }

        else{
          this.props.context.addToCart({selectedAttributes, data : this.props.data , })  
        }
     }
}}

outStockHandel =()=>{
  this.props.context.showAlart(true , 'out of Stock')
}


render(){
     return(   
          <main className={classes.box}>

             <h3 className={classes.header}> {this.props.data.name} </h3>
             <p className={classes.type}> {this.props.data.category} </p>

             <Attributes  selectedValues={this.state} 
                          foucus={this.foucusHandel} 
                          chose={true}
                          attributes={this.props.data.attributes} />

             <h4 className={classes.title} > Price : </h4>
            
             <Price currencie={this.props.context.currencie} price={this.props.data.prices} />
            
              <aside className={classes.btnBox}>
                  {this.props.data.inStock ?
                     <Button clickHandel={this.addToCartHandel} text="add to cart" /> :
                     <Button clickHandel={this.outStockHandel}  text="Out of Stock" />
                  }
              </aside>
         
            <div className={classes.descripsion}   >
              {parse(this.props.data.description || "")}
            </div>

          </main>)


}

}

export default ContentDetails