import React from 'react';
import CarteQuestion from './CarteQuestion';
import '../../../css/pageDeGarde/question.css';
import plus from '../../../Assets/plus.svg';

const Question = () => {
  return (
    <div className='questionConteneur'>
        <div className="secondConteneur">
            <div className="titre">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="blocInformation">
                <div className="sectionTitre">
                    <div className="titre">
                        <h4>Question about product number one ?</h4>
                    </div>
                    <div className="image">
                        <img src={plus} alt="" />
                    </div>
                </div>
                <hr />
                <div className="paragraphe">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
            </div>
            <CarteQuestion question="Question 1" reponse="Reponse 1" />
            <CarteQuestion question="Question 2" reponse="Reponse 2" />
        </div>
    </div>
  )
}

export default Question