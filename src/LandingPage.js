import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logoImage from './logo.png';
const LandingPage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/input');
  }

  return (
    <div className="landing-page">
      <div className="image-container">
        <img src={logoImage} alt="Background" />
      </div>
      <div className="text-container">
        <h1>건강 수준에 맞는 영양제를 찾아드립니다!</h1>
        <style>
          {`
            .button {
              display: inline-block;
              padding: 12px 20px;
              font-size: 16px;
              color: #0c3311;
              background-color: #f1ecec;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.3s ease;
              margin-top: 100px;
              margin-left: 420px;
            }

            .button:hover {
                background-color: #f7ea7a; /* 버튼의 배경색 */
            }
          `}
        </style>
        <button className="button" onClick={handleClick}>
          측정하기
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
