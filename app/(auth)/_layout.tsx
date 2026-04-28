import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Authlayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="Signup" />
      </Stack>
    </React.Fragment>
  );
}
