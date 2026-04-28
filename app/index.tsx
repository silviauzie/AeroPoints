import { Redirect } from "expo-router";
import React from "react";
export default function Index() {
  // Keep this route so "/" always resolves.
  // Replace with real auth check once you wire up authentication.
  const isAuth = false;
  return <Redirect href={isAuth ? "/home" : "/login"} />;
}
