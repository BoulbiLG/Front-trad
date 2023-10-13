import React from 'react';
import '../../css/pageDeGarde/presentation.css';
import graphique1 from '../../Assets/graphique1.png';
import graphique2 from '../../Assets/graphique2.png';
import graphique3 from '../../Assets/graphique3.png';
import graphique4 from '../../Assets/graphique4.png';
import loupe from '../../Assets/loupe.svg';
import statBouton from '../../Assets/statBouton.svg';
import cloche from '../../Assets/cloche.svg';
import copy from '../../Assets/copy.svg';
import { Link } from 'react-router-dom';

const Presentation = () => {
  return (
    <div className='presentationConteneur'>
        <div className="conteneurSection">
            <div className="section1">
                <div className="case1">
                    <div className="loupe">
                        <img src={loupe} alt="" />
                    </div>
                    <div className="paragraphe">
                        
                        <h1>In-depth trader data analysis</h1>
                        <div className="sousParagraphe">
                            <p>Our platform offers advanced data analysis, going far beyond what is currently available on the market.</p>
                            <p>We provide our users with detailed and relevant information on their trading performance, enabling them to
                            make more informed decisions to improve their strategy.</p>
                        </div>
                        <div className="boutonCommencerDiv">
                            <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                        </div>
                    </div>
                </div>
                <div className="case2">
                    <img src={graphique1} alt="" />
                </div>
            </div>
            <div className="section1">
                <div className="case2">
                    <img src={graphique2} alt="" />
                </div>
                <div className="case1">
                    <div className="paragraphe">
                        <div className="loupe">
                            <img src={statBouton} alt="" />
                        </div>
                        <h1>Automated trading log</h1>
                        <div className="sousParagraphe">
                            <p>With Tradementis, the tracking of your <br />
                            transactions is fully automated.</p>
                            <p>All data is collected and analyzed in real time, allowing our users to concentrate on their trading
                            without worrying about manual data management.</p>
                        </div>
                        <div className="boutonCommencerDiv">
                            <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section1">
                <div className="case1">
                    <div className="paragraphe">
                        <div className="loupe">
                            <img src={cloche} alt="" />
                        </div>
                        <h1>Push notifications for assistance</h1>
                        <div className="sousParagraphe">
                            <p>We understand that trading can be both psychologically and technically challenging.</p>
                            <p>That&#39;s why we offer live push notifications to support our users during their trades. From best
                            practice reminders to real-time advice, we&#39;re here to help every step of the way.</p>
                        </div>
                        <div className="boutonCommencerDiv">
                            <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                        </div>
                    </div>
                </div>
                <div className="case2">
                    <img src={graphique3} alt="" />
                </div>
            </div>
            <div className="section1">
                <div className="case2">
                    <img src={graphique4} alt="" />
                </div>
                <div className="case1">
                    <div className="paragraphe">
                        <div className="loupe">
                            <img src={copy} alt="" />
                        </div>
                        <h1>Copy Trading</h1>
                        <div className="sousParagraphe">
                            <p>We offer our users the opportunity to take advantage of copy trading, a powerful feature that allows
                            them to link their different trading accounts and copy their trades live.</p>
                            <p>All data is collected and analyzed in real time, allowing our users to concentrate on their trading
                            They can also change their risk management according to the account they use.</p>
                        </div>
                        <div className="boutonCommencerDiv">
                            <Link className='boutonCommencer' to="/login">Start Journaling</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presentation