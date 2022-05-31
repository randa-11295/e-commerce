import {Component} from 'react'
import withParams from '../../HOC/withParams';
import { client } from '../../common/client';
import classes from './Details.module.css';
import AlbumDetails  from "../../Components/AlbumDetails/AlbumDetails";
import ContentDetails from "../../Components/ContentDetails/ContentDetails"
import dataContext from '../../Context/DataContext';
import  {detailsProductQuery} from '../../common/queris'

class Details extends Component {
  
  state ={
    notification : false,
    error : false,
    alertText : 'add successfully',
        bannar : "",
        details :  { },
    }
  
  // change main image
  changeImageHandel = (src)=>{
    this.setState({bannar : src})
  }


  componentDidMount() {
    const { id } = this.props.params;
    
    client.query({query: detailsProductQuery , variables: { id : id}  })

            .then(result =>{
              const { data } = result;
              this.setState({details : data.product})
              this.setState({bannar : data.product.gallery[0]})              
           },
           error =>{
                console.log(error)
           }  )
  }

  showNotifcation =(error , text)=>{
      this.setState({error : error})
      this.setState({alertText : text})
     this.setState({notification : true})

     setTimeout(()=>{
        this.setState({notification : false})}, 3000)
  }


render(){
  return(
    <section>
            <div className={classes.box}  >
                <AlbumDetails imgChange={this.changeImageHandel}
                              bannar={this.state.bannar} 
                              gallery={this.state.details.gallery}
                 />

                <dataContext.Consumer  >
                          {(val)=>{return(
                             <ContentDetails data={this.state.details} 
                                             notificationHandel ={this.showNotifcation}
                                             context={val} />
                          )}}

                 </dataContext.Consumer>
             </div>
        </section>
        )
    }
}

export default  withParams(Details);
 