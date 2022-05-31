import {PureComponent} from 'react'
import classes from './Title.module.css'


class Title extends PureComponent {
    render(){
         return(
              <h2 className={classes.header}>{this.props.text}</h2>
 )}}

export default Title