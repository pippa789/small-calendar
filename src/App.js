import styled from 'styled-components'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import head from "./images/head.jpg"
import Navigation from './components/Navbar';
import About from './pages/About';
import ReactCalendar from './components/calendar'

const Container = styled.div`
width: 100%;
height: 100%;
`;

const HeadImage = styled.div`
width: 100% no-repeat;
height: 350px;
background-image: url(${head});
`;

function App() {
  return (
    
    <Container>
    
    <Router>
    <Navigation/>
     <Routes>
       <Route exact path = "/About" element = {<About/>} />
       <Route exact path = "/calendar" element = {<ReactCalendar />} />
      
     </Routes>
     <HeadImage /> 
   </Router>
   
    </Container>
    
  
  );
}

export default App;
