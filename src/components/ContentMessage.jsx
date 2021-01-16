import React from "react";
import { useForm } from "react-hook-form";

import ContainerInputs from "./ContainerInputs";
import InputsName from "./InputsName";
import InputsBirthday from "./InputsBirthday";
import InputsContacts from "./InputsContacts";
import monthNames from "../json/monthNames";
import styled from "styled-components";
import { CustomAlert } from "./StyledElements";

const InputSubmit = styled.input`
  background-color: #f30086;
  border-color: #f30086;
  &:hover {
    background-color: #ff57b4;
    border-color: #ff57b4;
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem #ff008d38;
    border-color: #ff39a6;
    background-color: #ff57b4;
  }
  &:focus:active {
    box-shadow: 0 0 0 0.25rem #ff008d38;
  }
`;

const ContentMessage = ({ onSubmit, userCreated }) => {
  const { register, handleSubmit } = useForm();

  function onSubmitForm(data) {
    const newUser = {
      ...data,
      birthday: `${data.year}-${data.month}-${data.day}`,
    };

    delete newUser.year;
    delete newUser.month;
    delete newUser.day;

    onSubmit(newUser);
  }

  return (
    <div className="container px-1">
      <div className="row">
        <div className="offset-md-2 offset-lg-3 col-md-8 col-lg-6 offset-xl-4 col-xl-4">
          <div className="border px-3 pb-1 pt-3">
            <div className="mb-4">
              <h1 className="h5">
                <b>Título de Formulario</b>
              </h1>
              <p>En menos de 5 minutos.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <ContainerInputs title="Cuál es tu nombre?">
                <InputsName userCreated={userCreated} register={register} />
              </ContainerInputs>
              <ContainerInputs title="Cuál es tu fecha de nacimiento?">
                <InputsBirthday userCreated={userCreated} register={register} />
              </ContainerInputs>
              <ContainerInputs title="Datos de contacto?">
                <InputsContacts userCreated={userCreated} register={register} />
              </ContainerInputs>
              <div className="d-grid">
                <InputSubmit
                  type="submit"
                  value="Iniciar"
                  className="btn btn-primary btn-block mb-2"
                />
              </div>

              {userCreated && (
                <CustomAlert className="alert alert-primary">
                  <p className="mb-1">
                    Nombre: {userCreated.name} {userCreated.secondName}{" "}
                    {userCreated.paternalLastname} {userCreated.maternalLastname}
                  </p>
                  <p className="mb-1">Correo electrónico: {userCreated.numberPhone}</p>
                  <p className="mb-1">Teléfono Celular: {userCreated.email}</p>
                  <p className="mb-1">
                    Fecha de Nacimiento: {userCreated.day} {monthNames[userCreated.month]}{" "}
                    {userCreated.year}
                  </p>
                </CustomAlert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMessage;
