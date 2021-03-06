import React from 'react'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Farmerhome from './components/Farmerhome';
import Home from './components/Home';
import Addproduct from './components/Addproduct';
import Viewdetails from './components/Viewdetails';
import Bidhistory from './components/Bidhistory';
import { connect } from "react-redux";
import ProtectedRoute from './components/ProtectedRoute';
import Bidprice from './components/Bidprice';
import { Navbar } from 'react-bootstrap';



//   function App() {
//     return (
//       <Router>
//       <div className="App">
//             <Route exact path="/" component={Home} />
//             <Route exact path="/Login" component={Login} />
//             <Route exact path="/Register" component={Register} />
//             <Route exact path="/Farmerhome" component={Farmerhome} />
//             <Route exact path="/Addproduct" component={Addproduct} />
//             <Route exact path="/Viewdetails" component={Viewdetails} />
//             <Route exact path="/Yourbids" component={Yourbids} />
//         </div>
//     </Router>
//   );
// }


function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
   
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
    <Router>
      <div>
      <Navbar>
        <Route path="/login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Farmerhome" component={Farmerhome} />
        <Route exact path="/Addproduct" component={Addproduct} />
        <Route exact path="/Viewdetails/:id" component={Viewdetails} />
        <Route exact path="/Bidhistory" component={Bidhistory} />
        <Route exact path="/Bidprice" component={Bidprice} />
        </Navbar>
      </div>
    </Router>
    </Switch>
    
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}
export default connect(mapStateToProps)(App);

// export default App;

    
          // <a
          //   className="App-link"
          //   href="https://react-redux.js.org/"
          //   target="_blank"
          //   rel="noopener noreferrer"
          // >
          //   React Redux
          // </a>
      
  



