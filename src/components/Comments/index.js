import React, { Fragment, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from "react-native";

import styles from "./styles";

const Comments = ({ comments }) => {
  const [commentsArray, setCommentsArray] = useState(comments);

  const addComment = () => {
    console.warn(inputField);
    campoInput.clear();

    const newComment = {
      date: Date.now(),
      text: inputField,
      userName: "Bugan",
    };

    setCommentsArray([...commentsArray, newComment]);
  };

  let inputField = "";
  let campoInput;

  return (
    <>
      <FlatList
        data={commentsArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.sameLine}>
            <Text>{item.userName} </Text>
            <Text> {item.text}</Text>
          </View>
        )}
      />
      <View style={styles.sameLine}>
        <TextInput
          ref={(textInput) => (campoInput = textInput)}
          onChangeText={(text) => (inputField = text)}
          placeholder={"Deixe seu comentário..."}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={addComment}>
          <Image
            style={styles.imgSend}
            source={require("../../../assets/images/send.png")}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comments;
