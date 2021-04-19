import React from 'react';
import QuoteCard from './QuoteCard';
import element from './element';

import './App.css';




function App() {
  return (
    <div className="App flex flex-wrap justify-center">
      {element.map((card,index)=>(
      <QuoteCard key={index} name={card.character} img={card.img} direction={card.direction} quote={card.quote} />
      ))}
    </div>
  );
}

export default App;
