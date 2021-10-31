import React, { useState, useContext } from "react";
import { Button, Form } from "antd";
import "antd/dist/antd.css";
import "./ConfigFile.css";
import SelectButton from "./SelectButton";
import Context from "../../context";
import CheckBox from "./CheckBox";

const ConfigFileComponent = () => {
	const [button, setButton] = useState();
	const [checkbox, setCheckbox] = useState();
	const context = useContext(Context);
	const { state, setState } = context;

	const handleClick = () => {
		setState({
			...state,
			configuration: { changedConfiguration: button, optionChanges: checkbox },
		});
	};

	return (
		<div className="box-dragg-file">
			<section className="title-update-dump">
				<p className="letter-title">Configuración</p>
			</section>
			<h2> Seleccione los cambios en la configuración</h2>
			<div>
				<div className="select-button">
					<SelectButton setValue={setButton} />
					{button === true ? <CheckBox setValue={setCheckbox} /> : null}
				</div>
				<Button type="primary" onClick={handleClick}>
					Guardar
				</Button>
			</div>
		</div>
	);
};

export default ConfigFileComponent;
