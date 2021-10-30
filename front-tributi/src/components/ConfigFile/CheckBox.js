import { Checkbox, Form } from "antd";

const CheckBox = ({ setValue }) => {
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<Form className="form-checkbox" onChange={handleChange}>
				<Checkbox.Group>
					<div className="checkbox-options">
						<Form.Item>
							<Checkbox value="rango">Rango</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="estados-financieros">
								Estados financieros
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="impuestos-adeudados">
								Impuestos adeudados
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="necesidades-160">Necesidades 160</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="firma-electrónica">Firma electrónica</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="url-litográfica">URL litográfica</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="Borrador-url">Borrador de URL</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="preguntas">Tiene preguntas</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="presentar-160-URL">
								Cómo presentar 160 URL
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="declaracion-contable">
								Declaración contable
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="planificacion-fiscal">
								Planificación fiscal
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="inicio-exogeno">Inicio exógeno</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="columna-limite-exogeno">
								Columna de límite exógeno
							</Checkbox>
						</Form.Item>
						<Form.Item>
							<Checkbox value="Fila-limite-exogeno">
								Fila de límite exógeno
							</Checkbox>
						</Form.Item>
					</div>
				</Checkbox.Group>
			</Form>
		</div>
	);
};

export default CheckBox;
