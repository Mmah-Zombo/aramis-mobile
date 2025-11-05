import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

export default function CarePackageScreen() {
  const [selectedPack, setSelectedPack] = useState<"regular" | "customize">(
    "regular"
  );

  const products: Product[] = [
    {
      id: "1",
      name: "Day By Day Men Skincare",
      description: "Lotion, Shampoo, Fragrance..",
      image: "",
    },
    {
      id: "2",
      name: "BEARD MEN",
      description: "Oil, Butter, Balm, Lotion..",
      image:"",
    },
  ];

  const handleAddProduct = (productId: string) => {
    console.log("Add product:", productId);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="bg-white px-6 py-4">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4">
            <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
          </TouchableOpacity>
          <Text className="text-2xl font-semibold text-gray-900">
            Care Package
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Package Type Selection */}
        <View className="px-6 py-6 flex-row gap-3">
          {/* Regular Pack Button */}
          <TouchableOpacity
            className={`flex-1 rounded-full py-4 px-6 flex-row items-center justify-center ${
              selectedPack === "regular"
                ? "bg-[#ff8a95]"
                : "bg-white border-2 border-pink-200"
            }`}
            onPress={() => setSelectedPack("regular")}
          >
            <View
              className={`w-5 h-5 rounded mr-2 items-center justify-center ${
                selectedPack === "regular"
                  ? "bg-white/30"
                  : "border-2 border-pink-300"
              }`}
            >
              {selectedPack === "regular" && (
                <Ionicons name="checkmark" size={16} color="#ffffff" />
              )}
            </View>
            <View>
              <Text
                className={`font-bold text-sm ${
                  selectedPack === "regular"
                    ? "text-[#4a1942]"
                    : "text-pink-400"
                }`}
              >
                REGULAR PACK
              </Text>
              <Text
                className={`text-xs ${
                  selectedPack === "regular"
                    ? "text-[#4a1942]/70"
                    : "text-pink-300"
                }`}
              >
                Recommended
              </Text>
            </View>
          </TouchableOpacity>

          {/* Customize Pack Button */}
          <TouchableOpacity
            className={`flex-1 rounded-full py-4 px-6 flex-row items-center justify-center ${
              selectedPack === "customize"
                ? "bg-[#ff8a95]"
                : "bg-white border-2 border-pink-200"
            }`}
            onPress={() => setSelectedPack("customize")}
          >
            <View
              className={`w-5 h-5 rounded mr-2 items-center justify-center ${
                selectedPack === "customize"
                  ? "bg-white/30"
                  : "border-2 border-pink-300"
              }`}
            >
              {selectedPack === "customize" && (
                <Ionicons name="checkmark" size={16} color="#ffffff" />
              )}
            </View>
            <View>
              <Text
                className={`font-bold text-sm ${
                  selectedPack === "customize"
                    ? "text-[#4a1942]"
                    : "text-pink-400"
                }`}
              >
                CUSTOMIZE PACK
              </Text>
              <Text
                className={`text-xs ${
                  selectedPack === "customize"
                    ? "text-[#4a1942]/70"
                    : "text-pink-300"
                }`}
              >
                Recommended
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Care Products Section */}
        <View className="px-6">
          <Text className="text-4xl font-bold text-[#4a1942] mb-6">
            Care Products
          </Text>

          {/* Product Cards */}
          {products.map((product) => (
            <View key={product.id} className="bg-pink-50 rounded-3xl p-4 mb-6">
              {/* Product Image */}
              <View className="bg-white rounded-2xl overflow-hidden mb-4">
                <Image
                  source={product.image}
                  className="w-full h-64"
                  resizeMode="contain"
                />
              </View>

              {/* Product Info */}
              <View className="flex-row items-center justify-between">
                <View className="flex-1">
                  <Text className="text-xl font-bold text-[#4a1942] mb-1">
                    {product.name}
                  </Text>
                  <Text className="text-gray-600 text-sm">
                    {product.description}
                  </Text>
                </View>

                {/* Add Button */}
                <TouchableOpacity
                  className="w-14 h-14 bg-white rounded-full items-center justify-center ml-4 shadow-sm"
                  onPress={() => handleAddProduct(product.id)}
                >
                  <Ionicons name="add" size={28} color="#4a1942" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
