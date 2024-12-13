import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ColorsScreen from "../screens/ColorsScreen/ColorsScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import GradientScreen from "../screens/GradientScreen/GradientScreen";
import { SCREEN } from "../constants/screens";
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            if (route.name === SCREEN.COLORS) {
              iconName = focused ? "color-palette" : "color-palette-outline";
            } else if (route.name === SCREEN.GRADIENTS) {
              iconName = focused ? "brush" : "brush-outline";
            } else {
              iconName = "alert";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.purpleHeart,
          tabBarInactiveTintColor: COLORS.gray,
          tabBarStyle: { backgroundColor: COLORS.white, borderTopWidth: 0 },
          headerShown: false,
        })}
      >
        <Tab.Screen name={SCREEN.COLORS} component={ColorsScreen} />
        <Tab.Screen name={SCREEN.GRADIENTS} component={GradientScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
