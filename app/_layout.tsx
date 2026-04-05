import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function _layout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="SignInSignUp"
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen name="(main)" />
      </Stack>
    </React.Fragment>
  );
}
