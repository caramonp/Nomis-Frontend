import { Select } from 'antd';

const { Option } = Select;

const SelectYear = () => {
  return (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Año gravable"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">2021</Option>
    <Option value="2">2020</Option>
    <Option value="3">2019</Option>
    <Option value="4">2018</Option>

  </Select>
  )
};

export default SelectYear;
