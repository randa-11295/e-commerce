import React from "react";


const dataContext = React.createContext({
     currencie: '',
     cartItems : [],
     addToCart : (e)=>{return e}

});

export default dataContext