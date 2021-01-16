import React from "react";
import { CustomAlert } from "./StyledElements";

const InputsContacts = ({ userCreated, register }) => {
  return (
    <>
      <li className="mb-2">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Correo electrónico"
          ref={register({
            required: { value: true, message: "Ingrese su correo electrónico" },
          })}
        />
      </li>
      <li className="mb-2">
        <input
          type="tel"
          className="form-control"
          name="numberPhone"
          placeholder="Teléfono celular"
          ref={register({
            required: { value: true, message: "Ingrese su teléfono celular" },
          })}
        />
      </li>
      {userCreated && (
        <li>
          <CustomAlert className="alert alert-primary mb-0">
            <p>Teléfono: {userCreated.email}</p>
            <hr />
            <p>Correo: {userCreated.numberPhone}</p>
          </CustomAlert>
        </li>
      )}
    </>
  );
};

export default InputsContacts;
