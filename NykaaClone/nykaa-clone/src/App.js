
import './App.css';
import Component2 from './Component2';
import Component3 from './Component3';
import Card from './Card'
import Divider from '@mui/material/Divider';
import Header from './Header';
import Header2 from './Header2';
import MiddleComponent from './MiddleComponent';
import Footer from './Footer';
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import Footer4 from './Footer4'


function App() {
  return (
    <>
    <div className="App">
     <Header />
     <Divider/>
     <Header2/>
    </div>
    <MiddleComponent/>
    <Component2/>
    <Component3/>
    <Card/>
    <Footer/>
    <Footer1/>
    <Footer2/>
    <Footer4/>
    </>
  );
}

export default App;
