// import { Header } from 'semantic-ui-react';    // I haven't installed or imported semantic ui

import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

// export default () => <Header>Home</Header>

const Home = () => {
  return (
    <>
      <h1 Align='center'>Welcome to reactJeopardy!</h1>
      <div Align='center'>
        <Link to='/cards'>
          <Button color='yellow' size='huge'>PLAY</Button>
        </Link>
      </div>
    </>
  )
}

export default Home;