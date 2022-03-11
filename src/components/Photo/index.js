import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Photo({ photoUrl, description, totalLikes }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(totalLikes)
  
    const likePhoto = () => {
        let qnt = likes;
        if(liked){
           qnt--
        }else{
            qnt++
        }
        setLikes(qnt)
        setLiked(!liked)
    }
  return (
    <>
      <Image source={{ uri: photoUrl }} style={styles.image}></Image>
      <Text>{description}</Text>
      <View style={styles.viewLike}>
        <TouchableOpacity onPress={likePhoto}>
          <Image style={styles.like} source={getImgLike(liked)} />
        </TouchableOpacity>
        <Text>{likes}</Text>
      </View>
    </>
  );
}

const getImgLike = (likesQuantity) => {
  if (likesQuantity > 0) {
    return require("../../../assets/images/s2-checked.png");
  } else {
    return require("../../../assets/images/s2.png");
  }
};
