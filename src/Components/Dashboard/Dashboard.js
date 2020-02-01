import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      title: '',
      image: ''
    }
  }
  
  componentDidMount(){
    axios.get(`/api/post/${this.props.match.params.id}`).then(res => {
        this.setState({
            username: res.data.username,
            title: res.data.title,
            image: res.data.image,
        })
    })
  }

  render(){
    const {username, title, image} = this.state
    return (
      <div className='dashboard-container'>
        <div className='dash-filter'>
          <input className='dash-searchbox' placeholder='Search by Title'/><button>Search</button><button>Reset</button>
        </div>
        <div className='content-box'>
          <div className='content-post'>
          <h2>{title}</h2>
          <h2>by {username}</h2>
          <img src={image} alt='profile pic'/>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
	return { username: state.reducer.user };
}
  
  export default connect(mapStateToProps, {getUser}) (Dashboard);