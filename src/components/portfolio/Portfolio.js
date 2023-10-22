import React from 'react';
import '../../css/portfolio/portfolio.css';

const Portfolio = () => {
  return (
    <div className='conteneurPortfolio'>
        <div className="section1">
            <div className="graphique1">
                <p>graphique 1</p>
            </div>
            <div className="graphique2">
                <p>graphique 2</p>
            </div>
        </div>
        <div className="section2">
            <div className="valuation">
                <p className="portfolioValuation">Portfolio valuation</p>
                <div className="detail">
                    <p className="nombre">$245.324</p>
                    <p className="pourcentage">+16.5%</p>
                </div>
            </div>
            <div className="allocation">
                <p className="assetAllocation">Asset allocation</p>
                <div className="sectionCamembert">
                    <div className="camembert">
                        <p>graphique</p>
                    </div>
                </div>
                <div className="listeIndex">

                    {/* ========== CARTE 1 ========== */}

                    <div className="carteIndex">
                        <div className='gauche'>
                            <div className="rectangle"></div>
                            <p className="pourcentage">32.5%</p>
                            <p className="detail">Investindex</p>
                        </div>
                        <div className='droite'>
                            <p className="pourcentage">+2.5%</p>
                        </div>
                    </div>

                    {/* ========== CARTE 2 ========== */}

                    <div className="carteIndex">
                        <div className='gauche'>
                            <div className="rectangle"></div>
                            <p className="pourcentage">32.5%</p>
                            <p className="detail">Investindex</p>
                        </div>
                        <div className='droite'>
                            <p className="pourcentage">+2.5%</p>
                        </div>
                    </div>

                    {/* ========== CARTE 3 ========== */}

                    <div className="carteIndex">
                        <div className='gauche'>
                            <div className="rectangle"></div>
                            <p className="pourcentage">32.5%</p>
                            <p className="detail">Investindex</p>
                        </div>
                        <div className='droite'>
                            <p className="pourcentage">+2.5%</p>
                        </div>
                    </div>

                    {/* ========== CARTE 4 ========== */}

                    <div className="carteIndex">
                        <div className='gauche'>
                            <div className="rectangle"></div>
                            <p className="pourcentage">32.5%</p>
                            <p className="detail">Investindex</p>
                        </div>
                        <div className='droite'>
                            <p className="pourcentage">+2.5%</p>
                        </div>
                    </div>

                    {/* ========== CARTE 5 ========== */}

                    <div className="carteIndex">
                        <div className='gauche'>
                            <div className="rectangle"></div>
                            <p className="pourcentage">32.5%</p>
                            <p className="detail">Investindex</p>
                        </div>
                        <div className='droite'>
                            <p className="pourcentage">+2.5%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio