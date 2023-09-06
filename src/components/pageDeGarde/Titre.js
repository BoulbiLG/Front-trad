import React from 'react'
import '../../css/pageDeGarde/titre.css';
import { Link } from 'react-router-dom';

const Titre = () => {
  return (
    <div className='titreConteneur'>
        <div className="centralisation">
            <div className="information">
                <div className="titreH1">
                    <h1>Unlock <span>IMG</span> Success with TradeMentis</h1>
                </div>
                <div className="paragraphe">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam tempore asperiores nihil vel! Soluta nostrum impedit 
                    molestiae voluptates officiis hic tempore asperiores excepturi ab vitae iure, id quidem provident?</p>
                </div>
            </div>
            <div className="boutonCommencerDiv">
                <Link className='boutonCommencer' to="/login">Starting journal</Link>
            </div>
        </div>
    </div>
  )
}

export default Titre