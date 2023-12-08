import React from 'react';
import PropTypes from 'prop-types';
import './itemCardStyle.css';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {
  const { id, imageUrl, title, price } = item;

  return (
    <Link to={`${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-container">
        <div className="image-container">
          <img className="item-image" src={imageUrl} alt="Item" />
        </div>
        <p>{title}</p>
        <h3>{price}</h3>
      </div>
    </Link>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemCard;
