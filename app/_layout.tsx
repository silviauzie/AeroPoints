import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React from "react";

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

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
