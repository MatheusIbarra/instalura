import React, { Fragment, useState, useEffect } from "react";
import { ScrollView, FlatList } from "react-native";
import { readPhotos } from "./src/api/feed";
import Comments from "./src/components/Comments";

import { Header } from "./src/components/Header";
import { Photo } from "./src/components/Photo";

export default function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    readPhotos(setPhotos);
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment>
            <Header userName={item.userName} urlImage={item.userURL} />
            <Photo photoUrl={item.url} description={item.description} totalLikes={item.likes} />
            <Comments comments={item.comentarios}/>
          </Fragment>
        )}
      />
    </ScrollView>
  );
}
