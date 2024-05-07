import React from 'react'
import { View,StyleSheet, Image, Text } from 'react-native'

type ChannelProp={
    uri:string,
    title:string
}
function Channel({uri,title}:ChannelProp) {
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:10,marginTop:10}}>
      <Image source={{
        uri:uri
      }}
      style={{width:50,height:50,borderRadius:50}}
      />
      <Text style={{fontWeight:'600',fontSize:20,color:'black'}}>{title.length >20 ? title.slice(0,20)+'...':title}</Text>
      <Text style={{fontWeight:'600',fontSize:15,color:'white',backgroundColor:'black',paddingHorizontal:15,paddingVertical:10,borderRadius:50}}>Subscribe</Text>
    </View>
  )
}


const styles=StyleSheet.create({
    channelContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default Channel
