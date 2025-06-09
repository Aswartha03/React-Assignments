import React, { useState, useRef } from 'react';

// TimerStatus type to manage running state
type TimerStatus = 'idle' | 'running' | 'stopped';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [status, setStatus] = useState<TimerStatus>('idle');
  const intervalRef = useRef<number | null>(null);

  const start = () => {
    if (status !== 'running') {
      intervalRef.current = window.setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
      setStatus('running');
    }
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setStatus('stopped');
    }
  };

  const reset = () => {
    stop();
    setSeconds(0);
    setStatus('idle');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>⏱️ Timer: {seconds} seconds</h2>
      <p>Status: {status}</p>
      <button onClick={start} disabled={status === 'running'}>Start</button>
      <button onClick={stop} disabled={status !== 'running'}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
