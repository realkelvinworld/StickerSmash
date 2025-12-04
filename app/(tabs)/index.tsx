import { Buttons, Emoji } from "@/components";
import ImageViewer from "@/components/image-viewer";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

// Place holder
const PlaceHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
  /**
   * state
   */
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickEmoji, setPickEmoji] = useState<ImageSourcePropType | undefined>(
    undefined
  );

  /**
   * Function to pick image from device gallery
   */
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };

  /**
   * Functions for buttons
   */
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageViewer
        imgSource={selectedImage ? { uri: selectedImage } : PlaceHolderImage}
      />
      {pickEmoji && (
        <Emoji.EmojiSticker imageSize={40} stickerSource={pickEmoji} />
      )}

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <Buttons.IconButton
              icon="refresh"
              label="Reset"
              onPress={onReset}
            />
            <Buttons.CircleButton onPress={onAddSticker} />
            <Buttons.IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Buttons.Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Buttons.Button
            label="Upload this photo"
            theme="secondary"
            onPress={() => {
              setShowAppOptions(true);
            }}
          />
        </View>
      )}

      <Emoji.EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <Emoji.EmojiList onCloseModal={onModalClose} onSelect={setPickEmoji} />
      </Emoji.EmojiPicker>
    </View>
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
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 20,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
    marginTop: 10,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
