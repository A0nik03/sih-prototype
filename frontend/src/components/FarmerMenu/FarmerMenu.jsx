import React, { useContext } from 'react';
import './FarmerMenu.css';
import FarmerCard from '../FarmerMenu/FarmerCard';
import { StoreContext } from '../../Context/StoreContext';

const FarmerMenu = ({ category }) => {
  const { farmers_list } = useContext(StoreContext);
  console.log("Farmers List:", farmers_list);

  const filteredFarmers = farmers_list && Array.isArray(farmers_list) ? farmers_list : [];

  return (
    <div className='farmer-menu' id='farmer-menu'>
      <p className='heading'>Nearby Farmers!</p>
      <div className='farmer-menu-list'>
        {filteredFarmers.map((farmer) => {
          if (category === "All" || category === farmer.category) {
            return (
              <FarmerCard 
                key={farmer._id}
                farmer={farmer}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FarmerMenu;
