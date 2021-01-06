
// FOR NOW I'LL JUST DO EXPORT DEFAULT AND A RANDOM NOTE OR SOMETHING TO SHOW THAT THIS PAGE IS CONNECT

import { Link } from "react-router-dom";



                    // HERE IS AN EXAMPLE OF A NAVBAR WITH SEMANTIC-UI
// import { Link } from "react-router-dom";
// import { Menu } from "semantic-ui-react";

// export default () => {
//   return (
//     <Menu>
//       <Link to="/">
//         <Menu.Item name="Home">Home</Menu.Item>
//       </Link>
//       <Link to="/things">
//         <Menu.Item name="Home">Things</Menu.Item>
//       </Link>
//     </Menu>
//   );
// };


const Navbar = () => (
  <>
    <Link to='/'>Home _ </Link>
    <Link to='/cards'> Cards</Link>
  </>
)

export default Navbar;