// import { Ionicons } from "@expo/vector-icons";
// import { styled } from "nativewind";
// import React, { useRef, useState } from "react";
// import {
//     KeyboardAvoidingView,
//     Platform,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledTouchableOpacity = styled(TouchableOpacity);
// const StyledScrollView = styled(ScrollView);
// const StyledSafeAreaView = styled(SafeAreaView);
// const StyledTextInput = styled(TextInput);
// const StyledKeyboardAvoidingView = styled(KeyboardAvoidingView);

// interface Message {
//   id: string;
//   text: string;
//   sender: "user" | "ai";
//   timestamp: Date;
// }

// export default function AIChatScreen() {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "user",
//       timestamp: new Date(),
//     },
//     {
//       id: "2",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "ai",
//       timestamp: new Date(),
//     },
//     {
//       id: "3",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "user",
//       timestamp: new Date(),
//     },
//     {
//       id: "4",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "ai",
//       timestamp: new Date(),
//     },
//     {
//       id: "5",
//       text: "Rorem adipiscing elit.",
//       sender: "ai",
//       timestamp: new Date(),
//     },
//     {
//       id: "6",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "user",
//       timestamp: new Date(),
//     },
//     {
//       id: "7",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "ai",
//       timestamp: new Date(),
//     },
//     {
//       id: "8",
//       text: "Rorem ipsum dolor sit adipiscing elit.",
//       sender: "user",
//       timestamp: new Date(),
//     },
//   ]);

//   const [inputText, setInputText] = useState("");
//   const scrollViewRef = useRef<ScrollView>(null);

//   const handleSend = () => {
//     if (inputText.trim()) {
//       const newMessage: Message = {
//         id: Date.now().toString(),
//         text: inputText.trim(),
//         sender: "user",
//         timestamp: new Date(),
//       };

//       setMessages([...messages, newMessage]);
//       setInputText("");

//       // Simulate AI response
//       setTimeout(() => {
//         const aiResponse: Message = {
//           id: (Date.now() + 1).toString(),
//           text: "Thank you for your message. How can I help you today?",
//           sender: "ai",
//           timestamp: new Date(),
//         };
//         setMessages((prev) => [...prev, aiResponse]);
//       }, 1000);
//     }
//   };

//   const handleEmojiPress = () => {
//     console.log("Open emoji picker");
//   };

//   const handleCameraPress = () => {
//     console.log("Open camera/image picker");
//   };

//   const handleMicPress = () => {
//     console.log("Start voice recording");
//   };

//   return (
//     <StyledSafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="dark-content" />

//       {/* Header */}
//       <StyledView className="flex-row items-center px-6 py-4 border-b border-gray-100">
//         <StyledTouchableOpacity className="mr-4">
//           <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
//         </StyledTouchableOpacity>
//         <StyledView className="flex-row items-center">
//           <StyledText className="text-3xl font-bold text-gray-900">
//             Amaris
//           </StyledText>
//           <StyledText className="text-3xl font-bold text-[#4a1942]">
//             AI
//           </StyledText>
//         </StyledView>
//       </StyledView>

//       <StyledKeyboardAvoidingView
//         className="flex-1"
//         behavior={Platform.OS === "ios" ? "padding" : "height"}
//         keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
//       >
//         {/* Chat Messages */}
//         <StyledScrollView
//           ref={scrollViewRef}
//           className="flex-1 px-6 py-4"
//           showsVerticalScrollIndicator={false}
//           onContentSizeChange={() =>
//             scrollViewRef.current?.scrollToEnd({ animated: true })
//           }
//         >
//           {messages.map((message) => (
//             <StyledView
//               key={message.id}
//               className={`mb-4 ${
//                 message.sender === "user" ? "items-start" : "items-end"
//               }`}
//             >
//               <StyledView
//                 className={`max-w-[75%] px-5 py-4 rounded-3xl ${
//                   message.sender === "user"
//                     ? "bg-gray-100 rounded-tl-md"
//                     : "bg-[#4a1942] rounded-tr-md"
//                 }`}
//               >
//                 <StyledText
//                   className={`text-base leading-6 ${
//                     message.sender === "user" ? "text-gray-900" : "text-white"
//                   }`}
//                 >
//                   {message.text}
//                 </StyledText>
//               </StyledView>
//             </StyledView>
//           ))}
//         </StyledScrollView>

//         {/* Input Area */}
//         <StyledView className="px-6 py-4 border-t border-gray-100">
//           <StyledView className="flex-row items-center bg-gray-100 rounded-full px-4 py-3">
//             {/* Emoji Button */}
//             <StyledTouchableOpacity className="mr-3" onPress={handleEmojiPress}>
//               <Ionicons name="happy-outline" size={24} color="#9ca3af" />
//             </StyledTouchableOpacity>

//             {/* Text Input */}
//             <StyledTextInput
//               className="flex-1 text-base text-gray-900"
//               placeholder="Ask AI"
//               placeholderTextColor="#9ca3af"
//               value={inputText}
//               onChangeText={setInputText}
//               multiline
//               maxLength={500}
//             />

//             {/* Camera Button */}
//             <StyledTouchableOpacity
//               className="ml-3"
//               onPress={handleCameraPress}
//             >
//               <Ionicons name="camera-outline" size={24} color="#9ca3af" />
//             </StyledTouchableOpacity>

//             {/* Mic Button */}
//             <StyledTouchableOpacity
//               className="ml-3 w-11 h-11 rounded-full border-2 border-[#ff8a95] items-center justify-center"
//               onPress={handleMicPress}
//             >
//               <Ionicons name="mic-outline" size={20} color="#ff8a95" />
//             </StyledTouchableOpacity>

//             {/* Send Button */}
//             <StyledTouchableOpacity
//               className="ml-3 w-11 h-11 bg-[#4a1942] rounded-full items-center justify-center"
//               onPress={handleSend}
//             >
//               <Ionicons name="send" size={18} color="#ffffff" />
//             </StyledTouchableOpacity>
//           </StyledView>
//         </StyledView>
//       </StyledKeyboardAvoidingView>
//     </StyledSafeAreaView>
//   );
// }
