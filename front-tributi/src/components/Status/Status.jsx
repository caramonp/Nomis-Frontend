import React, { useState, useEffect, useContext } from "react";
import { Alert, Progress, Button } from "antd";
import { useHistory } from "react-router-dom";
import firestore from "../../config/firebase";
import "firebase/firestore";
import "firebase/compat/firestore";
import "./Status.css";
import Circle from "./Circle";
import Context from "../../context";

const Status = () => {
  const context = useContext(Context);
  const { state, setState } = context;
  const { taxEngine, updateDump, mathops, lightweight, configuration } = state;
  const { changedLightweight } = lightweight;
  const { changedConfiguration } = configuration;
  const { stateLoading } = state;
  const [docs, setdocs] = useState([]);
  const history = useHistory();
  const [statusFirebase, setStatusFirebase] = useState();

  //const [percentTaxEngine, setPercentTaxEngine] = useState(0);
  //const [percentDump, setPercentDump] = useState(0);
  //const [percentMathops, setPercentMathops] = useState(0);
  //const [percentlightweight, setPercentlightweight] = useState(0);
  //const [percentConfig, setPercentConfig] = useState(0);
  const [percent, setPercent] = useState({
    percentTaxEngine: 0,
    percentDump: 0,
    percentMathops: 0,
    percentlightweight: 0,
    percentConfig: 0
  })

  const { percentTaxEngine, percentDump, percentMathops, percentlightweight, percentConfig } = percent;



  let timer = null;

  const getDocument = async () => {
    firestore.collection("Status_upload_dump").onSnapshot((querySnapshot) => {
      let currentStatus = "";
      const doct = [];
      querySnapshot.forEach((doc) => {
        //console.log("documento", doc.data());
        //console.log("value", valueEnd, state)
        const { status } = doc.data();
        currentStatus = status;
      });
      setdocs(doct);
      setStatusFirebase(currentStatus);
    });
  };

  useEffect(() => {
    getDocument();
  }, []);

  useEffect(() => {
    console.log("useEfect: ", statusFirebase, percent);
    const { percentTaxEngine, percentDump, percentMathops, percentlightweight, percentConfig } = percent;
    const update = () => {
      timer = setTimeout(() => {
        let currentPercent = 0

        switch (statusFirebase) {
          case "tax-engine":
            currentPercent = percentTaxEngine >= 100 ? 10 : percentTaxEngine + 10;
            setPercent({...percent, percentTaxEngine:currentPercent})
            //setPercentTaxEngine(percent)
            break;
          case "dump":
            currentPercent = percentDump >= 100 ? 10 : percentDump + 10;
            setPercent({...percent, percentDump:currentPercent, percentTaxEngine:100})
            break;
          case "mathops":
            currentPercent = percentMathops >= 100 ? 10 : percentMathops + 10;
            setPercent({...percent, percentMathops:currentPercent, percentDump:100})
            break;
          case "lightweight":
            currentPercent = percentlightweight >= 100 ? 10 : percentlightweight + 10;
            setPercent({...percent, percentlightweight:currentPercent, percentMathops:100})
            break;
          case "config":
            currentPercent = percentConfig >= 100 ? 10 : percentConfig + 10;
            setPercent({...percent, percentConfig:currentPercent, percentlightweight:100})
          break;
        }
      }, 1000);
  
      if (statusFirebase === "finished") {
        setPercent({...percent, percentConfig:100})
        clearTimeout(timer);
      }

    }
    update();
    return () => clearTimeout(timer);
  }, [statusFirebase, percent]);

  const back = () => {
    history.push("/");
  };

  const [valueEnd, setValueEnd] = React.useState(1);
  let TaxEngine = () => (
    <Progress
      type="dashboard"
      percent={percentTaxEngine}
      status="active"
      gapDegree={0}
      format={() => "Cargando archivo tax egine"}
    />
  );
  let Dump = () => (
    <Progress
      type="dashboard"
      percent={percentDump}
      status="active"
      gapDegree={0}
      format={() => "Actualizando dump"}
    />
  );
  let Mathops = () => (
    <Progress
      type="dashboard"
      percent={percentMathops}
      status="active"
      gapDegree={0}
      format={() => "Actualizando mathops"}
    />
  );
  let Lightweight = () => (
    <Progress
      type="dashboard"
      percent={percentlightweight}
      status="active"
      gapDegree={0}
      format={() => "Cargando archivo liviano"}
    />
  );
  let Congif = () => (
    <Progress
      type="dashboard"
      percent={percentConfig}
      status="active"
      gapDegree={0}
      format={() => "Actualizando configuración"}
    />
  );

  return (
    <div className="Status">
      <section className="title-Status">
        <p className="letter-title">Api Status</p>
      </section>
      <div>
        {taxEngine && <TaxEngine />}
        {updateDump && <Dump />}
        {mathops && <Mathops />}
        {changedLightweight && <Lightweight />}
        {changedConfiguration && <Congif />}
      </div>
      {/* {docs.map(dc => (
          <div className="Acceso-datos" key={dc.id}>
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Update File'} showInfo={true}/>
            {(() => {
              if (dc.DUMP === 'SI'){
                  return (
                      Dump
                  )
              }
            })()}
            {(() => {
              if (dc.MATHOPS === 'SI'){
                  return (
                      Mathops
                  )
              }
            })()}
            {(() => {
              if (dc.LIGHTWEIGHT === 'SI'){
                  return (
                    Lightweight
                  )
              }
            })()}
            <Progress type="dashboard" percent={valueEnd} status="active" gapDegree={0} format={() => 'Done'} />
             
            </div>
        ))} */}

      <div>
        <Button
          className="Button-back"
          style={{ background: "#ffff" }}
          type="primary"
          onClick={back}
        >
          {" "}
          Regresar
        </Button>
      </div>
      <div>
        <Button
          className="Button-Start"
          style={{ background: "#2a6662", border: "#2a6662" }}
          type="primary"
          onClick={() => setValueEnd(valueEnd + 10)}
        >
          Start
        </Button>
      </div>
      <div>
        {(() => {
          if (statusFirebase != "finished") {
            return <Circle />;
          }
        })()}
        {(() => {
          if (statusFirebase === "finished") {
            return (
              <Alert
                message="Succes"
                description="The Update Process Was Successful."
                type="success"
                showIcon
                closable
              />
            );
          }
        })()}
      </div>
    </div>
  );
};
export default Status;
