import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { generateRandomColor } from "../../utils/colorsUtils";
import { styles } from "./GradientScreen.styles";

const GradientScreen = () => {
  const [gradientColors, setGradientColors] = useState<
    [string, string, ...string[]]
  >([generateRandomColor(), generateRandomColor()]);

  const handlePress = () =>
    setGradientColors([generateRandomColor(), generateRandomColor()]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <LinearGradient colors={gradientColors} style={styles.gradient}>
          <Text style={styles.text}>Hello there</Text>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GradientScreen;
