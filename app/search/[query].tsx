import useFetch from "@/hooks/useFetch";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  Pressable,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import Card from "@/components/home/Card";
import { useSearchStore } from "@/store/searchStore";

function SearchQuery() {
  const { query } = useLocalSearchParams();

  const { data, loading, error } = useFetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=50&q=${query}&regionCode=IN&key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  console.log(data?.items[0]?.snippet.channelId);
  
  // console.log(data.items[0].snippet.channelId);
  
 
  if(loading){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color="black" />
        </View>
      );
  }
  

  return (
    <View style={styles.container}>
      {/* topbar - naviagation, search  */}
      <View style={styles.searchContainer}>
        <Pressable onPress={()=>router.navigate('/search')}>
        <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <TextInput
          placeholder="Search Youtube"
          style={{
            borderRadius: 15,
            backgroundColor: "#e6e8e6",
            width: "60%",
            padding: 5,
          }}
            value={query}
        />
        <MaterialCommunityIcons
          name="microphone"
          size={24}
          style={{ borderRadius: 50, backgroundColor: "#e6e8e6", padding: 5 }}
          color="black"
        />
        <FontAwesome5 name="chromecast" size={24} color="black" />
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>

      {/* {data?.items && 
       (
       <Card data={data} error={error} loading={loading} type="search"/>
      )} */}

<FlatList
      data={data?.items}
      renderItem={({ item }) => {
        return (
          <>
         
          <Pressable onPress={() => router.navigate(`/video/${item.id.videoId}/${item?.snippet?.channelId }`)}>
            <View style={{ marginTop: 20 }}>
              <Image
                source={{
                  uri: item.snippet.thumbnails.standard
                    ? item.snippet.thumbnails.standard.url
                    : item.snippet.thumbnails.high.url,
                }}
                style={{
                  width: "100%",
                  height: 220,
                }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "700", fontSize: 18 }}>
                  {item.snippet.title.length > 80
                    ? item.snippet?.title?.slice(0, 80) + "..."
                    : item.snippet.title}
                </Text>
                <Text
                  style={{ fontSize: 15, fontWeight: "500", color: "gray" }}
                >
                  {item.snippet.channelTitle}
                </Text>
              </View>
            </View>
          </Pressable>
          
          </>
        );
      }}
      showsVerticalScrollIndicator={true}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop:StatusBar.currentHeight
  },
  searchContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    padding: 15,
  },
});

export default SearchQuery;
