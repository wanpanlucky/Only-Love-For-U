/**
 * Created by hanyile on 16/8/18.
 */

import React, {Component} from 'react';// eslint-disable-line no-unused-vars
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
          <div className="liuxiananshen">
            <div className="welcome-section">
              <div className="container">
                <div className="about-grid ">
                  <div className="col-md-8 about-text">
                    <div className="col-md-4 about-img">
                      <img src={ '../' + image} className="img-responsive zoom-img img-rounded cakedetail" ></img>
                    </div>  <h3>CakeDetail--{style}</h3>
                    <h4>蛋糕名称：{name}</h4>
                    <h4>蛋糕风味：{style}</h4>
                    <h4>蛋糕简介：{intro}</h4>
                    <Link to={'/orderlist/' + id}>
                      <button className="btn btn-default">立即购买</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default CakeDetailComponent;