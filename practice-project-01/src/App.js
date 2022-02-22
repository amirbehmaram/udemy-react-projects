// React Imports
import { useState } from 'react';

// Style Imports
import './App.css';

// Component Imports
import NewUser from './components/new-user/new-user';
import Users from './components/users/users';

// Context Imports

// Data Imports

/**
 * This was supposed to have like some more funcitonality involving error states and
 * a popup for like messages, but quite frankly I know that all of that is just state related
 * things and I feel decently comfy with it, especially since a lot of that is going to
 * require prop drilling stuff and so it's not even the best way to handle it.
 * 
 * So I'm going to call this good for now and move on to the next section because there are
 * a bunch of news things in there that I have 0 idea about.
 */
function App() {
  const [getUsers, addUser] = useState([]);

  return (
    <div className="App">
      <div className="content-container">
        <NewUser addNewUser={ addUser } />
        <Users users={ getUsers } />
      </div>
    </div>
  );
}

export default App;
