import { Ionicons } from "@expo/vector-icons";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingItemProps {
  label: string;
  value?: string;
  onPress: () => void;
  showChevron?: boolean;
}

const SettingItem = ({
  label,
  value,
  onPress,
  showChevron = true,
}: SettingItemProps) => (
  <TouchableOpacity
    className="bg-white rounded-2xl p-5 mb-4 flex-row items-center justify-between"
    onPress={onPress}
  >
    <Text className="text-gray-900 text-lg">{label}</Text>
    <View className="flex-row items-center">
      {value && <Text className="text-[#ff8a95] text-lg mr-2">{value}</Text>}
      {showChevron && (
        <Ionicons name="chevron-forward" size={24} color="#9ca3af" />
      )}
    </View>
  </TouchableOpacity>
);

export default function GeneralSettingsScreen() {
  const handleGoBack = () => {
    console.log("Navigate back");
  };

  const handleTheme = () => {
    console.log("Navigate to Theme settings");
  };

  const handleLanguage = () => {
    console.log("Navigate to Language settings");
  };

  const handleNotification = () => {
    console.log("Navigate to Notification settings");
  };

  const handleAbout = () => {
    console.log("Navigate to About");
  };

  const handleTermsOfUse = () => {
    console.log("Navigate to Terms of Use");
  };

  const handlePrivacyPolicy = () => {
    console.log("Navigate to Privacy Policy");
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
          General Settings
        </Text>
      </View>

      <ScrollView className="flex-1 px-6 pt-6">
        <SettingItem label="Theme" value="Light Mode" onPress={handleTheme} />
        <SettingItem
          label="Language Setting"
          value="English"
          onPress={handleLanguage}
        />
        <SettingItem
          label="Notification Setting"
          onPress={handleNotification}
        />
        <SettingItem
          label="About EVNC"
          value="Version 1.0.0.1"
          onPress={handleAbout}
        />
        <SettingItem label="Term of Use" onPress={handleTermsOfUse} />
        <SettingItem label="Privacy Policy" onPress={handlePrivacyPolicy} />
      </ScrollView>
    </SafeAreaView>
  );
}
