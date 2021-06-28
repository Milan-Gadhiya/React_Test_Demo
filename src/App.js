import {useState, Fragment} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Start from './Component/Start';

function App() {
  const [player, setPlayer] = useState({
      player1: "",
      player2: ""
  })

  const [game, setGame] = useState(false)

  const submit = (e) => {
      e.preventDefault();
      setGame(true);
  }
  const onNameChange = (e) => {
      setPlayer({
          ...player,
          [e.target.name] : e.target.value
      })
  }

  return (
    <div className="App">
      { !game? <Fragment>
        <container >
          <form  autoComplete="off" onSubmit={e => submit(e)} >
          <h2>Play Game...</h2>
              <div className="TextField">
                  <TextField required name="player1"  id="standard-required" onChange={onNameChange} label="Player 1 Name" />
              </div>
              <div className="TextField">
                  <TextField required name="player2"  id="standard-required" onChange={onNameChange} label="Player 2 Name" />
              </div>
              <input type="submit" value="continue"/>
          </form>
        </container>
      </Fragment>: null}

      { game ? <Start player={player}/> : null }

    </div>
  );
}

export default App;
