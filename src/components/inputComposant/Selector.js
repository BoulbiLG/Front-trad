import React, { Component } from 'react';
import '../../css/component/selector.css';

class InputSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultOption,
      isFilled: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ selectedValue: this.props.value });
    }
  }

  selectorValeurChange(event) {
    const selectedValue = event.target.value;
    this.setState({ selectedValue, isFilled: true });
    if (this.props.onChange) {
      this.props.onChange(selectedValue);
    }
  }

  render() {
    const { options, required } = this.props;
    const { selectedValue, isFilled } = this.state;

    return (
      <div>
        <select value={selectedValue} onChange={(e) => this.selectorValeurChange(e)}>
          <option value="" disabled={!required}>Sélectionnez une option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {required && !isFilled && <p style={{ color: 'red' }}>Ce champ est obligatoire</p>}
      </div>
    );
  }
}

export default InputSelector;
