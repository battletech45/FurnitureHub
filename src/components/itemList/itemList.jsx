import React, { useState } from 'react';
import ItemCard from '../itemCard/itemCard';
import './itemListStyle.css';

const ItemList = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='list-container'>
        {currentItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className='pagination-container'>
      {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => paginate(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
    </div>
  </div>
  );
};
;

export default ItemList;
