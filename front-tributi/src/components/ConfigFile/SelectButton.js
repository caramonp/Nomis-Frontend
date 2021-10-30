import { Radio } from "antd";
import React from "react";

const SelectButton = ({ setValue }) => {
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<Radio.Group onChange={handleChange}>
			<Radio value={true}>Si</Radio>
			<Radio value={false}>No</Radio>
		</Radio.Group>
	);
};

export default SelectButton;
