import React from 'react'
import { useState, useEffect } from 'react'

const Box = () => {


    var buttonColors = ["red", "green", "yellow", "magenta"];
    var gamePattern = [];
    var userClickedPattern = [];

    const [isOn, setisOn] = useState(false);
    
    function startGame() {
        setisOn(true)
    }

    const [gameStart, setGameStart] = useState({
        gameStarted: false,
        colors: [],
        userColors: [],
        onDisplay: false,
        score: 0
    })

    useEffect(() => {
      if (isOn) {
        setGameStart({
            ...gameStart, gameStarted: true
        })
      }
      else {
        setGameStart(gameStart)
      }
    }, [isOn])
    



    




  return (
    <div className='box-container' onClick=''>
         { !isOn && !gameStart.score && (<button className='start-button' type='button' onClick={startGame}>
            Start Game
        </button>)}
        {isOn && (gameStart.onDisplay || gameStart.userColors) && (
          <div className="score">{gameStart.score}</div>
        )}
        <div >
           <div id="red" className="box box1" onClick='' type="button"></div>
           <div id="green" className="box box2" onClick=""  type="button"></div>
        </div>
        <div >
           <div id="yellow" className="box box3" onClick=""  type="button"></div>
           <div id="magenta" className="box box4" onClick="" type="button"></div>
        </div>   
    </div>
  )
}

export default Box