import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePosts, deleteAllPosts } from "../actions/posts";
import { Link } from "react-router-dom";





import UserService from "../services/user.service";

 class UserPost extends Component {
  constructor(props) {
    super(props);

    this.refreshData = this.refreshData.bind(this);
    this.setActivePost = this.setActivePost.bind(this);
    this.removeAllPosts = this.removeAllPosts.bind(this);


    this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      name: "",
      text:"",
      postId:"",
      currentPost: null,
      currentIndex: -1,
    };
  }

  handleNameChange(e){
    this.setState({title:e.target.value})
}
handleTextChange(e){
    this.setState({content:e.target.value})
}

  saveComment() {
      
     

    const { name, text ,postId} = this.state;
    
    this.props
      .createComment(name, text,postId)
      .then((data) => {
        this.setState({
          
          name: data.name,
          text: data.text,
          postId: data.postId,

          
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  
  }
  componentDidMount() {
    this.props.retrievePosts();
    console.log(this.props);
    //{this.posts.map((post, index) => (this.setState({postId: post.id})))}
    UserService.getAllUser(
      response => {
        this.setState({
          content: response.data
        });
        console.log(this.response.data);
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  refreshData() {
    this.setState({
      currentPost: null,
      currentIndex: -1,
    });
  }

  setActivePost(post, index) {
    this.setState({
      currentPost: post,
      currentIndex: index,
    });
    
  }

  removeAllPosts() {
    this.props
      .deleteAllPosts()
      .then((response) => {
        console.log(response);
        this.refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentPost, currentIndex } = this.state;
    const { posts } = this.props;
    
    return (
      <div className="list row">
          
      <div className="col-md-6">
        <h4>Posts List</h4>

        <ul className="list-group">
          {posts &&
            posts.map((post, index) => (
              <li
                className={"list-group-item " +(index === currentIndex ? "active" : "")}
                onClick={() => this.setActivePost(post, index)}
                key={index}
              >
                <p>{post.title}</p>
                
               <span>Comment:</span>
               <p> {post.comments.map((comment, index) => (comment.text))}</p>
                
              </li>
              
              
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={this.removeAllPosts}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentPost ? (
          <div>
            <h4 className="list-group-item-heading">Post</h4>
            <div className="list-group-item-text">
              <label>
                <strong>Post:</strong>
              </label>{" "}
              {currentPost.title}
            </div>
            <div className="list-group-item-text">
              <label>
                <strong>Content:</strong>
              </label>{" "}
              {currentPost.content}
            </div>
            <div className="list-group-item-text">
              <label>
                <strong>Date:</strong>
              </label>{" "}
              {currentPost.createdAt}
            </div>
            
            <div className="list-group-item-text">
              <label>
                <strong>Add Comment</strong>
              </label>{" "}
              <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  name="name"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="description">Text</label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  required
                  value={this.state.text}
                  onChange={this.handleTextChange}
                  name="text"
                />
              </div>
              
              <button onClick={this.saveComment} className="btn btn-success">
                Submit
              </button>
            </div>
            </div>

            <Link
              to={"/posts/" + currentPost.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Post to comment...</p>
          </div>
        )}
      </div>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { retrievePosts,  deleteAllPosts })(UserPost);