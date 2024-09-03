import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './FarmerCard.css';
import { StoreContext } from '../../Context/StoreContext';

const FarmerCard = ({ farmer }) => {
  const { url } = useContext(StoreContext);
  const navigate = useNavigate(); // Hook for navigation

  const { _id, name, crops, profilePicture } = farmer;

  const handleClick = () => {
    navigate(`/farmer/${_id}`); // Navigate to the farmer detail page
  };

  const defaulImage = "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1725366622~exp=1725370222~hmac=e8817b3b3de3b59564b1ee5d49f68df0061a51e8c609dc0161e00998ffc17cde&w=740";

  const profilePicUrl = profilePicture
    ? `${url}/images/${profilePicture.split('\\').join('/')}`
    : defaulImage;

  return (
    <div className="farmer-card" onClick={handleClick}>
      <div className="farmer-card__profile-picture">
        <img src={defaulImage} alt={`${name}'s profile`} />
      </div>
      <h2 className="farmer-card__name">Name: {name}</h2>
      <div className="farmer-card__crops">
        {crops && crops.length > 0 ? (
          <div className="farmer-card__crops-container">
            {crops[0].split(',').map((crop, index) => (
              <div key={index} className="farmer-card__crops-item">
                {crop.trim()}
              </div>
            ))}
          </div>
        ) : (
          <p className="farmer-card__crops-item">No crops listed</p>
        )}
      </div>
    </div>
  );
};

export default FarmerCard;
