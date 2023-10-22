import React from 'react';
import '../../css/component/button.css';

class Button extends React.Component {
  render() {
    const { label, onClick, disabled, backgroundColor, color } = this.props;
    return (
      <div className="di">
      <button className='bouton' onClick={onClick} disabled={disabled}>
        {label}
      </button>
      </div>
    );
  }
}

export default Button;
