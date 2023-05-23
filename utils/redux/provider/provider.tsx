'use client';

import { Provider } from "react-redux";
import { Store } from "../store/reduxStore";
import React from "react";

export const Providers = ({children} : {children : React.ReactNode}) => {

  return(
    <Provider store={Store}>
      {children}
    </Provider>
  )
}