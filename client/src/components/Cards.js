import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

  ansArr = [
    "randomAnswer1",
    "randomAnswer2",
    "randomAnswer3",
    "randomAnswer4",
    "randomAnswer5",
  ]

  componentDidMount() {
    Axios.get('/api/cards')
    .then(res => {
      const cards = res.data;
      this.setState({ cards });
    })
  }
  

  render() {
    return (
      <div>
        { this.state.cards.map(card =>
        <Card.Group itemsPerRow={3}>
            <Card raised>
              <Card.Content>
                <Card.Meta as='h1'>{card.category}</Card.Meta>
                <Card.Header>{card.question}</Card.Header>
                  <Card.Description><ul>
                    <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
                    <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
                    <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
                  </ul></Card.Description>
              </Card.Content>
              <Card.Content>
                <Link to='/answer'>
                  <Button color='green' size='mini'>Show Answer</Button>
                </Link>
              </Card.Content>
            </Card>
          </Card.Group>
        )}
      </div>
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