import React from 'react';
import '../../css/copyTrading/copyTrading.css';
import Button from '../inputComposant/Button';

const CopyTrading = () => {
  return (
    <div className='conteneurCopyTrading'>
        <div className="listeCarte">
            <div className="carte">
                <p className="expert">Expert Advisor</p>
                <p className="mark">Mark johnson</p>
                <div className="bas">
                    <Button label='Download EA' />
                    <p>Tutorials</p>
                </div>
            </div>

            <div className="carte">
                <p className="expert">Expert Advisor</p>
                <p className="mark">Mark johnson</p>
                <div className="bas">
                    <Button label='Download EA' />
                    <p>Tutorials</p>
                </div>
            </div>

            <div className="carte">
                <p className="expert">Expert Advisor</p>
                <p className="mark">Mark johnson</p>
                <div className="bas">
                    <Button label='Download EA' />
                    <p>Tutorials</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CopyTrading