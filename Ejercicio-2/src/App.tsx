import { useState } from 'react'
import Form from './Form';
import { FormProps } from './types';

function App() {
  
  const validationFormName = (word: string) => {
    const regEx = /^[A-Za-z]+$/;    
    if(!regEx.test(word)){
      return false;
    }
    return true;    
  }


  return (
    <>
    
      <Form validationFormName={validationFormName}/>

    </>
  )
}

export default App
