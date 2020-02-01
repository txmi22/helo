import React from 'react';
import {withRouter} from 'react-router-dom'

function Post(props){
    return(
        <div className='post-box' onClick={() => props.history.push(`/post/${props.id}`)}>
            <p>{props.title}</p>
            <img src={props.image} alt='post'/>
            <p>{props.content}</p>
            <p>Posted By: {props.username}</p>
        </div>
    )
}

export default withRouter(Post)