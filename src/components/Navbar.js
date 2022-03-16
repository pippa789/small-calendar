import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Nav = styled.div`
height: 100px;
width: auto;
background-color: black;
`




function Navigation() {
    const LinkStyle = {
    color: "white",
    margin: "20px",
};

    const navStyle = { 
    display: "flex",  
    flexdirection: "row",
    justifycontent: "space-between", 
    margin: "0px",
};   

  return (
      <Nav>
          <ul style={navStyle}>
              <li>
                  <Link style={LinkStyle} to="/">Home</Link>
              </li>  
              <li>
                  <Link style={LinkStyle} to="/About">About</Link>
              </li>
              <li>
                  <Link style={LinkStyle} to="/calendar">Book now</Link>
              </li>      
          </ul>
      </Nav> 
      
  )
}

export default Navigation

