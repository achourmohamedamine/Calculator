import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flag from './Flag'
import Options from './Options'
import Score from './Score'
import Timer from './Timer'

function App() {
  const [Flags,setFlags] =useState( [
    { country: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { country: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { country: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { country: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { country: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { country: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { country: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { country: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { country: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
    { country: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { country: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { country: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { country: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
    { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
    { country: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
    { country: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
    { country: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
    { country: "Norway", flag: "https://flagcdn.com/w320/no.png" },
    { country: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
  ]);
    const [currentFlag, setCurrentFlag] = useState(Flags[Math.floor(Math.random() * Flags.length)]);
    const [options, setOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [TimerActive,setTimerActive]=useState(true);
    
    useEffect(()=>GenerateNewQuestion(),[]);
    const shuffle=(array)=>{
      return array.sort(() => Math.random() - 0.5);

    }
    const GenerateNewQuestion=()=>{
      const correct = Flags[Math.floor(Math.random() * Flags.length)];
      setFlags(Flags.filter((flag)=> flag.country !== correct.country))
      console.log(Flags);
      const incorrect = shuffle(
        Flags.filter((flag) => flag.country !== correct.country)
      ).slice(0, 3);
      const combinedOptions = shuffle([correct, ...incorrect]);
      setCurrentFlag(correct);
      console.log(currentFlag);
      setOptions(combinedOptions);
    }

    const handleAnswer=(selectedCountry)=> {
      if (selectedCountry == currentFlag.country) {
        setScore(s=>s+1);
       GenerateNewQuestion();
      }
      else {
        GenerateNewQuestion();
      }
    }
    const handleTimerEnd=()=> {
      setTimerActive(false);
    }
  

  return (
    <>
      
      <div className='App'>
        <Score score={score}></Score>
        <Flag country={currentFlag.country} flag={currentFlag.flag}></Flag>
        <Options countries={options} callback={handleAnswer} disabled={!TimerActive} ></Options>
        <Timer onTimerEnd={handleTimerEnd}></Timer>
      </div>
      
      </>
  )
}

export default App
