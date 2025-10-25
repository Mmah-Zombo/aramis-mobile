import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Animated, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

// Custom Badge Component with scalloped edges
const BadgeIcon = () => {
  return (
    <View className="items-center justify-center">
      <Svg width="160" height="160" viewBox="0 0 160 160">
        {/* Scalloped badge shape */}
        <Path
          d="M80 10 C85 10 90 5 95 5 C100 5 105 10 110 10 C115 10 120 5 125 5 C130 5 135 10 140 15 C145 20 150 25 150 30 C150 35 145 40 145 45 C145 50 150 55 150 60 C150 65 145 70 145 75 C145 80 150 85 150 90 C150 95 145 100 145 105 C145 110 150 115 150 120 C150 125 145 130 140 135 C135 140 130 145 125 145 C120 145 115 140 110 140 C105 140 100 145 95 145 C90 145 85 140 80 140 C75 140 70 145 65 145 C60 145 55 140 50 140 C45 140 40 145 35 145 C30 145 25 140 20 135 C15 130 10 125 10 120 C10 115 15 110 15 105 C15 100 10 95 10 90 C10 85 15 80 15 75 C15 70 10 65 10 60 C10 55 15 50 15 45 C15 40 10 35 10 30 C10 25 15 20 20 15 C25 10 30 5 35 5 C40 5 45 10 50 10 C55 10 60 5 65 5 C70 5 75 10 80 10 Z"
          fill="#4ade80"
        />
      </Svg>
      {/* Checkmark icon */}
      <View className="absolute items-center justify-center">
        <Ionicons name="checkmark" size={64} color="#ffffff" />
      </View>
    </View>
  );
};

export default function VerificationSuccessScreen() {
  const scaleAnim = new Animated.Value(0);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animate the badge appearing
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      <View className="flex-1 items-center justify-center px-8">
        {/* Animated Badge Icon */}
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
            marginBottom: 32,
          }}
        >
          <BadgeIcon />
        </Animated.View>

        {/* Success Text */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text className="text-3xl font-bold text-[#1a1a2e] text-center">
            Verification Success
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
