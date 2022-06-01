import {PureComponent} from 'react'
import classes from './Title.module.css'


class Title extends PureComponent {
    render(){
         return(
              <h2 className={(this.props.text ==="cart"? classes.headerCart :  classes.headerSize ) +" "+ classes.header  }>{this.props.text}</h2>
 )}}

export default Title