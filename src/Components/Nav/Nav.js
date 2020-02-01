import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Nav extends React.Component {
  render(){
    console.log(this.props);
    if(this.props.location.pathname === '/') {
      return <></>;
    } else {
        return (
          <div className='nav-bar'>
            <div className='profile-pic' stlye='background-image:url("https://robohash.org/")'></div>
            <div onClick={() => this.props.history.push('/dashboard')} className='home'>Dashboard</div>
            <div onClick={() => this.props.history.push('/new')} className='add'>Add Post</div>
            <button onClick={() => axios.post('/auth/logout').then(() => this.props.history.push('/'))} className='logout'>Logout</button>
          </div>
        )
      }
    }
  } 

  function mapStateToProps(state) {
    return { username: state.reducer.user };
  }

  export default connect(mapStateToProps)(withRouter(Nav));
