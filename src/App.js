import './App.css';
import Header from './components/Header';
import Box from './components/Box';
import { useState, useEffect } from 'react'
import timeout from './utils/util';


function App() {

    var buttonColors = ["red", "green", "orange", "magenta"];
    var userClickedPattern = [];
    var randomColor;
    var gamePattern;
    var displayColors;

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

    useEffect(() => {
      if (isOn && gameStart.onDisplay) {
        randomColor = buttonColors[Math.floor(Math.random()*4)]
        gamePattern = [...gameStart.colors]
        gamePattern.push(randomColor)
        setGameStart({...gameStart, colors: gamePattern})
      }
    }, [isOn, gameStart.onDisplay])

    useEffect(() => {
      if (isOn && gameStart.onDisplay && gameStart.colors.length) {
        displayColors()
      }
    }, [isOn, gameStart.onDisplay, gameStart.colors.length])

    const [flashColor, setFlashColor] = useState("");
    

  const [header, setHeader] = useState("PRESS ANY KEY TO START")


 

  return (
    
    <div >
      <Header
      text={header} />
      <div>
      { !isOn && !gameStart.score && (<button className='start-button' type='button' onClick={startGame}>
            Start Game
        </button>)}
        {isOn && (gameStart.onDisplay || gameStart.userColors) && (
          <div className="score">{gameStart.score}</div>
        )}
      </div>
      <div>
      <h1>
        Dumebi is the greatest!
      </h1>
      {buttonColors.map((v, i) => (
        <Box 
          //  onClick={() => {
          //   cardClickHandle(v);
          //       }}
            flash={flashColor === v}
            color={v} />
      ))
            }
      </div>
    </div>
   
  );
}

export default App;
