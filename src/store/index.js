import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import rootSaga from '../sagas';


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, middlewares);
  sagaMiddleware.run(rootSaga);
  return store;
}
