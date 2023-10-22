import React from 'react';
import '../../css/settings/settings.css';
import { useState } from 'react';
import Button from '../inputComposant/Button';
import Details from './Details';
import Biling from './Biling';
import Membership from './Membership';
import '../../css/settings/settings.css';

const Settings = () => {

    const [affichageFenetre, setAffichageFenetre] = useState('detail');

    return (
        <div className='conteneurSettings'>
            <p className="customer">Customer account</p>
            <div className="multipleSection">
                <Button className='gaucheBtn' label='My Details' onClick={() => {setAffichageFenetre('detail')}}/>
                <Button className='milieuBtn' label='My Biling' onClick={() => {setAffichageFenetre('biling')}}/>
                <Button className='droiteBtn' label='My Membership' onClick={() => {setAffichageFenetre('membership')}}/>
            </div>
            <div className="contenu">
                {affichageFenetre === 'detail' ? (
                    <Details />
                ) : null}
                {affichageFenetre === 'biling' ? (
                    <Biling />
                ) : null}
                {affichageFenetre === 'membership' ? (
                    <Membership />
                ) : null}
            </div>
        </div>
    )
}

export default Settings