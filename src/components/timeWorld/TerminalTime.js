import React from 'react';
import TimeWorld from './TimeWorld';
import Citation from './Citation';
import '../../css/timeWorld/terminalTime.css';

const TerminalTime = () => {
  return (
    <div className='conteneurTerminalTime'>
        <TimeWorld />
        <Citation />
    </div>
  )
}

export default TerminalTime