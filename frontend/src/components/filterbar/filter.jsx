import React, { useState, useEffect } from 'react';
import './filter.css';

const Filter = ({ products, setFilteredProducts }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    gender: [],
    price: [],
    brands: []
  });


   

  const applyFilters = () => {
    const filteredProducts = products.filter(product => {
      const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(product.color);
      const matchesGender = selectedFilters.gender.length === 0 || selectedFilters.gender.includes(product.gender);
      const matchesBrands = selectedFilters.brands.length === 0 || selectedFilters.brands.includes(product.brand);

      const matchesPrice = selectedFilters.price.length === 0 || selectedFilters.price.some(priceRange => {
        if (priceRange === '450+') {
          return product.price >= 450;
        } else {
          const [min, max] = priceRange.split('-').map(Number);
          return product.price >= min && product.price <= max;
        }
      });

      return matchesColor && matchesGender && matchesPrice && matchesBrands;
    });

    setFilteredProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters, products, setFilteredProducts]);

  const handleFilterChange = (category, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [category]: selectedFilters[category].includes(value)
        ? selectedFilters[category].filter(item => item !== value)
        : [...selectedFilters[category], value]
    });
  };

  


  return (
    <div className="filter p-3 bg-white shadow rounded">
      <h1 className="h5 mb-3">Color</h1>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="red"
          value="red"
          checked={selectedFilters.color.includes('red')}
          onChange={() => handleFilterChange('color', 'red')}
        />
        <label className="form-check-label" htmlFor="red">
          Red
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="blue"
          value="blue"
          checked={selectedFilters.color.includes('blue')}
          onChange={() => handleFilterChange('color', 'blue')}
        />
        <label className="form-check-label" htmlFor="blue">
          Blue
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="black"
          value="black"
          checked={selectedFilters.color.includes('black')}
          onChange={() => handleFilterChange('color', 'black')}
        />
        <label className="form-check-label" htmlFor="blue">
          Black
        </label>
      </div>

      <h1 className="h5 mt-4 mb-3">Gender</h1>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="men"
          value="men"
          checked={selectedFilters.gender.includes('men')}
          onChange={() => handleFilterChange('gender', 'men')}
        />
        <label className="form-check-label" htmlFor="men">
          Men
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="women"
          value="women"
          checked={selectedFilters.gender.includes('women')}
          onChange={() => handleFilterChange('gender', 'women')}
        />
        <label className="form-check-label" htmlFor="women">
          Women
        </label>
      </div>

      <h1 className="h5 mt-4 mb-3">Price Range</h1>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="price-range-1"
          value="0-250"
          checked={selectedFilters.price.includes('0-250')}
          onChange={() => handleFilterChange('price', '0-250')}
        />
        <label className="form-check-label" htmlFor="price-range-1">
          0 - 250
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="price-range-2"
          value="251-450"
          checked={selectedFilters.price.includes('251-450')}
          onChange={() => handleFilterChange('price', '251-450')}
        />
        <label className="form-check-label" htmlFor="price-range-2">
          251 - 450
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="price-range-3"
          value="450+"
          checked={selectedFilters.price.includes('450+')}
          onChange={() => handleFilterChange('price', '450+')}
        />
        <label className="form-check-label" htmlFor="price-range-3">
          450+
        </label>
      </div>

      <h1 className="h5 mt-4 brands mb-3">Brands</h1>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="nike"
          value="nike"
          checked={selectedFilters.brands.includes('nike')}
          onChange={() => handleFilterChange('brands', 'nike')}
        />
        <label className="form-check-label" htmlFor="nike">
          Nike
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="polo"
          value="polo"
          checked={selectedFilters.brands.includes('polo')}
          onChange={() => handleFilterChange('brands', 'polo')}
        />
        <label className="form-check-label" htmlFor="polo">
          Polo
        </label>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="checkbox"
          id="puma"
          value="puma"
          checked={selectedFilters.brands.includes('puma')}
          onChange={() => handleFilterChange('brands', 'puma')}
        />
        <label className="form-check-label" htmlFor="puma">
          Puma
        </label>
      </div>

       
    </div>
  );
};

export default Filter;
