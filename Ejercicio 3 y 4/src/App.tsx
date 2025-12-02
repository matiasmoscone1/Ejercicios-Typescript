import { useState } from 'react'
import AuthContextProvider from './AuthContext'
import Dashboard from './Dashboard'

function App() {

  return (
    <>
      <AuthContextProvider>     
        <div>
          <h2>Ejercicio 3 y 4</h2>
          
          {/*<Dashboard />*/}
        </div>
      </AuthContextProvider>     



    </>
  )
}

export default App
