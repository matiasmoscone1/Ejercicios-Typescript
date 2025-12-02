import { useState } from 'react'
import AuthContextProvider from './AuthContext'
import Dashboard from './Dashboard'
import Login from './Login'

function App() {

  return (
    <>
      <AuthContextProvider>     
        <div>
          <h2>Ejercicio 3 y 4</h2>
          <Login />
          <Dashboard />
        </div>
      </AuthContextProvider>     



    </>
  )
}

export default App
