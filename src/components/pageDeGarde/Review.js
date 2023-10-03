import React from 'react';
import '../../css/pageDeGarde/review.css';
import etoiles from '../../Assets/etoiles.svg';

const Review = () => {
  return (
    <div className='reviewConteneur'>
        <div className="titre">
            <h1>Reviews</h1>
            <div className="tousLesCommentaire">
                <div className="commentaireConteneur">
                    <h4>Guy Ropartz</h4>
                    <hr />
                    <div className="paragraphe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi 
                        magnam inventore eos dolorem error. Quia placeat illum at consectetur delectus cumque 
                        ratione commodi impedit laudantium? Consequatur id excepturi necessitatibus!</p>
                    </div>
                    <div className="conteneurImage">
                        <img src={etoiles} alt="" />
                    </div>
                </div>
                <div className="commentaireConteneur">
                    <h4>Guy Ropartz</h4>
                    <hr />
                    <div className="paragraphe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi 
                        magnam inventore eos dolorem error. Quia placeat illum at consectetur delectus cumque 
                        ratione commodi impedit laudantium? Consequatur id excepturi necessitatibus!</p>
                    </div>
                    <div className="conteneurImage">
                        <img src={etoiles} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review