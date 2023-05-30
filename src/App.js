//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {BrowserRouter as Router,
Routes ,
//Link,
Route 
} from 'react-router-dom';
//let name = "world"
function App() {
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //       let's hack
    //     </a>
    //   </header>
    // </div>
    
    <>
    <Router>
    <Navbar title="TexT"/>
   
    {/* <Link to="/">Home</Link>
          
    <Link to="/about">About</Link> */}
   
           <div className="container">
    <Routes>
      <Route exact path='/about' element={<About/>}>
      
      </Route>
    <Route  exact path='/' element={<TextForm heading="Enter text to analyze"/> }>
    
    </Route>    
    </Routes>
          </div>
    </Router>
    </>
  );
}

export default App;
