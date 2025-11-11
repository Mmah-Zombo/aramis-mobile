import React, { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

interface OptionButtonProps {
  label: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
  color?: string;
}

const OptionButton = ({
  label,
  icon,
  selected,
  onPress,
  color = "bg-pink-100",
}: OptionButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="items-center mx-2 mb-4"
    style={{ width: 60 }}
  >
    <View
      className={`w-14 h-14 rounded-full items-center justify-center mb-2 ${
        selected ? "border-4 border-pink-500" : ""
      } ${color}`}
    >
      <Text className="text-2xl">{icon}</Text>
    </View>
    <Text className="text-xs text-center text-gray-700 leading-tight">
      {label}
    </Text>
  </TouchableOpacity>
);

export default function HealthTrackingScreen() {
  const [weight, setWeight] = useState(48.0);
  const [selectedBloodFlow, setSelectedBloodFlow] = useState<string | null>(
    null
  );
  const [selectedBloodColor, setSelectedBloodColor] = useState<string | null>(
    null
  );
  const [selectedCramps, setSelectedCramps] = useState<string | null>(null);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedBreast, setSelectedBreast] = useState<string | null>(null);
  const [selectedVaginalDischarge, setSelectedVaginalDischarge] = useState<
    string | null
  >(null);
  const [selectedBowel, setSelectedBowel] = useState<string | null>(null);
  const [selectedBody, setSelectedBody] = useState<string | null>(null);

  const bloodFlowOptions = [
    { id: "spotting", label: "Spotting", icon: "Drop" },
    { id: "little", label: "Little", icon: "Drop" },
    { id: "medium", label: "Medium", icon: "Drop" },
    { id: "large", label: "Large", icon: "Drop" },
    { id: "heavy", label: "Heavy", icon: "Drop" },
  ];

  const bloodColorOptions = [
    { id: "light-red", label: "Light Red", icon: "Heart", color: "bg-red-200" },
    {
      id: "bright-red",
      label: "Bright Red",
      icon: "Heart",
      color: "bg-red-400",
    },
    { id: "dark-red", label: "Dark Red", icon: "Heart", color: "bg-red-700" },
    { id: "brown", label: "Brown", icon: "Heart", color: "bg-amber-700" },
    { id: "black", label: "Black", icon: "Heart", color: "bg-gray-900" },
  ];

  const crampsOptions = [
    { id: "no-feelings", label: "No feelings", icon: "Happy" },
    { id: "rarely", label: "Rarely painful", icon: "Slightly smiling" },
    { id: "slightly", label: "Slightly painful", icon: "Neutral" },
    { id: "very", label: "Very painful", icon: "Pained" },
    { id: "extremely", label: "Extremely painful", icon: "Crying" },
  ];

  const moodOptions = [
    { id: "calm", label: "Calm", icon: "Relieved" },
    { id: "happy", label: "Happy", icon: "Grinning" },
    { id: "energetic", label: "Energetic", icon: "Beaming" },
    { id: "tired", label: "Tired", icon: "Sleeping" },
    { id: "irritated", label: "Irritated", icon: "Angry" },
    { id: "sad", label: "Sad", icon: "Crying" },
    { id: "depressed", label: "Depressed", icon: "Pensive" },
    { id: "apathetic", label: "Apathetic", icon: "Expressionless" },
  ];

  const breastOptions = [
    { id: "fine", label: "Everything is fine", icon: "Checkmark" },
    { id: "lump", label: "Lump", icon: "Black circle" },
    { id: "redness", label: "Skin redness", icon: "Red circle" },
    { id: "pain", label: "Pain", icon: "Warning" },
    { id: "discharge", label: "Nipple discharge", icon: "Drop" },
  ];

  const vaginalDischargeOptions = [
    { id: "dry", label: "Dry", icon: "Cactus" },
    { id: "sticky", label: "Sticky", icon: "Drop" },
    { id: "blood-stained", label: "Blood stained", icon: "Blood" },
    { id: "abnormal-odor", label: "Abnormal odor", icon: "Nose" },
    { id: "egg-white", label: "Egg White", icon: "Egg" },
  ];

  const bowelOptions = [
    { id: "indigestion", label: "Indigestion", icon: "Sick" },
    { id: "nausea", label: "Nausea", icon: "Vomiting" },
    { id: "flatulence", label: "Flatulence", icon: "Wind" },
    { id: "diarrhea", label: "Diarrhea", icon: "Toilet" },
    { id: "constipation", label: "Constipation", icon: "No entry" },
  ];

  const bodyOptions = [
    { id: "headache", label: "Headache", icon: "Injured" },
    { id: "dizziness", label: "Dizziness", icon: "Dizzy" },
    { id: "pimples", label: "Pimples", icon: "Red circle" },
    { id: "muscle-pain", label: "Muscle pain", icon: "Flexed biceps" },
    { id: "itching", label: "Itching", icon: "Recycling" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* Header */}
        <View className="px-6 pt-6 pb-4">
          <Text className="text-2xl font-bold text-gray-900">
            How are you feeling today?
          </Text>
        </View>

        {/* Weight Section */}
        <View className="px-6 mb-8">
          <Text className="text-pink-600 text-xl font-bold mb-4">Weight</Text>
          <View className="items-center">
            <Text className="text-5xl font-bold text-gray-900 mb-2">
              {weight.toFixed(1)}
              <Text className="text-2xl text-gray-600"> kg</Text>
            </Text>

            {/* Custom Slider with Ticks */}
            <View className="w-full h-20 relative">
              {/* Tick Marks */}
              <View className="flex-row justify-between absolute top-0 left-0 right-0 px-4">
                {Array.from({ length: 21 }, (_, i) => (
                  <View
                    key={i}
                    className={`w-0.5 ${i % 5 === 0 ? "h-8 bg-pink-400" : "h-4 bg-pink-200"}`}
                  />
                ))}
              </View>

              {/* Labels */}
              <View className="flex-row justify-between absolute bottom-0 left-0 right-0 px-4">
                <Text className="text-gray-500 text-sm">47</Text>
                <Text className="text-gray-500 text-sm">48</Text>
                <Text className="text-gray-500 text-sm">49</Text>
              </View>

              {/* <Slider
                style={{
                  width: "100%",
                  height: 40,
                  position: "absolute",
                  top: 10,
                }}
                minimumValue={47}
                maximumValue={49}
                value={weight}
                onValueChange={setWeight}
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
                thumbTintColor="#ff8a95"
              /> */}
            </View>
          </View>
        </View>

        {/* Menstrual Blood Flow */}
        <View className="px-6 mb-8">
          <Text className="text-pink-600 text-xl font-bold mb-4">
            Menstrual Blood Flow
          </Text>

          <Text className="text-gray-900 font-semibold mb-3">Blood Flow</Text>
          <View className="flex-row flex-wrap justify-start mb-6">
            {bloodFlowOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedBloodFlow === option.id}
                onPress={() => setSelectedBloodFlow(option.id)}
              />
            ))}
          </View>

          <Text className="text-gray-900 font-semibold mb-3">Blood Colour</Text>
          <View className="flex-row flex-wrap justify-start">
            {bloodColorOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedBloodColor === option.id}
                onPress={() => setSelectedBloodColor(option.id)}
                color={option.color}
              />
            ))}
          </View>
        </View>

        {/* Cramps */}
        <View className="px-6 mb-8">
          <Text className="text-gray-900 text-xl font-bold mb-4">
            Menstrual Cramps
          </Text>
          <View className="flex-row flex-wrap justify-start">
            {crampsOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedCramps === option.id}
                onPress={() => setSelectedCramps(option.id)}
              />
            ))}
          </View>
        </View>

        {/* Mood */}
        <View className="px-6 mb-8">
          <Text className="text-pink-600 text-xl font-bold mb-2">Mood</Text>
          <Text className="text-gray-900 font-semibold mb-3">Mood</Text>
          <View className="flex-row flex-wrap justify-start">
            {moodOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedMood === option.id}
                onPress={() => setSelectedMood(option.id)}
              />
            ))}
          </View>
        </View>

        {/* Symptoms */}
        <View className="px-6 mb-8">
          <Text className="text-pink-600 text-xl font-bold mb-4">Symptoms</Text>

          <Text className="text-gray-900 font-semibold mb-3">Breast</Text>
          <View className="flex-row flex-wrap justify-start mb-6">
            {breastOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedBreast === option.id}
                onPress={() => setSelectedBreast(option.id)}
              />
            ))}
          </View>

          <Text className="text-gray-900 font-semibold mb-3">
            Vaginal Discharge
          </Text>
          <View className="flex-row flex-wrap justify-start mb-6">
            {vaginalDischargeOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedVaginalDischarge === option.id}
                onPress={() => setSelectedVaginalDischarge(option.id)}
              />
            ))}
          </View>

          <Text className="text-gray-900 font-semibold mb-3">Bowel</Text>
          <View className="flex-row flex-wrap justify-start mb-6">
            {bowelOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedBowel === option.id}
                onPress={() => setSelectedBowel(option.id)}
              />
            ))}
          </View>

          <Text className="text-gray-900 font-semibold mb-3">Body</Text>
          <View className="flex-row flex-wrap justify-start">
            {bodyOptions.map((option) => (
              <OptionButton
                key={option.id}
                label={option.label}
                icon={option.icon}
                selected={selectedBody === option.id}
                onPress={() => setSelectedBody(option.id)}
              />
            ))}
          </View>
        </View>

        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}
