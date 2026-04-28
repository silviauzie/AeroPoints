import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
    }
    if (password.length < 3) {
      Alert.alert("Error", "Password must be at least 3 characters");
    }
  };

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign Up to continue</Text>

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
            onChangeText={setEmail}
            value={email}
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
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.button}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.linkbutton}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={styles.linkbuttonText}>
            Already have an account?{" "}
            <Text style={styles.linkbuttonTextBold}>Sign in</Text>
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
