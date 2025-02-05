import React from 'react'

function Testing() {

    const response =async()=>{{
       await  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }}  

    response();


  return (
    <div>Testing</div>
  )
}

export default Testing