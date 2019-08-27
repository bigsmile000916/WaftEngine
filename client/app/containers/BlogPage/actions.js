import * as types from './constants';

export const loadBlogRequest = payload => ({
  type: types.LOAD_BLOG_REQUEST,
  payload,
});
export const loadBlogSuccess = payload => ({
  type: types.LOAD_BLOG_SUCCESS,
  payload,
});
export const loadBlogFailure = payload => ({
  type: types.LOAD_BLOG_FAILURE,
  payload,
});

export const loadRelatedBlogsRequest = payload => ({
  type: types.LOAD_RELATED_BLOGS_REQUEST,
  payload,
});
export const loadRelatedBlogsSuccess = payload => ({
  type: types.LOAD_RELATED_BLOGS_SUCCESS,
  payload,
});
export const loadRelatedBlogsFailure = payload => ({
  type: types.LOAD_RELATED_BLOGS_FAILURE,
  payload,
});

export const loadRecentBlogsRequest = payload => ({
  type: types.LOAD_RECENT_BLOGS_REQUEST,
  payload,
});
export const loadRecentBlogsSuccess = payload => ({
  type: types.LOAD_RECENT_BLOGS_SUCCESS,
  payload,
});
export const loadRecentBlogsFailure = payload => ({
  type: types.LOAD_RECENT_BLOGS_FAILURE,
  payload,
});
export const setOneValue = payload => ({
  type: types.SET_ONE_VALUE,
  payload,
});
export const loadCommentRequest = payload => ({
  type: types.LOAD_COMMENT_REQUEST,
  payload,
});
export const loadCommentSuccess = payload => ({
  type: types.LOAD_COMMENT_SUCCESS,
  payload,
});
export const loadCommentFailure = payload => ({
  type: types.LOAD_COMMENT_FAILURE,
  payload,
});
export const postCommentRequest = payload => ({
  type: types.POST_COMMENT_REQUEST,
  payload,
});
export const postCommentSuccess = payload => ({
  type: types.POST_COMMENT_SUCCESS,
  payload,
});
export const postCommentFailure = payload => ({
  type: types.POST_COMMENT_FAILURE,
  payload,
});
