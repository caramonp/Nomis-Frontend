import { Radio } from 'antd';
import React from 'react';
import CheckBox from './CheckBox';

class SelectButton extends React.Component {
  state = {
    value: "none",
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };


  render() {
    const { value } = this.state;
    
    return (
      <Radio.Group onChange={this.onChange} value={value}>
          <Radio value="si">Si</Radio>
          <Radio value="no">No</Radio>
          
          {
            value === "si" ? <CheckBox /> : null
          }
      </Radio.Group>
    );
  }
}

export default SelectButton;
