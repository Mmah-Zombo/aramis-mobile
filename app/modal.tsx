import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">This is a modal</ThemedText>
      {/* <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link> */}
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
      {/* <Link href="/(Auth)/LoginScreen" style={styles.link}>
        <ThemedText type="link">Go to Login Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/ForgotPasswordScreen" style={styles.link}>
        <ThemedText type="link">Go to Forgot Password Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/ResetPasswordScreen" style={styles.link}>
        <ThemedText type="link">Go to Reset Password Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/ChangePasswordScreen" style={styles.link}>
        <ThemedText type="link">Go to Change Password Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/ProfileScreen" style={styles.link}>
        <ThemedText type="link">Go to Profile Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/EditProfileScreen" style={styles.link}>
        <ThemedText type="link">Go to Edit Profile Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/ChangeEmailScreen" style={styles.link}>
        <ThemedText type="link">Go to Change Email Screen</ThemedText>
      </Link> */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
