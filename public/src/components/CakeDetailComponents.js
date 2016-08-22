/**
 * Created by hanyile on 16/8/18.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
import Logo from './Logo';
import Footer from './Footer';
import {Link} from 'react-router';
class CakeDetailComponent extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadPage(this.props.params.id);
  }


  render() {
    const {name, image, style, intro }  = this.props.CakeDetailReducers;
    const  id=this.props.CakeDetailReducers._id;
    return (
        <div>
          <Logo/>
          <p>{id}</p>
          <p>{name}</p>
          <p>{intro}</p>
          <p>{style}</p>
          <img src={ '../' + image}></img>
       <Link to={'/orderlist/' + id}>
         <button className="btn btn-default">立即购买</button>
         </Link>
          <Footer/>
        </div>
    );
  }
}

export default CakeDetailComponent;