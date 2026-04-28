import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function _layout() {
  const router = useRouter();
  const isAuth = false;
  useEffect(() => {
    if (!isAuth) {
      // Route groups like "(auth)" are not part of the URL path.
      router.replace("/login");
    } else {
      router.replace("/home");
    }
  }, []);
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(main)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </React.Fragment>
  );
}
