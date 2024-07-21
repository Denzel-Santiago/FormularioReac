import React, { useState } from 'react';
import TributeForm from '../components/organisms/TributeForm';
import TributeList from '../components/organisms/TributeList';
import './MainPage.css';

const MainPage = () => {
  const [tributes, setTributes] = useState([]);
  const [showTributes, setShowTributes] = useState(false);

  const addTribute = (tribute) => {
    setTributes([tribute, ...tributes]);
  };

  const handleShowTributes = () => {
    setShowTributes(!showTributes);
  };

  return (
    <div className="main-page">
      <TributeForm addTribute={addTribute} showTributes={handleShowTributes} />
      {showTributes && <TributeList tributes={tributes} />}
    </div>
  );
};

export default MainPage;
