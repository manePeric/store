import React from 'react'

function ProductComponent({name, count}) {
  return (
    <div>
       <p>Name: {name}</p>
       <p>At store: {count}</p>
    </div>
  )
}

export default SingleProduct