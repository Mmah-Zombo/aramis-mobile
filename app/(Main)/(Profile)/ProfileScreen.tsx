import BottomNav from "@/components/BottomNav";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MenuItemProps {
  icon: string;
  label: string;
  onPress: () => void;
  iconColor?: string;
}

const MenuItem = ({
  icon,
  label,
  onPress,
  iconColor = "#ff6b9d",
}: MenuItemProps) => (
  <TouchableOpacity
    className="flex-row items-center bg-gray-50 rounded-2xl p-5 mb-3"
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View
      className={`w-10 h-10 rounded-full items-center justify-center mr-4`}
      style={{ backgroundColor: iconColor + "20" }}
    >
      <Ionicons name={icon as any} size={20} color={iconColor} />
    </View>
    <Text className="flex-1 text-gray-900 text-lg font-medium">{label}</Text>
    <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
  </TouchableOpacity>
);

interface ProfileScreenProps {
  navigation?: any;
  userName?: string;
  userEmail?: string;
}

export default function ProfileScreen({
  navigation,
  userName = "Edward Bob",
  userEmail = "edwardbobkamara@gmail.com",
}: ProfileScreenProps) {
    const router = useRouter();
  const handleLogout = () => {
    console.log("Logout pressed");
  };

  const handleEditProfile = () => {
    router.push('/(Main)/(Profile)/EditProfileScreen');
  };

  const handleAccountSecurity = () => {
    router.push('/(Main)/(Profile)/AccountSecurityScreen')
  };

  const handleGeneralSettings = () => {
    router.push('/(Main)/(Profile)/GeneralSettingsScreen')
  };

  const handleHelpCentre = () => {
    router.push('/(Main)/(Profile)/LanguageScreen')
  };

  const handleHomePress = () => {
    navigation?.navigate("Home");
  };

  const handlePairPress = () => {
    navigation?.navigate("Pair");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <Text className="text-3xl font-bold text-gray-900">Profile</Text>
        <TouchableOpacity
          className="bg-purple-50 rounded-xl px-6 py-3"
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Text className="text-[#c2185b] font-semibold text-base">Logout</Text>
        </TouchableOpacity>
      </View>

     <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* Profile Section */}
        <View className="bg-gray-50 mx-6 rounded-3xl p-8 items-center mt-4 mb-6">
            {/* Avatar with Gradient */}
            <View className="w-44 h-44 rounded-full overflow-hidden items-center justify-center mb-6">
            <LinearGradient
                colors={["#ff6b9d", "#e8576b", "#c2185b"]}
                className="w-full h-full items-center justify-center"
            >
                <Ionicons name="person" size={72} color="#ffffff" />
            </LinearGradient>
            </View>

            {/* User Info */}
            <Text className="text-gray-900 text-2xl font-bold mb-2">
            {userName}
            </Text>
            <Text className="text-gray-500 text-base">{userEmail}</Text>
        </View>

        {/* Menu Items */}
        <View className="px-6">
            <MenuItem
            icon="person-outline"
            label="Edit Profile"
            onPress={handleEditProfile}
            iconColor="#ff6b9d"
            />
            <MenuItem
            icon="shield-checkmark-outline"
            label="Account Security"
            onPress={handleAccountSecurity}
            iconColor="#ff6b9d"
            />
            <MenuItem
            icon="settings-outline"
            label="General Settings"
            onPress={handleGeneralSettings}
            iconColor="#ff8a95"
            />
            <MenuItem
            icon="help-circle-outline"
            label="Help Centre"
            onPress={handleHelpCentre}
            iconColor="#ff6b9d"
            />
        </View>

        {/* App Version */}
        <View className="items-center mt-6">
            <Text className="text-gray-400 text-sm">App version 1.0.0.1</Text>
        </View>

        {/* Spacer */}
        <View className="flex-1" />
     </ScrollView>


      <BottomNav activeTab="profile"></BottomNav>
    </SafeAreaView>
  );
}
