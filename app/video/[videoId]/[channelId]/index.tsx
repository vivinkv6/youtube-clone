import Card from "@/components/home/Card";
import Channel from "@/components/home/Channel";
import YoutubeVideo from "@/components/home/YoutubeVideo";
import useFetch from "@/hooks/useFetch";
import { useCategoryStore } from "@/store/categoryStore";
import { useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { Text, View } from "react-native";

function WatchVideo() {

  const {videoId,channelId}=useLocalSearchParams();
  const categoryId=useCategoryStore(state=>state.categoryId)
  console.log({videoId,channelId});
  
  const {data:video,error,loading}=useFetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&regionCode=IN&videoCategoryId=10&key=${process.env.EXPO_PUBLIC_API_KEY}`)
  const {data:channel}=useFetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&regionCode=IN&videoCategoryId=10&key=${process.env.EXPO_PUBLIC_API_KEY}`)
  const {data:similar}=useFetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${process.env.EXPO_PUBLIC_API_KEY}`)
 console.log("similar");
 
  console.log(similar);
 
 
  return (
    <View>
      {video &&  <YoutubeVideo uri={video?.items[0]?.snippet?.thumbnails?.high?.url} title={video?.items[0]?.snippet?.title}/>}
      {channel && <Channel uri={channel?.items[0]?.snippet?.thumbnails?.high?.url} title={channel?.items[0]?.snippet?.title}/>}
      {similar && <Card data={similar} loading={loading} error={error}/>}
    </View>
  );
}

export default WatchVideo;
