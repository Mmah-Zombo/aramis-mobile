import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="px-4 flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1" contentContainerClassName="px-8 pt-5">
        {/* Header */}
        <View className="mt-5 mb-10">
          <Text className="text-4xl font-bold text-[#1a1a2e] leading-[3rem] mb-4">
            Create new{"\n"}account
          </Text>
          <View className="flex-row items-center">
            <Text className="text-base text-gray-600">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Link
                href="/(Auth)/SigninScreen"
                className="text-base text-[#ff4757] font-semibold"
              >
                Sign In
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/* Email Input */}
        <View className="flex-row items-center bg-white rounded-2xl px-4 py-5 mb-4 border border-gray-200">
          <View className="w-8 h-8 rounded-lg bg-gray-100 items-center justify-center mr-3">
            <Ionicons name="mail" size={20} color="#1a1a2e" />
          </View>
          <TextInput
            className="flex-1 text-base text-[#1a1a2e]"
            placeholder="Enter your email"
            placeholderTextColor="#c0c0c0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View className="flex-row items-center bg-white rounded-2xl px-4 py-5 mb-4 border-2 border-[#ff4757]">
          <View className="w-8 h-8 rounded-lg bg-red-50 items-center justify-center mr-3">
            <Ionicons name="lock-closed" size={20} color="#ff4757" />
          </View>
          <TextInput
            className="flex-1 text-base text-[#1a1a2e]"
            placeholder="Enter your password"
            placeholderTextColor="#c0c0c0"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            className="p-2"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#c0c0c0"
            />
          </TouchableOpacity>
        </View>

        {/* Remember Me */}
        <TouchableOpacity
          className="flex-row items-center mb-6"
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View
            className={`w-5 h-5 rounded border-2 mr-2.5 items-center justify-center ${
              rememberMe ? "bg-[#ff4757] border-[#ff4757]" : "border-gray-300"
            }`}
          >
            {rememberMe && <Ionicons name="checkmark" size={16} color="#fff" />}
          </View>
          <Text className="text-base text-[#1a1a2e]">Remember me</Text>
        </TouchableOpacity>

        {/* Sign Up Button */}
        <TouchableOpacity className="rounded-2xl overflow-hidden mb-8">
          <LinearGradient
            colors={["#ff4757", "#e91e63", "#c2185b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center justify-center"
          >
            <Text className="text-lg font-semibold text-white">Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-[1px] bg-gray-200" />
          <Text className="mx-4 text-sm text-gray-400">or sign up with</Text>
          <View className="flex-1 h-[1px] bg-gray-200" />
        </View>

        {/* Social Sign Up Buttons */}
        <TouchableOpacity className="flex-row items-center justify-center bg-white rounded-2xl py-4 mb-3 border border-gray-200">
          <FontAwesome name="google" size={24} color="#DB4437" />
          <Text className="text-base font-medium text-[#1a1a2e] ml-3">
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center bg-white rounded-2xl py-4 mb-3 border border-gray-200">
          <FontAwesome name="facebook" size={24} color="#1877F2" />
          <Text className="text-base font-medium text-[#1a1a2e] ml-3">
            Sign up with Facebook
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center bg-white rounded-2xl py-4 mb-3 border border-gray-200">
          <FontAwesome name="apple" size={24} color="#000000" />
          <Text className="text-base font-medium text-[#1a1a2e] ml-3">
            Sign up with Apple
          </Text>
        </TouchableOpacity>

        {/* Terms and Privacy */}
        <View className="mt-6 mb-8 px-2">
          <Text className="text-[13px] text-gray-400 text-center leading-5">
            By clicking Sign Up you agree to Recognotes{" "}
            <Text className="text-[#ff4757] font-semibold">Term of Use</Text>{" "}
            and{" "}
            <Text className="text-[#ff4757] font-semibold">Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
