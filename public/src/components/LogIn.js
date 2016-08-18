/**
 * Created by wt on 16-8-18.
 */

import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
class LogIn extends Component {
  doAction() {
    let arr={};
    let inputn = this.refs.inputName.value.trim();
    let inputp = this.refs.inputPwd.value.trim();
    arr['username']=inputn;
    arr['password']=inputp;
    if (arr) {
      this.props.LogIna(arr);
    }
    this.refs.inputName.value = '';
    this.refs.inputPwd.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.doAction();
  }
  render() {
    return (
        <div className="container">
            <div className="col-md-10">
              <div className="col-md-6 ">
                <form action="#" className="form-horizontal col-md-12">
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">Username:</label>
                    <div className="col-sm-6 col-md-6">
                      <input type="email"
                             className="form-control"
                             id="inputEmail3"
                             placeholder="Please input username"
                             ref="inputName"
                             onKeyPress={this.handleKeyPress.bind(this)}
                      />
                    </div>
                    <span className="text-danger col-md-3" id="error_show"> </span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-md-3 control-label">Password:</label>
                    <div className="col-sm-6 col-md-6">
                    <input type="Password"
                           className="form-control"
                           id="inputEmail3"
                           placeholder="Please input username"
                           ref="inputPwd"
                           onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    </div>
                    <span className="text-danger col-md-3" id="error_show"> </span>
                 </div>
                  <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={this.doAction.bind(this)} type="button" className="btn btn-default">Create new
                      account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    );
  }
}
export default LogIn;