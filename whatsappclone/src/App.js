import React  from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import Chat from './Chat'; 
import Login from "./Login"
import './App.css';
import { useStateValue } from './StateProvider';

function App() {

 
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">

    {!user ? (
      <Login />
    ): (
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
          {/* Sidebar */}
          
            <Route path="/rooms/:roomId">
           

              { /* Chat */}

                <Chat /> 
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router>
        
      </div>

    )}
      
      
    </div>
  );
}

export default App;
