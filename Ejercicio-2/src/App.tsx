import { useState } from 'react'
import Form from './Form';
import { FormProps } from './types';

function App() {
  
  const validationFormName = (word: string) => {
    const regEx = /^[A-Za-z]{4,16}$/;
    if(!regEx.test(word)){
      return false;
    }
    return true;
  }

  const validationFormEmail = (word: string) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regEx.test(word)){
      return false;
    }
    return true;
  }


  return (
    <>
    
      <Form validationFormName={validationFormName} 
      validationFormEmail={validationFormEmail}
      
      />
    </>
  )
}

export default App
