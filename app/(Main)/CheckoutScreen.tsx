import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { cssInterop } from "nativewind"; // Add this import
import React, { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// Enable className on base components (do this once per file or in a central utils file)
cssInterop(View, { className: "style" });
cssInterop(Text, { className: "style" });
cssInterop(TouchableOpacity, { className: "style" });
cssInterop(ScrollView, { className: "style" });
cssInterop(SafeAreaView, { className: "style" });
cssInterop(TextInput, { className: "style" });
cssInterop(LinearGradient, { className: "style" });

type PaymentMethod = "mobile" | "card";

export default function CheckoutScreen() {
  const [quantity, setQuantity] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mobile");
  const [provider, setProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");

  const pricePerItem = 330;
  const totalPrice = quantity * pricePerItem;

  const updateQuantity = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handlePay = () => {
    console.log("Processing payment:", {
      quantity,
      paymentMethod,
      totalPrice,
      provider,
      phoneNumber,
      address,
    });
    // Process payment logic
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
        <TouchableOpacity className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">Packages</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Quantity Section */}
        <View className="px-6 py-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">Quantity</Text>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <TouchableOpacity
                className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center"
                onPress={() => updateQuantity(-1)}
              >
                <Ionicons name="remove" size={20} color="#4a1942" />
              </TouchableOpacity>

              <Text className="text-3xl font-bold text-gray-900 mx-6">
                {quantity}
              </Text>

              <TouchableOpacity
                className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center"
                onPress={() => updateQuantity(1)}
              >
                <Ionicons name="add" size={20} color="#4a1942" />
              </TouchableOpacity>
            </View>

            <View className="bg-[#e8a598] px-6 py-3 rounded-xl">
              <Text className="text-[#4a1942] text-lg font-bold">
                Le {totalPrice.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Payment Methods */}
        <View className="px-6 py-4">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Payment Methods
          </Text>

          {/* Mobile Money Option */}
          <TouchableOpacity
            className={`rounded-2xl p-5 mb-4 flex-row items-center justify-between ${
              paymentMethod === "mobile"
                ? "bg-[#4a1942]"
                : "bg-white border-2 border-gray-200"
            }`}
            onPress={() => setPaymentMethod("mobile")}
          >
            <View className="flex-1">
              <Text
                className={`text-lg font-bold mb-1 ${
                  paymentMethod === "mobile" ? "text-white" : "text-gray-900"
                }`}
              >
                Mobile Money
              </Text>
              <Text
                className={`text-sm ${
                  paymentMethod === "mobile" ? "text-white/70" : "text-gray-500"
                }`}
              >
                Orange Money, Afrimoney
              </Text>
            </View>

            <View
              className={`w-12 h-12 rounded-xl items-center justify-center ${
                paymentMethod === "mobile" ? "bg-white/20" : "bg-gray-100"
              }`}
            >
              {paymentMethod === "mobile" ? (
                <Ionicons name="checkmark" size={24} color="#ffffff" />
              ) : (
                <Ionicons
                  name="phone-portrait-outline"
                  size={24}
                  color="#4a1942"
                />
              )}
            </View>
          </TouchableOpacity>

          {/* Card Payment Option */}
          <TouchableOpacity
            className={`rounded-2xl p-5 flex-row items-center justify-between ${
              paymentMethod === "card"
                ? "bg-[#4a1942]"
                : "bg-white border-2 border-gray-200"
            }`}
            onPress={() => setPaymentMethod("card")}
          >
            <View className="flex-1">
              <Text
                className={`text-lg font-bold mb-1 ${
                  paymentMethod === "card" ? "text-white" : "text-gray-900"
                }`}
              >
                Card Payment
              </Text>
              <Text
                className={`text-sm ${
                  paymentMethod === "card" ? "text-white/70" : "text-gray-500"
                }`}
              >
                Orange Money, Afrimoney
              </Text>
            </View>

            <View className="flex-row gap-2">
              <View className="w-10 h-7 bg-blue-600 rounded items-center justify-center">
                <Text className="text-white text-xs font-bold">VISA</Text>
              </View>
              <View className="w-10 h-7 bg-red-600 rounded items-center justify-center">
                <Text className="text-white text-xs font-bold">MC</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Mobile Money Form Fields */}
        {paymentMethod === "mobile" && (
          <View className="px-6 py-4">
            {/* Choose Provider */}
            <View className="mb-6">
              <Text className="text-gray-600 text-sm mb-2">
                Choose Provider *
              </Text>
              <View className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200">
                <Text className="text-gray-400">- Select Date -</Text>
              </View>
            </View>

            {/* Phone Number */}
            <View className="mb-6">
              <Text className="text-gray-600 text-sm mb-2">Phone Number *</Text>
              <View className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 flex-row items-center">
                <Text className="text-[#c2185b] font-semibold mr-3">+232</Text>
                <TextInput
                  className="flex-1 text-gray-900 text-base"
                  placeholder="00 000 000"
                  placeholderTextColor="#9ca3af"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </View>
            </View>

            {/* Pin */}
            <View className="mb-6">
              <Text className="text-gray-600 text-sm mb-2">Pin *</Text>
              <TextInput
                className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 text-gray-900 text-base tracking-widest"
                placeholder="0 0 0 0"
                placeholderTextColor="#9ca3af"
                keyboardType="number-pad"
                maxLength={4}
                secureTextEntry
                value={pin}
                onChangeText={setPin}
              />
            </View>
          </View>
        )}

        {/* Contact Address */}
        <View className="px-6 py-4">
          <Text className="text-xl font-bold text-[#4a1942] mb-4">
            Contact Address
          </Text>

          {/* Address */}
          <View className="mb-6">
            <Text className="text-gray-600 text-sm mb-2">Address *</Text>
            <TextInput
              className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 text-gray-900 text-base"
              placeholder="#23 Wilkinson Road, Freetown"
              placeholderTextColor="#9ca3af"
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* Live Location */}
          <View className="mb-6">
            <Text className="text-gray-600 text-sm mb-2">
              Live Location (optional)
            </Text>
            <View className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 flex-row items-center">
              <TextInput
                className="flex-1 text-gray-900 text-base"
                placeholder="Lat, Long"
                placeholderTextColor="#9ca3af"
                value={location}
                onChangeText={setLocation}
              />
              <Ionicons name="location" size={24} color="#c2185b" />
            </View>
          </View>
        </View>

        {/* Spacer for bottom button */}
        <View className="h-24" />
      </ScrollView>

      {/* Pay Button */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-6 border-t border-gray-100">
        <View className="flex-row items-center justify-between">
          <Text className="text-2xl font-bold text-gray-900">
            Le {totalPrice.toFixed(2)}
          </Text>

          <TouchableOpacity
            className="flex-1 ml-4 rounded-2xl overflow-hidden"
            onPress={handlePay}
          >
            <LinearGradient
              colors={["#ff8a95", "#e8a598"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-4 px-8 flex-row items-center justify-center"
            >
              <Text className="text-white text-lg font-bold mr-3">Pay</Text>
              <Ionicons name="arrow-forward" size={20} color="#ffffff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
