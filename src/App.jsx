import './App.css'
import Login from "./Login";
import { Home } from "./Home";
import {useState} from 'react';


function App() {

const [user, setUser] = useState([]);

  return (
    <div className="App">
      {!user.length > 0
        ? <Login setUser={setUser} />
        : <Home />

    }
      <Login setUser={setUser} />
      <Home />
    </div>
  )
}

export default App
