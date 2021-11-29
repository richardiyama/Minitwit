import {
    CREATE_COMMENT,
    
    
  } from "./types";
  
  import CommentDataService from "../services/post.service";
  
  export const createComment = (name, text,postId) => async (dispatch) => {
    try {
      const res = await CommentDataService.create({ name, text,postId });
  
      dispatch({
        type: CREATE_COMMENT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  
  
  