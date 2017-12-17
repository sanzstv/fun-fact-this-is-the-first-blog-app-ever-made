import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = "?key=16PSYCHE";
export function fetchPosts(){
	const request = axios.get(`${API_URL}/posts${API_KEY}`);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}