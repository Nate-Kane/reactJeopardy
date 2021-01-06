import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react';

export default () => {
  return (
    <>
      <p>answer</p>
      <Link to='/cards'>
        <Button>
          <p>go back</p>
        </Button>
      </Link>
    </>
  )
}