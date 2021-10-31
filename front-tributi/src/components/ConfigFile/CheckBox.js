import { Checkbox } from "antd";

const CheckBox = ({ setValue }) => {
	function handleChange(checkedValues) {
		setValue(checkedValues);
	}

	const options = [
		{ label: "Rango", value: "rango" },
		{ label: "Estados financieros", value: "estados-financieros" },
		{ label: "Impuestos adeudados", value: "impuestos-adeudados" },
		{ label: "Necesidades 160", value: "necesidades-160" },
		{ label: "Firma electrónica", value: "firma-electrónica" },
		{ label: "URL litográfica", value: "url-litográfica" },
		{ label: "Borrador de URL", value: "borrador-url" },
		{ label: "Tiene preguntas", value: "preguntas" },
		{ label: "Como presentar 160 URL", value: "presentar-160-URL" },
		{ label: "Declaración contable", value: "declaracion-contable" },
		{ label: "Planificación fiscal", value: "planificacion-fiscal" },
		{ label: "Inicio exógeno", value: "inicio-exogeno" },
		{ label: "Columna de límite exógeno", value: "columna-limite-exogeno" },
		{ label: "Fila de límite exógeno", value: "Fila-limite-exogeno" },
	];

	return (
		<Checkbox.Group
			className="form-checkbox"
			options={options}
			defaultValue={["Apple"]}
			onChange={handleChange}
		/>
	);
};

export default CheckBox;
