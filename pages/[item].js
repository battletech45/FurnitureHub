import ItemDetail from '@/components/shopComponents/itemDetail';
import React from 'react'

const Item = ({item}) => {
  return (
    <ItemDetail product={item}/>
  )
}

export default Item;