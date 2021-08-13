import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import CharacterList from './pages/CharacterList';
import { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import CharacterProfile from './pages/CharacterProfile';

function App() {

  const [ characters, setCharacters] = useState([]);

  useEffect(() =>{
    fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data =>{
      setCharacters(data.results)
    })
  },[])

  return (
    <Router>
    <div className="App">
      <Header/>
      <Route exact  path="/">
      <CharacterList characters={characters} />
      </Route>
      <Route path ="/characters/:index">
      <CharacterProfile characters={characters}/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
