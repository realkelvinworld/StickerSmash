import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Oops!! Page not found</Text>
        <Link style={styles.button} href="/">
          Go back Home{" "}
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
