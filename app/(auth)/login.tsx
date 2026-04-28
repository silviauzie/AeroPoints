import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const router = useRouter();
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subtitle}>Welcome back</Text>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="you@example.com"
            placeholderTextColor={colors.placeholder}
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
            style={styles.input}
            selectionColor={colors.primary}
            returnKeyType="next"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Your password"
            placeholderTextColor={colors.placeholder}
            autoComplete="password"
            autoCapitalize="none"
            secureTextEntry
            style={styles.input}
            selectionColor={colors.primary}
            returnKeyType="done"
          />
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.linkbutton}
          onPress={() => {
            router.push("/Signup");
          }}
        >
          <Text style={styles.linkbuttonText}>
            Don't have an account?{" "}
            <Text style={styles.linkbuttonTextBold}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const colors = {
  background: "#FFFFFF",
  text: "#111827",
  muted: "#6B7280",
  placeholder: "#9CA3AF",
  border: "#E5E7EB",
  surface: "#F9FAFB",
  primary: "#D0021B",
} as const;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
    textAlign: "left",
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 14,
    color: colors.muted,
    textAlign: "left",
  },
  field: {
    marginBottom: 14,
  },
  label: {
    marginBottom: 8,
    fontSize: 12,
    fontWeight: "600",
    color: colors.muted,
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    color: colors.text,
  },
  button: {
    marginTop: 10,
    height: 52,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  linkbutton: {
    marginTop: 24,
    alignItems: "center",
  },
  linkbuttonText: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "600",
  },
  linkbuttonTextBold: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
});
