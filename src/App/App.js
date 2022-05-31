import './App.css';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Product from "../Pages/Product/Product";
import DataContext from '../Context/DataContext';
import Details from '../Pages/Details/Details.jsx';
import Cart from "../Pages/Cart/Cart";
import Alert from '../Components/Alert/Alert';
import Order from '../Components/Order/Order';
import CartLayout from "../Components/CartLayout/CartLayout";
import NotFound from '../Components/NotFound/NotFound';
import { v4 as uuidv4 } from 'uuid';

class App extends Component  {
 state = {cartItems :[],
      currencie : "$" ,
      chosenCategorie : "" , 
      totalPrice : 0 ,
      totalQty : 0 ,
      order : false,
      notification : false,
      error : false ,
      cartLayout :false ,
      currencieLayout : false,
}

closeLayouts =()=>{
  this.setState({ currencieLayout : false,  order : false , cartLayout: false})
}

currenciesHandel = (chosenCurrencies)=>{
  this.setState({currencie: chosenCurrencies , currencieLayout: false})
}

getChosenCategorie = (val)=>{
    this.setState({chosenCategorie : val})
}

addToCart = (value)=>{
  const cartIndx =  this.state.cartItems.findIndex((el)=>{
    return value.data.id === el.data.id
  })
   if(cartIndx >= 0 ){
      let theSame = true
    for (let c in this.state.cartItems[cartIndx].selectedAttributes) {
      for (let v in value.selectedAttributes) {
               if (  c !== v  || value.selectedAttributes[v] !== this.state.cartItems[cartIndx].selectedAttributes[c] ){
                  theSame = false
               }
      }}   

      if(theSame){
        this.setState({
          cartItems : this.state.cartItems.map((item, index) =>{  
           return  index === cartIndx ? { ...item, Qty :  this.state.cartItems[cartIndx].Qty + 1 } : item 
          })
        })      
    }
    else{
      this.setState({cartItems: [{...value ,uniqeId: uuidv4(), Qty : 1  , imgCount : 0} , ...this.state.cartItems]})
    }
  }
    
   else{
     this.setState({cartItems: [{...value ,uniqeId: uuidv4(), Qty : 1  , imgCount : 0} , ...this.state.cartItems]})
    }
    
    this.showAlart(false , 'add successfully')
}

changeProprty = (itemId , num  , proprty)=>{  
  const indxEl =  this.state.cartItems.findIndex((el)=>{
      return el.uniqeId === itemId
    })

    this.setState({
      cartItems : this.state.cartItems.map((item, index) =>{
      
      return  index === indxEl ? { ...item, [proprty]: num } : item 
      })
    })
}

removeCart = (itemId)=>{

  this.setState({cartItems : this.state.cartItems.filter((el)=>{
    return el.uniqeId !== itemId
  }) })
}

calculateTotalPrice=()=>{
  let sum = 0 ;   
  this.setState({totalPrice : sum })

  this.state.cartItems.forEach((el)=>{  
      const selectPrice = el.data.prices.find(price=>{
         return  price.currency.symbol ===  this.state.currencie  
      })
    sum += ( selectPrice.amount *  el.Qty )
    this.setState({totalPrice : sum.toFixed(2) })
  })    
}

calculateTotalQty= ()=>{
  let total = 0 
  this.setState({totalQty : total })
  
  this.state.cartItems?.forEach((el)=>{
    total = total + el.Qty      
    this.setState({totalQty : total})      
  })
 
}

showAlart =(error , text)=>{
  this.setState({error : error})
  this.setState({alertText : text})
  this.setState({notification : true})

 setTimeout(()=>{this.setState({notification : false})}, 3000)
}

showOrder=(targetBoolean)=>{

  if(this.state.cartItems.length === 0){
    this.showAlart(true , "your cart is empty")
  }
  else{  
    this.closeLayouts()
    this.setState({order :targetBoolean })
  }
  if(!targetBoolean){
    this.setState({cartItems : []})
  }
}

showCartLayout =(targetBoolean)=>{
  this.closeLayouts()
  const toggelLayoutCart = !this.state.cartLayout 
    this.setState({ cartLayout : toggelLayoutCart})
  
}

showCurrencieLayout =()=>{
  this.closeLayouts()

  const toggel = !this.state.currencieLayout
  this.setState({currencieLayout: toggel})
}



render(){
  return  (
< DataContext.Provider value={{calculateTotalPrice : this.calculateTotalPrice,
                                 calculateTotalQty : this.calculateTotalQty,
                                   changeCurrencie : this.currenciesHandel,
                                    showCartLayout : this.showCartLayout,
                                     changeProprty : this.changeProprty,
                                        addToCart  : this.addToCart ,
                                        showOrder  : this.showOrder,
                                        removeCart : this.removeCart,
                                        showAlart  : this.showAlart,
                                        cartLayout : this.cartLayout,
                                        totalQty   : this.state.totalQty,
                                        totalPrice : this.state.totalPrice ,
                                        currencie  : this.state.currencie ,
                                        cartItems  : this.state.cartItems }}>
<BrowserRouter>

<Navbar choseCategorie={this.getChosenCategorie} showCurrencieLayout={this.showCurrencieLayout}  
        calculateTotalQty = { this.calculateTotalQty} cartItems={this.state.cartItems} chosenCategorie={this.state.chosenCategorie}
        currencieLayout={this.state.currencieLayout} changeCurrencie ={this.currenciesHandel}  />

{this.state.order?  <Order/>   : null }
{this.state.notification? <Alert error={this.state.error} text={this.state.alertText}/> : null}
{this.state.cartLayout? <CartLayout calculateTotalPrice ={this.calculateTotalPrice}
                                      cartItems ={ this.state.cartItems }/> : null}
  <Routes> 
      <Route path='/'           element={<Product chosenCategorie={this.state.chosenCategorie} />} />  
      <Route path="Details/:id" element={<Details />} />
      <Route path="Cart"        element={<Cart />}    />       
      <Route path="*"           element={<NotFound/>} />   
  </Routes>

</ BrowserRouter>
</ DataContext.Provider >
)};


}

export default App;
