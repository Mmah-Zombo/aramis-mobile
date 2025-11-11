import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 px-6 justify-between py-12">
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
          <Text className="text-4xl font-bold text-gray-900 mb-3">Amaris</Text>
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
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
