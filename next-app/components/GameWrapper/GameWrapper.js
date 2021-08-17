import Main from "../main/main";

 function GameWrapper() {
     const [state, setState] = useState("startpage");

     return(
         <div className="game-wrapper">
             <Main/>

         </div>
    )
}