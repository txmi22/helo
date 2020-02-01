import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            imageInput: '',
            titleInput: '',
            contentInput: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submit = (image, title, content) => {
        axios.post(`/api/post/${this.props.match.params.id}`, {image, title, content}).then( () => {
            this.props.history.push('/dashboard')
        })
    }

    render(){
      const {imageInput, titleInput, contentInput} = this.state
      return(
          <div className='add-form-container'>
              <div className='add-box'>
                  <input
                      name='titleInput'
                      value={titleInput}
                      onChange={e=>this.handleChange(e)}
                      placeholder='Title'
                  />
                  <img
                      src={imageInput || 'data:image/jpeg;base64,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'}
                      alt='preview'
                      className='image-preview'
                  />
                  <input
                      name='imageInput'
                      value={imageInput}
                      onChange={e=>this.handleChange(e)}
                      placeholder='Image URL'
                  />
                  <textarea
                      name='contentInput'
                      value={contentInput}
                      onChange={e=>this.handleChange(e)}
                      placeholder='Content'
                  />
                  <button className='submit-form' onClick={() => this.submit(imageInput, titleInput, contentInput)}>Post</button>
              </div>
          </div>
        )
    }
}
export default Form