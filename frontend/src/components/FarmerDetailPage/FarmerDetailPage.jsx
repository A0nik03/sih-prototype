import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../FoodDisplay/FoodDisplay';
import './FarmerDetailPage.css';

const FarmerDetailPage = () => {
  const { id } = useParams();
  const { farmers_list } = useContext(StoreContext);
  const [farmer, setFarmer] = useState(null);
  const [category,setCategory] = useState("All")

  useEffect(() => {
    const fetchFarmer = () => {
      if (farmers_list && Array.isArray(farmers_list)) {
        const foundFarmer = farmers_list.find(f => f._id === id);
        setFarmer(foundFarmer);
      } else {
        console.error('Farmers list is not available or not an array.');
      }
    };

    fetchFarmer();
  }, [id, farmers_list]);

  if (!farmer) {
    return <div>Loading...</div>;
  }

  const { name, mobile, crops, profilePicture } = farmer;
  console.log(profilePicture);
  

  return (
    <div className='farmer-detail-page'>
      <div className='farmer-detail-header'>
        <img
          src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1725366622~exp=1725370222~hmac=e8817b3b3de3b59564b1ee5d49f68df0061a51e8c609dc0161e00998ffc17cde&w=740'
          alt={`${name}'s profile`}
          className='farmer-detail-profile-picture'
        />
        <div className='farmer-detail-info'>
          <h1>{name}</h1>
          <p>Mobile: {mobile}</p>
          <div className='farmer-detail-crops'>
            <h2>Crops:</h2>
            {crops && crops.length > 0 ? (
              <div className='farmer-detail-crops-list'>
                {crops[0].split(',').map((crop, index) => (
              <div key={index} className="farmer-card__crops-item">
                {crop.trim()}
              </div>
            ))}
              </div>
            ) : (
              <p>No crops listed</p>
            )}
          </div>
          <div className='farmer-detail-buttons'>
            <button onClick={() => alert('Chat feature coming soon!')}>Chat</button>
            <button onClick={() => window.location.href = `tel:${mobile}`}>Call</button>
          </div>
        </div>
      </div>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <FoodDisplay category={category}/>
    </div>
  );
};

export default FarmerDetailPage;
