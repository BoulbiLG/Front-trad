import React from 'react';
import '../../css/settings/membership.css';
import Button from '../inputComposant/Button';

const Membership = () => {
  return (
    <div className='conteneurMembership'>
      <div className="secondConteneur">

        {/*========= GAUCHE  =========*/}

        <div className="sectionPlan">
          <p className='plan'>Basic plan</p>
          <p className="price">$10<span>per month</span></p>
          <p className='detail'>Basic features for up to 10 users.</p>
          <div className="current">
            <Button className='current' label='current' />
          </div>
          <div className="cancel">
            <Button className='cancel' label='Cancel my plan' />
          </div>
          <p className='features'>Features</p>
          <p className='detail'>Everything in our free plan plus</p>
          <div className="listeCarte">
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
          </div>
        </div>

        {/*========= GAUCHE  =========*/}

        <div className="sectionPlan">
          <p className='plan'>Basic plan</p>
          <p className="price">$10<span>per month</span></p>
          <p className='detail'>Basic features for up to 10 users.</p>
          <div className="upgrade">
            <Button className='upgrade' label='upgrade' />
          </div>
          <p className='features'>Features</p>
          <p className='detail'>Everything in our free plan plus</p>
          <div className="listeCarte">
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
          </div>
        </div>

        {/*========= GAUCHE  =========*/}

        <div className="sectionPlan">
          <p className='plan'>Basic plan</p>
          <p className="price">$10<span>per month</span></p>
          <p className='detail'>Basic features for up to 10 users.</p>
          <div className="upgrade">
            <Button className='upgrade' label='upgrade' />
          </div>
          <p className='features'>Features</p>
          <p className='detail'>Everything in our free plan plus</p>
          <div className="listeCarte">
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
            <div className="carte"><div className="rond"></div><p className="avantage">Access to basic features</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership