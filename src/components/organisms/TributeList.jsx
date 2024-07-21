import React from 'react';
import TributeCard from './TributeCard';
import './TributeList.css';

const TributeList = ({ tributes }) => {
  return (
    <div className="tribute-list">
      {tributes.map((tribute, index) => (
        <TributeCard key={index} tribute={tribute} />
      ))}
    </div>
  );
};

export default TributeList;
