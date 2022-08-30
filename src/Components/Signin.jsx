import { Button } from "@mui/material";
import React, { useState } from "react";

export const Signin = () => {
  const [user, setuser] = useState();
  const [mail, setmail] = useState();
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
          />
          <Button type="submit">login</Button>
        </div>
      </form>
    </>
  );
};
