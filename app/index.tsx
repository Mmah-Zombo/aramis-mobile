import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


import { ThemedText } from "@/components/themed-text";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello World</Text>
            <Link href="/(Auth)/SignupScreen" style={styles.link}>
              <ThemedText type="link">Go to Sign Up Screen</ThemedText>
            </Link>
            <Link href="/(Auth)/SigninScreen" style={styles.link}>
              <ThemedText type="link">Go to Sign In Screen</ThemedText>
            </Link>
            <Link href="/(Auth)/OTPVerificationScreen" style={styles.link}>
              <ThemedText type="link">Go to OTP Verification Screen</ThemedText>
            </Link>
            <Link href="/(Auth)/VerificationSuccessScreen" style={styles.link}>
              <ThemedText type="link">Go to Verification Success Screen</ThemedText>
            </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

