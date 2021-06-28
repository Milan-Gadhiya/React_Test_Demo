import React, { useState} from 'react';
import './Start.css';
import Button from '@material-ui/core/Button';




const Start = ({ player }) => {
    const { player1, player2} = player
    const [win, setWin] = useState({
        player1: 0,
        player2: 0
    })

    const winner = () => {
        if(win.player1 === win.player2) return 'Tie'
        if (win.player1 > win.player2) {
            return 'Player1'
        } else {
            return 'Player2'            
        }
    }

    const handleChange1 = () => {
        setWin({
            ...win,
            player1: win.player1+ 1
        })
    }

    const handleChange2 = () => {
        setWin({
            ...win,
            player2: win.player2+ 1
        })
    }

    return (
        <container>
          <main>
            <div className="field">
            "{player1}" - <Button variant="outlined" size="small" color="primary"  onClick={handleChange1}>Add Win </Button> ---- Wins = {win.player1}
            </div>
            <div className="field">
            "{player2}" - <Button variant="outlined" size="small" color="primary"  onClick={handleChange2}>Add Win </Button> ---- Wins = {win.player2}  
            </div>
            <div>
            <h4>Current Winner - <i>"{ winner()}"</i> <br/>
            Win Difference - {Math.abs(win.player1 - win.player2)}</h4>
            </div>
            <Button variant="contained" size="medium" color="primary">Save </Button>
          </main>
        </container>
    )
}


export default Start;