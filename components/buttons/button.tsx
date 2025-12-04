import { FontAwesome } from "@expo/vector-icons";

import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
  theme?: "primary" | "secondary";
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  const current = themeStyles[theme || "primary"];

  return (
    <View style={[styles.buttonContainer, current.container]}>
      <Pressable style={[styles.button, current.button]} onPress={onPress}>
        <FontAwesome
          name={current.icon as any}
          size={18}
          color={current.buttonIcon.color as any}
          style={current.buttonIcon as any}
        />

        <Text style={[styles.buttonLabel, { color: current.label.color }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});

// Object for button styles based on theme

const themeStyles = {
  primary: {
    container: {
      borderColor: "#ffd33d",
      borderWidth: 4,
      borderRadius: 18,
      marginVertical: 4,
    },
    label: { color: "#25292e" },
    button: { backgroundColor: "#ffffff" },

    icon: "picture-o",
    buttonIcon: {
      paddingRight: 8,
      color: "#25292e",
      paddingHorizontal: 8,
    },
  },

  secondary: {
    container: {
      borderColor: "#ffd33d",
      borderWidth: 4,
      borderRadius: 18,
      marginVertical: 4,
    },
    label: { color: "#f8f8f8" },
    button: { backgroundColor: "#2d2c2c" },

    icon: "cloud-upload",
    buttonIcon: {
      paddingRight: 8,
      color: "#ffffff",
      paddingHorizontal: 8,
    },
  },
};
