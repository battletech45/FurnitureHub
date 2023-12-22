import ItemDetail from '@/components/shopComponents/itemDetail';
import React from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css';

const Item = () => {
  const router = useRouter();
  const { itemID } = router.query;
  console.log("BURADAYIM LAN: " + itemID);
  return (
    <ItemDetail itemID={itemID}/>
  )
}

export default Item;