import React,{useState,useEffect} from "react";
function Timer(props){
    const [timeleft,setTimeleft]=useState(30);
    useEffect(() => {
        const interval = setInterval(() => {
          setTimeleft((prev) => {
            if (prev<=1) {
                clearInterval();
                props.onTimerEnd();
                return(0);
            }
            else {
                return(prev-1);
            }
          });
        }, 1000);
    
        // Cleanup function to clear the interval on unmount or re-render
        return () => clearInterval(interval);
      }, []);
    
     return(<>
         <div className="Timer">
            <span className="time">{timeleft !=0 ? timeleft : "Time is Over"}</span>
         </div>
     
     </>)

}
export default Timer;
