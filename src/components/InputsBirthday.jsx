import React from "react";
import styled from "styled-components";

import monthNames from "../json/monthNames";
import { CustomAlert } from "./StyledElements";

const InputNumbet = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputsBirthday = ({ register, userCreated }) => {
  return (
    <>
      <li className="mb-2">
        <InputNumbet
          type="number"
          className="form-control"
          name="day"
          placeholder="Día"
          ref={register({
            required: { value: true, message: "Ingrese el día en que nació" },
            min: { value: 1, message: "Ingrese un día válido" },
            max: { value: 31, message: "Ingrese un día válido" },
          })}
        />
      </li>
      <li className="mb-2">
        <select
          className="form-control"
          name="month"
          placeholder="Mes"
          defaultValue={0}
          ref={register({
            required: { value: true, message: "Ingrese el mes en que nació" },
            min: { value: 1, message: "Ingrese un mes válido" },
            max: { value: 12, message: "Ingrese un mes válido" },
          })}
        >
          {monthNames.map((month, i) => (
            <option key={i} disabled={i === 0} value={i}>
              {month}
            </option>
          ))}
        </select>
      </li>
      <li className="mb-2">
        <InputNumbet
          type="number"
          className="form-control"
          name="year"
          placeholder="Año"
          ref={register({
            required: { value: true, message: "Ingrese el año en que nació" },
            min: { value: new Date().getFullYear() - 110, message: "Ingrese un año válido" },
            max: { value: new Date().getFullYear(), message: "Ingrese un año válido" },
          })}
        />
      </li>
      {userCreated && (
        <li>
          <CustomAlert className="alert alert-primary text-center mb-0">
            {userCreated.day} {monthNames[userCreated.month]} {userCreated.year}
          </CustomAlert>
        </li>
      )}
    </>
  );
};

export default InputsBirthday;
