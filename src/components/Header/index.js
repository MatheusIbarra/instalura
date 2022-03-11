import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

// import { Container } from './styles';

export const Header = ({ userName, urlImage }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.userPhoto} source={{ uri: urlImage }}  />
      <Text>{userName ?? ""}</Text>
    </View>
  );
};
