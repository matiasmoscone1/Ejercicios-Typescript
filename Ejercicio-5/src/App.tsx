import ShoppingCartProvider from './Context/ShoppingCartProvider'
import './css/index.css'
import Dashboard from './Dashboard'

function App() {
  
  return (
    <>
      <ShoppingCartProvider>

        <Dashboard />
        
      </ShoppingCartProvider>


    </>
  )
}

export default App
