import React, {useState} from 'react';

import './QuoteCard.css';




function QuoteCard ()  {
const[card, setCard] = useState([]);
    function fetchSimpson (){
      fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((res) => res.json())
      .then((data)=> setCard(data[0]));
    }
  
   
  

return (
<div className="card">

<input className="btn text 4xl nb-10" type="button" value="Show Character" onClick={fetchSimpson} /> 

<h1 className="Name">{card.character}</h1>

<img className="card-img" src={card.image}/>

<h2 className="direction">{card.characterDirection} </h2>

<p className="quote">{card.quote}</p>

</div>
)





}

export default QuoteCard;