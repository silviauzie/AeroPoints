import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const BRAND_RED = "#CD0100";

async function getInitialPath(): Promise<"/SignInSignUp" | "/(main)/home"> {
  /**
   * You don’t have persisted auth/session state yet.
   * For now: always start in auth/onboarding.
   *
   * When you add real auth:
   * - return "/(main)/home" if user/session exists
   * - otherwise return "/SignInSignUp"
   */
  return "/SignInSignUp";
}

export default function Index() {
  const router = useRouter();

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      const next = await getInitialPath();
      if (cancelled) return;

      // Ensure the native splash is gone before we replace routes.
      // (If you later call `SplashScreen.preventAutoHideAsync()`, this still works.)
      await SplashScreen.hideAsync().catch(() => undefined);
      router.replace(next);
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WhiteLogoForReactProject.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>AeroPoints</Text>
      <ActivityIndicator size="small" color="#FFFFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: BRAND_RED,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 18,
  },
});
