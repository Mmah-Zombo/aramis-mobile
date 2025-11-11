import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ThemedView } from '@/components/themed-view';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModalScreen() {
      const router = useRouter();
    const handleLogin = () => {
     router.push ("/(Auth)/SigninScreen");
    };

    const handleRegister = () => {
     router.push("/(Auth)/SignupScreen");
    };

  return (
    <ThemedView style={styles.container}>
      {/* <ThemedText type="title">This is a modal</ThemedText> */}
      {/* <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link> */}
      <SafeAreaView>
        <View className="flex-1 px-6 justify-around">
          {/* Top Section - Logo and Branding */}
          <View className="flex-1 justify-center items-center">
            {/* Logo/Icon */}
            <View className="mb-8">
              <View className="w-32 h-32 rounded-full overflow-hidden mb-6">
                <LinearGradient
                  colors={["#ff8a95", "#e8a598", "#c2185b", "#4a1942"]}
                  className="w-full h-full items-center justify-center"
                >
                  <Ionicons name="water" size={64} color="#ffffff" />
                </LinearGradient>
              </View>
            </View>

            {/* App Name */}
            <Text className="text-4xl font-bold text-gray-900 mb-3">
              Amaris
            </Text>
            <Text className="text-lg text-gray-600 text-center mb-2">
              Period & Health Tracker
            </Text>
            <Text className="text-sm text-gray-500 text-center px-8">
              Track your cycle, mood, and health all in one place
            </Text>
          </View>

          {/* Bottom Section - Buttons */}
          <View className="gap-4">
            {/* Register Button */}
            <TouchableOpacity
              className="rounded-3xl overflow-hidden"
              onPress={handleRegister}
            >
              <LinearGradient
                colors={["#ff8a95", "#e8a598", "#c2185b", "#4a1942"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="py-5 items-center"
              >
                <Text className="text-white text-xl font-bold">
                  Create Account
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              className="rounded-3xl py-5 items-center border-2 border-pink-300 bg-white"
              onPress={handleLogin}
            >
              <Text className="text-[#c2185b] text-xl font-bold">Log In</Text>
            </TouchableOpacity>

            {/* Terms Text */}
            <Text className="text-xs text-gray-500 text-center px-8 mt-2">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </Text>
          </View>
        </View>
      </SafeAreaView>

      {/* <Link href="/(Auth)/OTPVerificationScreen" style={styles.link}>
        <ThemedText type="link">Go to OTP Verification Screen</ThemedText>
      </Link>
      <Link href="/(Auth)/VerificationSuccessScreen" style={styles.link}>
        <ThemedText type="link">Go to Verification Success Screen</ThemedText>
      </Link> */}
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
