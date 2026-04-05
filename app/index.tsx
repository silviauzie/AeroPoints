import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const SPLASH_MS = 2000;

export default function index() {
  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/SignInSignUp");
    }, SPLASH_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.replace("/SignInSignUp")}
    >
      {/* <Text>home</Text> */}
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/WhiteLogoForReactProject.png")}
        style={{ width: 200, height: 200 }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CD0100",
  },
});
