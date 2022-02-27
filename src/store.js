import { createStore } from 'redux';
import { initialState, reducer } from './reducer';

// This is a critical step for making the connection between your app and the redux devtools so that you can use the tools in browser to facilitate development
const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reducer, enhancer);
