import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import ContentMessage from "./components/ContentMessage";
import { NEW_USER_M } from "./apollo/Mutations";

const App = () => {
  const [userState, setUserState] = useState(null);
  const [newUser] = useMutation(NEW_USER_M);

  async function onSubmit(user) {
    try {
      await newUser({ variables: { user } });
      setUserState({
        ...user,
        day: user.birthday.split("-")[2],
        month: user.birthday.split("-")[1],
        year: user.birthday.split("-")[0],
      });
    } catch (err) {
      console.log({ err });
    }
  }

  return (
    <>
      <div className="my-3">
        <ContentMessage onSubmit={onSubmit} userCreated={userState} />
      </div>
    </>
  );
};

export default App;
