import React from 'react';
import MainComponent from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Mystore} from './redux/store'

function App() {
  return (
    <div>
      <Provider store={Mystore}>
        <BrowserRouter>
          <MainComponent/>
        </BrowserRouter>   
      </Provider>
    </div>
  );
}

export default App;
