import React from 'react';
import '../../../css/pricingPage/cartePricing.css';
import { Link } from 'react-router-dom';

const Carte = () => {
  return (
    <div className='cartePricingConteneur'>
        <div className="secondConteneur">

            {/* ==================== CARTE 1 ====================*/}

            <div className="carte">
                <div className='titre'>
                    <p>Standard Plan</p>
                </div>
                <div className="paragraphe">
                    <p>15 euros/month</p>
                </div>
                <hr />
                <div className="troisiemeConteneur">
                    <div className="listeAcquis">
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 Strategies</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>5 Trades / day</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Statistics on 2 variables</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>General statistics</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 portfolios</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Manual filling</p>
                        </div>
                        <br /><br />
                        <br /><br />
                        <br /><br />
                        <br /><br />
                    </div>
                    <div className="boutonCommencerDiv">
                        <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                    </div>
                </div>
            </div>

            {/* ==================== CARTE 2 ====================*/}

            <div className="carte">
                <div className='titre'>
                    <p>Standard Plan</p>
                </div>
                <div className="paragraphe">
                    <p>15 euros/month</p>
                </div>
                <hr />
                <div className="troisiemeConteneur">
                    <div className="listeAcquis">
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 Strategies</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>5 Trades / day</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Statistics on 2 variables</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>General statistics</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 portfolios</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Manual filling</p>
                        </div>
                        <br /><br />
                        <br /><br />
                        <br /><br />
                        <br /><br />
                    </div>
                    <div className="boutonCommencerDiv">
                        <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                    </div>
                </div>
            </div>

            {/* ==================== CARTE 3 ====================*/}

            <div className="carte">
                <div className='titre'>
                    <p>Standard Plan</p>
                </div>
                <div className="paragraphe">
                    <p>15 euros/month</p>
                </div>
                <hr />
                <div className="troisiemeConteneur">
                    <div className="listeAcquis">
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 Strategies</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>5 Trades / day</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Statistics on 2 variables</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>General statistics</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>2 portfolios</p>
                        </div>
                        <div className="imageTexte">
                            <img src="" alt="" />
                            <p>Manual filling</p>
                        </div>
                        <br /><br />
                        <br /><br />
                        <br /><br />
                        <br /><br />
                    </div>
                    <div className="boutonCommencerDiv">
                        <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carte