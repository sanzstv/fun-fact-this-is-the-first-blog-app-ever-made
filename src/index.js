import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsList from './components/posts_list';
import PostNew from './components/post_new';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<Switch>
    			<Route path="/posts/new" component={PostNew} />
    			<Route path="/" component={PostsList} />
   			</Switch>
   		</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
