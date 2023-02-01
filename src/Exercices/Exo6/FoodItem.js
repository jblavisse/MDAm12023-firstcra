import React from 'react'

const FoodItem = ({title,quantity}) => {
  return (
    <li>{quantity} {title}</li>
  )
}

export default FoodItem