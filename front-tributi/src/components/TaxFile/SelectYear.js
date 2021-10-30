import { Select } from "antd";

const { Option } = Select;

const SelectYear = ({ setValue }) => {
  const handleChange = (value) => {
    console.log("Click", value);
    setValue(value);
  };

  return (
    <Select
      onChange={handleChange}
      showSearch
      style={{ width: 200 }}
      placeholder="Año gravable"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value="2021">2021</Option>
      <Option value="2020">2020</Option>
    </Select>
  );
};

export default SelectYear;
