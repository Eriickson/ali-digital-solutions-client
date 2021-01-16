import React from "react";
import { Avatar, ListQuestions } from "./StyledElements";

const ContainerInputs = ({ title, children }) => {
  return (
    <div className="mb-3 row">
      <div className="col-3">
        <Avatar
          className="img-thumbnail rounded-circle"
          src="https://gia.uk.com/wp-content/uploads/2018/11/GIA-Staff-Tom-Bentley-6995-500x500.jpg"
          alt=""
        />
      </div>
      <div className="col-9">
        <div className="px-3 py-3 border bg-light">
          <h3 className="h6">
            <b>{title}</b>
          </h3>
          <ListQuestions className="list-group">{children}</ListQuestions>
        </div>
      </div>
    </div>
  );
};

export default ContainerInputs;
