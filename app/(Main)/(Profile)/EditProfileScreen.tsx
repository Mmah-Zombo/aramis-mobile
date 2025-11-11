"use client";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    Alert,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface EditProfileScreenProps {
  navigation?: any;
  initialName?: string;
  initialEmail?: string;
  initialPhone?: string;
}

export default function EditProfileScreen({
  navigation,
  initialName = "Edward Bob",
  initialEmail = "edwardbobkamara@gmail.com",
  initialPhone = "+232 xx xxx xxx",
}: EditProfileScreenProps) {
  const [fullName, setFullName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhone);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const handleSaveChanges = () => {
    console.log("Saving changes:", { fullName, email, phoneNumber });
    Alert.alert("Success", "Your profile has been updated successfully!", [
      {
        text: "OK",
        onPress: () => navigation?.goBack(),
      },
    ]);
  };

  const handleChangePhoto = () => {
    console.log("Change photo pressed");
    Alert.alert("Change Photo", "Choose an option", [
      { text: "Take Photo", onPress: () => console.log("Take photo") },
      {
        text: "Choose from Library",
        onPress: () => console.log("Choose from library"),
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <TouchableOpacity className="mr-4" onPress={() => navigation?.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Edit Profile</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View className="bg-gray-50 mx-6 rounded-3xl p-8 items-center mt-4 mb-6">
          <View className="relative">
            {/* Avatar with Gradient */}
            <View className="w-44 h-44 rounded-full overflow-hidden items-center justify-center">
              <LinearGradient
                colors={["#ff6b9d", "#e8576b", "#c2185b"]}
                className="w-full h-full items-center justify-center"
              >
                <Ionicons name="person" size={72} color="#ffffff" />
              </LinearGradient>
            </View>
            {/* Camera Button */}
            <TouchableOpacity
              className="absolute bottom-0 right-0 w-14 h-14 rounded-full items-center justify-center"
              style={{ backgroundColor: "#ff8a95" }}
              onPress={handleChangePhoto}
              activeOpacity={0.8}
            >
              <Ionicons name="camera" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Section */}
        <View className="px-6">
          {/* Full Name */}
          <View className="mb-6">
            <Text className="text-gray-400 text-sm mb-2">Full name</Text>
            <View className="border-2 border-pink-400 rounded-2xl px-5 py-4 bg-white">
              <TextInput
                className="text-gray-900 text-lg"
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter your full name"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Email */}
          <View className="mb-6">
            <Text className="text-gray-400 text-sm mb-2">Email</Text>
            <View className="border border-gray-200 rounded-2xl px-5 py-4 bg-white">
              <TextInput
                className="text-gray-900 text-lg"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Phone Number */}
          <View className="mb-6">
            <Text className="text-gray-400 text-sm mb-2">Phone number</Text>
            <View className="border border-gray-200 rounded-2xl px-5 py-4 bg-white flex-row items-center">
              {/* Country Code Selector */}
              <TouchableOpacity
                className="flex-row items-center mr-3 pr-3 border-r border-gray-200"
                onPress={() => setShowCountryPicker(true)}
              >
                <Text className="text-2xl mr-2">🇸🇱</Text>
                <Ionicons name="chevron-down" size={20} color="#6b7280" />
              </TouchableOpacity>
              {/* Phone Input */}
              <TextInput
                className="flex-1 text-gray-900 text-lg"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="+232 xx xxx xxx"
                placeholderTextColor="#9ca3af"
                keyboardType="phone-pad"
              />
            </View>
          </View>
        </View>

        {/* Spacer */}
        <View className="h-20" />
      </ScrollView>

      {/* Save Button */}
      <View className="px-6 pb-8 bg-white">
        <TouchableOpacity
          className="rounded-3xl overflow-hidden"
          onPress={handleSaveChanges}
          activeOpacity={0.9}
        >
          <LinearGradient
            colors={["#ff8a95", "#e8576b", "#c2185b", "#8b1653"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center"
          >
            <Text className="text-white text-xl font-bold">Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      <View className="items-center pb-2">
        <View className="w-32 h-1 bg-gray-900 rounded-full" />
      </View>
    </SafeAreaView>
  );
}
