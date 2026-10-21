import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { type Slip } from './types/slip-types';
import { getRandomAdvice } from './api';
import { SlipCard } from './components/slip-card';

function App() {
  const [slip, setSlip] = useState<Slip | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const fetchAdvice = useCallback(async () => {
    setIsLoading(true);
    const advice = await getRandomAdvice();
    if (advice) {
      setSlip(advice);  
      setHasError(false);
    } else {
      setHasError(true);
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    let ignore = false;
    getRandomAdvice().then((advice) => {
      if(ignore) return;
      if (advice) {
        setSlip(advice);
      } else {
        setHasError(true);
      }
      setIsLoading(false);
    })
    return () => {
      ignore = true;
    }
  }, []);

  return (
    <main className='flex items-center justify-center h-full w-full'>
      {slip &&
        <SlipCard 
          slip={slip}
          fetchAdvice={fetchAdvice}
          isLoading={isLoading}
          hasError={hasError}
        />
      }
    </main>
  )
}

export default App
