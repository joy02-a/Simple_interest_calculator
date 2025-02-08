import { useState } from 'react'
import Simple_Calculator from './components/Simple_Calculator'

function App() {
  const [principle, setPrinciple] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [interest, setInterest] = useState(null);
  const [reset,setreset] = useState('');

  function calculateInterest(){
      const P = parseFloat(principle);
      const R = parseFloat(rate) / 100;
      const T = parseFloat(time);

      if(!isNaN(P) && !isNaN(R) && !isNaN(T)){
        const SI = P * R * T;
        setInterest(SI.toFixed(2));
      } else{
        setInterest(null);
      }
  }

  function Resetbtn(){
    setInterest('');
    setPrinciple('');
    setRate('');
    setTime('');
  }

  return (
    <>
     <div className='h-screen border-4 flex justify-center items-center bg-purple-700'>
        <Simple_Calculator calculateInterest={calculateInterest} principle={principle} rate={rate} time={time} interest={interest} setPrinciple={setPrinciple} setTime={setTime} setRate={setRate} Resetbtn={Resetbtn} reset={reset} setreset={setreset} />
     </div>
    </>
  )
}

export default App
