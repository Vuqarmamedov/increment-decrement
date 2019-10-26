import React from 'react';
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'


function App() {

  return (
    <div>
      <Provider store={createStore(reducers)}>
          <Counter/>
      </Provider>
    </div>
  );
}

export default App;
