import { Steps, Button, message } from 'antd';
import { useHistory } from "react-router-dom";
import React from 'react'
import './Steps.css'
import TaxFile from '../TaxFile/TaxFile';
import LightweightFileComponent from '../LightweightFile/LightweightFile'
import UpdateDump from '../UpdateDump/UpdateDump';
import Mathops from '../Mathops/Mathops';
import ConfigFile from '../ConfigFile/ConfigFile'


const { Step } = Steps;

export const steps = [
  {
    title: 'Tax file',
    content: <TaxFile />,
    
  },
  {
    title: 'Update Dump',
    content: <UpdateDump />,
  },
  {
    title: 'Generate Mathops',
    content: <Mathops />,
  },
  {
    title: 'Lightweight file',
    content: <LightweightFileComponent />,
  },
  {
    title: 'Configuration',
    content: <ConfigFile />,
  },
];
const StepComponent = () => {
  const [current, setCurrent] = React.useState(0);
  const history = useHistory();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const done = () => {
    message.success('Processing complete!');
    history.push('/status');
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="line-over-button"></div>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
      {current > 0 && (
          <Button style={{ margin: '7px' }} onClick={prev}>
            Previo
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button style={{ background: '#2a6662', border: '#2a6662'}} type="primary" onClick={next}>
            Siguiente
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button style={{ background: '#2a6662', border: '#2a6662'}} type="primary" onClick={done}>
            Terminar
          </Button>
        )}
      </div>
    </>
  );
};

export default StepComponent;
