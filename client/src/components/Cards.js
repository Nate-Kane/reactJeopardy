import React, { useEffect, useState } from 'react';
import Axios from 'axios';

// const Cards = () => {

//   return(
//     <h1>Cards</h1>
//   )
// }

// export default Cards;

export default class Cards extends React.Component {
  state={
    cards: []
  }

  componentDidMount() {
    Axios.get('/api/cards')
    .then(res => {
      const cards = res.data;
      this.setState({ cards });
    })
  }

  render() {
    return (
      <ul>
        { this.state.cards.map(card => <li>{card.category} {card.question}</li>)}
      </ul>
    )
  }
}

// const Cards = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     Axios.get('api/cards')
//     .then(res => {
//       const cards = res.data;
//       setCards({cards})
//     })
// });

//   return (
//     <ul>  {/*     why is cards undefined?? 'Cannot rad property 'map' of undefined     */}
//       { cards.map((card) => <li>{card.category} -- {card.question}?</li>)}
//     </ul>
//   )
// }

// export default Cards;