import useFetch from "@/hooks/useFetch";
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import { useCategoryStore } from "@/store/categoryStore";

function Card() {
  const categoryId = useCategoryStore((state) => state.categoryId);
  const { data, loading, error } = useFetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${process.env.EXPO_PUBLIC_API_KEY}`
  );
  console.log("cards");

  console.log(data);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  return (
    <FlatList
      data={data?.items}
      renderItem={({ item }) => {
        return(
        <View style={{marginTop:20}}>
           
          <Image
            source={{ uri: item.snippet.thumbnails.standard.url }}
            style={{
              width: '100%',
              height: 220
            }}
          />
          <View style={{padding:10}}>
          <Text style={{fontWeight:'700',fontSize:18}}>{item.snippet.title}</Text>
        <Text style={{fontSize:15,fontWeight:'500',color:'gray'}}>{item.snippet.channelTitle}</Text>
        </View>
        </View>
        )
      }}
      showsVerticalScrollIndicator={true}
    />
  );
}

const styles = StyleSheet.create({});

export default Card;
