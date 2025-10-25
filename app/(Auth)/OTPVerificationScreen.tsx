import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(["5", "1", "8", "3"]);
  const [focusedIndex, setFocusedIndex] = useState(2);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join("");
    console.log("Verifying OTP:", otpCode);
    // Add verification logic here
  };

  const handleResendOTP = () => {
    console.log("Resending OTP");
    // Add resend logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Back Button */}
      {/* <View className="px-6 pt-4">
        <TouchableOpacity className="w-10 h-10 items-center justify-center">
          <Ionicons name="arrow-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
      </View> */}

      <View className="flex-1 px-8 pt-12">
        {/* Icon */}
        <View className="items-center mb-8">
          <LinearGradient
            colors={["#ff4757", "#c2185b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="w-24 h-24 rounded-3xl items-center justify-center"
          >
            <View className="w-12 h-12 bg-white/20 rounded-xl items-center justify-center">
              <Ionicons name="shield-checkmark" size={32} color="#ffffff" />
            </View>
          </LinearGradient>
        </View>

        {/* Title */}
        <Text className="text-4xl font-bold text-[#1a1a2e] text-center mb-3">
          OTP{"\n"}Verification
        </Text>

        {/* Subtitle */}
        <Text className="text-base text-gray-500 text-center mb-8">
          We need to verify your email
        </Text>

        {/* Instructions */}
        <Text className="text-base text-gray-700 text-center leading-6 mb-12 px-2">
          To verify your account, enter the 4 digit OTP code that we sent to
          your email.
        </Text>

        {/* OTP Input Boxes */}
        <View className="flex-row justify-center mb-12 gap-4">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              className={`w-16 h-16 bg-white rounded-2xl text-center text-2xl font-semibold text-[#1a1a2e] ${
                focusedIndex === index
                  ? "border-2 border-[#ff4757]"
                  : "border border-gray-200"
              }`}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onFocus={() => setFocusedIndex(index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          className="rounded-2xl overflow-hidden mb-4"
          onPress={handleVerify}
        >
          <LinearGradient
            colors={["#ff4757", "#e91e63", "#c2185b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center justify-center"
          >
            <Text className="text-lg font-semibold text-white">Verify</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Resend OTP Button */}
        <TouchableOpacity
          className="bg-white rounded-2xl py-5 items-center justify-center border-2 border-gray-200"
          onPress={handleResendOTP}
        >
          <Text className="text-lg font-semibold text-[#1a1a2e]">
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
