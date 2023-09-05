import React from 'react';
import '../../css/component/button.css';

class Button extends React.Component {
  render() {
    const { label, onClick, disabled, backgroundColor, color } = this.props;
    const style = {
      backgroundColor: backgroundColor || '#007bff',
      color: color || 'white',
    };
    return (
      <div className="di">
      <button style={style} className='bouton' onClick={onClick} disabled={disabled}>
        {label}
      </button>
      </div>
    );
  }
}

export default Button;
