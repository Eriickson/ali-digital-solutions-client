import React from "react";
import { CustomAlert } from "./StyledElements";

const InputsName = ({ register, userCreated }) => {
  return (
    <>
      <li className="mb-2">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Nombre"
          ref={register({
            required: { value: true, message: "Ingrese su nombre" },
          })}
        />
      </li>
      <li className="mb-2">
        <input
          type="text"
          className="form-control"
          name="secondName"
          placeholder="Segundo nombre"
          ref={register({
            required: { value: true, message: "Ingrese su segundo nombre" },
          })}
        />
      </li>
      <li className="mb-2">
        <input
          type="text"
          className="form-control"
          name="paternalLastname"
          placeholder="Apellido Paterno"
          ref={register({
            required: { value: true, message: "Ingrese su apellido paterno" },
          })}
        />
      </li>
      <li className="mb-2">
        <input
          type="text"
          className="form-control"
          name="maternalLastname"
          placeholder="Apellido Materno"
          ref={register({
            required: { value: true, message: "Ingrese su apellido materno" },
          })}
        />
      </li>
      {userCreated && (
        <li>
          <CustomAlert className="alert alert-primary text-center mb-0">
            {userCreated.name} {userCreated.secondName} {userCreated.paternalLastname}{" "}
            {userCreated.maternalLastname}
          </CustomAlert>
        </li>
      )}
    </>
  );
};

export default InputsName;
