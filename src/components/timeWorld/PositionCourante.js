import React from 'react';
import '../../css/timeWorld/positionCourante.css';

const PositionCourante = () => {
  return (
    <div className='conteneurPositionCourante'>
        <p className='current' >Current trading position</p>
        <p className='donnee'>458</p>
        <p className='detail'>+2.5%</p>
    </div>
  )
}

export default PositionCourante