import { Checkbox } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
};

const CheckBox = () => {

  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
      <ul>
        <li>
          <Checkbox value="rango">Rango</Checkbox>
        </li>
        <li>
          <Checkbox value="estados-financieros">Estados financieros</Checkbox>
        </li>
        <li>
          <Checkbox value="impuestos-adeudados">Impuestos adeudados</Checkbox>
        </li>
        <li>
          <Checkbox value="necesidades-160">Necesidades 160</Checkbox>
        </li>
        <li>
          <Checkbox value="firma-electrónica">Firma electrónica</Checkbox>
        </li>
        <li>
          <Checkbox value="url-litográfica">URL litográfica</Checkbox>
        </li>
        <li>
          <Checkbox value="Borrador-url">Borrador de URL</Checkbox>
        </li>
        <li>
          <Checkbox value="preguntas">Tiene preguntas</Checkbox>
        </li>
        <li>
          <Checkbox value="presentar-160-URL">Cómo presentar 160 URL</Checkbox>
        </li>
        <li>
          <Checkbox value="declaracion-contable">Declaración contable</Checkbox>
        </li>
        <li>
          <Checkbox value="planificacion-fiscal">Planificación fiscal</Checkbox>
        </li>
        <li>
          <Checkbox value="inicio-exogeno">Inicio exógeno</Checkbox>
        </li>
        <li>
          <Checkbox value="columna-limite-exogeno">Columna de límite exógeno</Checkbox>
        </li>
        <li>
          <Checkbox value="Fila-limite-exogeno">Fila de límite exógeno</Checkbox>
        </li>
      </ul>
      
    </Checkbox.Group>
  )
}

export default CheckBox;