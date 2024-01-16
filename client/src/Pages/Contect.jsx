import React, { useState } from 'react'
import ContectGreed from '../Component/ContectGreed';
import ContectForm from '../Component/ContectForm';

const Contect = () => {

  const [Form,SetForm] = useState(false);

  return (
    <>
       {
         Form ? <ContectGreed/> : <ContectForm Myform={SetForm}/>
       }
    </>
  )
}

export default Contect
