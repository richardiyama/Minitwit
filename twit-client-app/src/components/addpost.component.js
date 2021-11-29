import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/posts";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        
        this.savePost = this.savePost.bind(this);
        this.newPost = this.newPost.bind(this);

        this.state = {
          title:'',
          content:'',
          userId:'',

          submitted: false,
        };
      }

      
    handleTitleChange(e){
        this.setState({title:e.target.value})
    }
    handleContentChange(e){
        this.setState({content:e.target.value})
    }
    

    componentDidMount () {
      this.setState({userId: this.props.user.id})
    }
  
    savePost() {
      
     

      const { title, content ,userId} = this.state;
      
      this.props
        .createPost(title, content,userId)
        .then((data) => {
          this.setState({
            
            title: data.title,
            content: data.content,
            userId: data.userId,
  
            submitted: true,
          });
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    
    }
    newPost() {
      this.setState({
        title: "",
        content: "",
        userId: "",
        submitted: false,
      });
    }

    render() {
      
      return (
       
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newPost}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                  name="title"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Content</label>
                <input
                  type="text"
                  className="form-control"
                  id="content"
                  required
                  value={this.state.content}
                  onChange={this.handleContentChange}
                  name="content"
                />
              </div>
              
              <button onClick={this.savePost} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }

export default connect(mapStateToProps, { createPost })(AddPost);