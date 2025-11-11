"use client";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountSecurityScreen() {
  const [fingerprintEnabled, setFingerprintEnabled] = useState(true);

  const handleGoBack = () => {
    console.log("Navigate back");
  };

  const handleUpdatePassword = () => {
    console.log("Navigate to Update Password");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <TouchableOpacity className="mr-4" onPress={handleGoBack}>
          <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">
          Account Security
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        {/* Update Password */}
        <TouchableOpacity
          className="bg-white rounded-2xl p-5 mb-4 flex-row items-center justify-between"
          onPress={handleUpdatePassword}
        >
          <Text className="text-gray-900 text-lg">Update Password</Text>
          <Ionicons name="chevron-forward" size={24} color="#9ca3af" />
        </TouchableOpacity>

        {/* Fingerprint Log In */}
        <View className="bg-white rounded-2xl p-5">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-gray-900 text-lg font-medium">
              Fingerprint Log In
            </Text>
            <Switch
              value={fingerprintEnabled}
              onValueChange={setFingerprintEnabled}
              trackColor={{ false: "#d1d5db", true: "#ff8a95" }}
              thumbColor={fingerprintEnabled ? "#fff" : "#fff"}
              ios_backgroundColor="#d1d5db"
            />
          </View>
          <Text className="text-gray-400 text-sm leading-5">
            Activation will allow anyone with Fingerprint access to this device,
            to login to your account
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
