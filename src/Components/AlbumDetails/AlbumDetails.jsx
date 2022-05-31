import {PureComponent} from 'react'
import classes from './AlbumDetails.module.css';

class AlbumDetails extends PureComponent {

render(){
return(
     <figure className={classes.box} >

          <img  src={this.props.bannar} alt={this.props.bannar}  className={classes.mainImg} />
          
          <div  className={classes.album} >

               {this.props.gallery?.map(el=>{
                    return  <img src={el} key={el}
                              onClick={()=>{this.props.imgChange(el)}}  
                              alt={el} 
                              className={classes.photo} 
                         />})
               }
          </div>
     
     </figure>  
)
}

}

export default AlbumDetails