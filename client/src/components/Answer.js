import React from 'react';
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react';
import Axios from 'axios';

export default class Answer extends React.Component {
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
      <div Align='center'>
        <h1>The answer is... (how do I show the answer?) </h1>
        <Link to='/cards'>
          <Button size='huge' color='yellow'>
            Play again
          </Button>
        </Link>
      </div>
    )
  }
}

// export default class Cards extends React.Component {
//   state={
//     cards: []
//   }

//   ansArr = [
//     "randomAnswer1",
//     "randomAnswer2",
//     "randomAnswer3",
//     "randomAnswer4",
//     "randomAnswer5",
//   ]

//   componentDidMount() {
//     Axios.get('/api/cards')
//     .then(res => {
//       const cards = res.data;
//       this.setState({ cards });
//     })
//   }
  

//   render() {
//     return (
//       <div>
//         { this.state.cards.map(card =>
//         <Card.Group itemsPerRow={3}>
//             <Card>
//               <Card.Content>
//                 <Card.Meta as='h1'>{card.category}</Card.Meta>
//                 <Card.Header Align='center'>{card.question}</Card.Header>
//                   <Card.Description><ul>
//                     <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
//                     <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
//                     <li>{this.ansArr[(Math.floor(Math.random()*this.ansArr.length))]}</li>
//                   </ul></Card.Description>
//               </Card.Content>
//               <Card.Content>
//                 <Link to='/answer'>
//                   <Button color='green' size='small'>Show Answer</Button>
//                 </Link>
//               </Card.Content>
//             </Card>
//           </Card.Group>
//         )}
//       </div>
//     )
//   }
// }