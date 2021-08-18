import Main from "../main/main";
import Game from "../game/game";

 function GameWrapper() {
     const [state, setState] = useState("startpage");
/*
     return(
         <div className="game-wrapper">
             <Main/>
         </div>
    )
     return(
         <div className="game-wrapper">
             <Main/>
         </div>
     )
     */

     return(
         <div className="game-wrapper">
             <Game/>
         </div>
     )
}