import useFetch from "@/hooks/useFetch";
import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useCategoryStore } from "@/store/categoryStore";
import { router } from "expo-router";

type DataProp = {
  data: [] | null;
  loading: boolean;
  error: unknown;
  type?:string
};

function Card({ data, loading, error,type }: DataProp) {

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
        return (
          <>
          {item?.snippet  && 
          <Pressable onPress={() => router.navigate(`/video/${item?.id}/${item?.snippet?.channelId }`)}>
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
          }
          </>
        );
      }}
      showsVerticalScrollIndicator={true}
    />
  );
}

export default Card;
