import React, { useState, useEffect } from 'react';
import './searchfilter.css';

const SearchFilter = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    applySearchFilter();
  }, [searchTerm, products]);

  const applySearchFilter = () => {
    const trimmedSearchTerm = searchTerm.toLowerCase().trim();

    const filteredProducts = products.filter(product => {
      const matchesTerm =
        product.name.toLowerCase().includes(trimmedSearchTerm) ||
        product.color.toLowerCase().includes(trimmedSearchTerm) ||
        product.brand.toLowerCase().includes(trimmedSearchTerm);

      const matchesGender =
        (trimmedSearchTerm === 'men' && product.gender.toLowerCase() === 'men') ||
        (trimmedSearchTerm === 'women' && product.gender.toLowerCase() === 'women');

        const matchesPrice =
        parseFloat(trimmedSearchTerm) === product.price;

      return matchesTerm || matchesGender || matchesPrice;
    });

    setFilteredProducts(filteredProducts);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Here"
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button onClick={applySearchFilter}>Search</button>
    </div>
  );
};

export default SearchFilter;
