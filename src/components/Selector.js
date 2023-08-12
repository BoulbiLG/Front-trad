import React from 'react';
import '../css/component/selector.css';

class InputSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultOption,
    };
  }

  selectorValeurChange(event) {
    const selectedValue = event.target.value;
    this.setState({ selectedValue });
    if (this.props.onChange) {
      this.props.onChange(selectedValue);
    }
  }

  render() {
    const { options } = this.props;
    const { selectedValue } = this.state;

    return (
      <select value={selectedValue} onChange={(e) => this.selectorValeurChange(e)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}

export default InputSelector;
