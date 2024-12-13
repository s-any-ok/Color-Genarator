import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { generateRandomColor } from "../../utils/colorsUtils";
import { styles } from "./ColorsScreen.styles";

const ColorsScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    generateRandomColor(),
  );

  const handlePress = () => setBackgroundColor(generateRandomColor());

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.text}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ColorsScreen;
