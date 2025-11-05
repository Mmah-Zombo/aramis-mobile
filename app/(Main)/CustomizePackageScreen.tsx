import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PackageItem {
  id: string;
  name: string;
  image: any;
  quantity: number;
}

export default function CustomizePackageScreen() {
  const [items, setItems] = useState<PackageItem[]>([
    {
      id: "1",
      name: "Pads & Tampons",
      image:"", // Replace with actual image
      quantity: 1,
    },
    {
      id: "2",
      name: "Snacks & Treats",
      image: "", // Replace with actual image
      quantity: 1,
    },
    {
      id: "3",
      name: "Candles",
      image: "", // Replace with actual image
      quantity: 2,
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleAddNewItem = () => {
    console.log("Add new item");
    // Navigate to add item screen or show modal
  };

  const handleProceedToCheckout = () => {
    console.log("Proceed to checkout");
    // Navigate to checkout screen
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4">
        <TouchableOpacity className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold text-gray-900">
          Customize Package
        </Text>
      </View>
      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {/* Add New Item Button */}
        <TouchableOpacity
          className="border-2 border-dashed border-[#c2185b] rounded-2xl p-6 mb-6 flex-row items-center"
          onPress={handleAddNewItem}
        >
          <LinearGradient
            colors={["#ff6b9d", "#c2185b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            className="w-16 h-16 rounded-2xl items-center justify-center mr-4"
          >
            <Ionicons name="add" size={32} color="#ffffff" />
          </LinearGradient>
          <Text className="text-gray-900 text-base font-medium">
            Add new item
          </Text>
        </TouchableOpacity>
        {/* Package Items List */}
        {items.map((item) => (
          <View
            key={item.id}
            className="bg-pink-50 rounded-2xl p-4 mb-4 flex-row items-center"
          >
            {/* Product Image */}
            <View className="w-20 h-20 bg-white rounded-xl overflow-hidden mr-4">
              <Image
                source={item.image}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            {/* Item Details */}
            <View className="flex-1">
              <Text className="text-gray-900 text-base font-semibold mb-3">
                {item.name}
              </Text>

              {/* Quantity Controls */}
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center"
                  onPress={() => updateQuantity(item.id, -1)}
                >
                  <Ionicons name="remove" size={20} color="#4a1942" />
                </TouchableOpacity>

                <Text className="text-[#c2185b] text-lg font-bold mx-4 min-w-[24px] text-center">
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  className="w-8 h-8 items-center justify-center"
                  onPress={() => updateQuantity(item.id, 1)}
                >
                  <Ionicons name="add" size={20} color="#4a1942" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Remove Button */}
            <TouchableOpacity
              className="w-8 h-8 items-center justify-center"
              onPress={() => removeItem(item.id)}
            >
              <Ionicons name="close" size={24} color="#4a1942" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Proceed to Checkout Button */}
      <View className="px-6 pb-8 pt-4">
        <TouchableOpacity
          className="rounded-2xl overflow-hidden"
          onPress={handleProceedToCheckout}
        >
          <LinearGradient
            colors={["#ff6b9d", "#e91e63", "#c2185b"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center justify-center"
          >
            <Text className="text-white text-lg font-semibold">
              Proceed to Checkout
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
