
import { Provider } from 'react-redux'
import './App.css'
import { store } from './store'
import CounterApp from './component/CounterApp'

function App() {

  return (
    <Provider store={store}>

      <CounterApp />
    </Provider>
  )
}

export default App
