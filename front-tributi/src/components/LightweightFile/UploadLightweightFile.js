import React from "react";
import "antd/dist/antd.css";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const UploadLightweightFile = ({setFile}) => {
  const props = {
    name: "file",
    multiple: true,
    data: (file) => {
      console.log("DATA", file);
    },
    //action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
        setFile(info.file);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props} type="file" ID="fileSelect" accept=".xlsx, .xls, .csv">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Si realizaste cambios en el Tax Engine liviano cargalo aqui
      </p>
      <p className="ant-upload-hint">
      Este espacio es específico para el Tax Engine liviano .xlsx
      </p>
    </Dragger>
  );
};

export default UploadLightweightFile;
