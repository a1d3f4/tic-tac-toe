import Player from "./player"
import GameBoard from "./GameBoard"
import { useState } from "react"
import Log from "./log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./game-over"
const initialgameboard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
function App() {
  const [activeplayer,setactiveplayer]=useState("X")
  const [gameturn,setgameturn]=useState([])
  const [playername,setplayername]=useState({
    X:'player 1',
    O:'player 2'
  })
  let currgame=[...initialgameboard.map(array=>[...array])]
  for(const turn of gameturn){
      const {square,player}=turn
      const {row,col}=square
      currgame[row][col]=player
  }

  let winner = null;

  for (const comb of WINNING_COMBINATIONS) {
    const firstSquareSymbol=currgame[comb[0].row][comb[0].column]
    const secondSquareSymbol=currgame[comb[1].row][comb[1].column]
    const thirdSquareSymbol=currgame[comb[2].row][comb[2].column]
  
    if (firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      console.log(firstSquareSymbol,secondSquareSymbol,thirdSquareSymbol)
      winner=playername[firstSquareSymbol]
    }
  }
  function handlerematch(){
    setgameturn([])
  }
  const hasdraw=gameturn.length==9 &&!winner
  function onclickchange(rowindex,colindex){
    setactiveplayer((curractiveplayer)=> curractiveplayer==="X"?"O":"X")
    setgameturn((prevturn)=>{
      let currentplayer="X"
      if (prevturn.length>0 &&prevturn[0].player=="X"){
        currentplayer="O"
      }
      const updatedturn=[{ square:{row:rowindex,col:colindex} ,player:currentplayer},... prevturn]
      console.log(updatedturn)
      return updatedturn
    })
  }
  function handleplayername( symbol,newname){
    setplayername(prevplayer=>{
      return{
        ...prevplayer,[symbol] :newname
      }
    })

  }
  return(
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player1" symbol="X" isactive={activeplayer==="X"} handlename={handleplayername}/>
          <Player name="player2" symbol="O" isactive={activeplayer==="O"} handlename={handleplayername}/>
        </ol>
        {(winner || hasdraw) && <GameOver winner={winner} rematch={handlerematch}/>}
        <GameBoard onselectsquare={onclickchange} board={currgame}/>
      </div>
      <Log turns={gameturn}></Log>
    </main>
  )


}

export default App
