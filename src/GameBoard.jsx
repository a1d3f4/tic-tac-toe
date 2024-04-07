

export default function GameBoard({onselectsquare,board}){
    // const [currgame,setgame]=useState(initialgameboard)
    // function handleselect(rowindex,colindex){
    //     setgame((prevgame) =>{
    //     const updated_game=[... prevgame.map(innerarray=>[...innerarray])];
    //     updated_game[rowindex][colindex]=curractiveplayer
    //     return updated_game
    // })
    //     onselectsquare()
    // }
    return <ol id="game-board">
        {board.map((row,rowindex) => (
            <li key={rowindex}>
                <ol>
                    {row.map((playersymbol,colindex)=> (
                        <li key={colindex}>
                            <button onClick={()=>onselectsquare(rowindex,colindex)} disabled={playersymbol!==null}>{playersymbol}</button>
                        </li>
                    ))}
                </ol>

            </li>
        ))}
    </ol>
}