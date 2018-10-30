import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './components/Home';
import reducer from './reducers';


const store = createStore(reducer); 

ReactDom.render(
	<Provider store={store}>
    	<Home />
    </Provider>
, document.getElementById("root"));