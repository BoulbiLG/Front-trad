import React from 'react'
import '../../css/pageDeGarde/titre.css';
import cadnat from '../../Assets/cadnat.svg';
import { Link } from 'react-router-dom';

const Titre = () => {
  return (
    <div className='titreConteneur'>
        <div className="centralisation">
            <div className="information">
                <div className="titreH1">
                    <h1>Unlock <span><img src={cadnat} alt="" /></span> Success with TradeMentis</h1>
                </div>
                <div className="paragraphe">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam tempore asperiores nihil vel! Soluta nostrum impedit 
                    molestiae voluptates officiis hic tempore asperiores excepturi ab vitae iure, id quidem provident?</p>
                </div>
                <div className="boutonCommencerDiv">
                    <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                </div>
                <div className="videoConteneur">
                    <div className="bordureVideo">
                        <div className="videoBordure">
                            <div className="videoRond">
                                <div className="videoTriangle">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Titre