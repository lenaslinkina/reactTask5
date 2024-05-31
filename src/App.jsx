import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store/store';
import { FilmProvider } from './Context/FilmContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Provider store={store}>
     <FilmProvider>
     <Router />
     </FilmProvider>
        </Provider>

      </div>
    </>
  )
}

export default App
