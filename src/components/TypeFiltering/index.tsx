import React, { useState } from 'react'
import {View,Text, Dimensions, TouchableOpacity} from "react-native"
import { ScrollView } from 'react-native-gesture-handler'


const {height,width} = Dimensions.get("window")

const TypeBox = ({setCat,item,active} :{setCat:any,item:string,active:string}) => {
    return (
        <TouchableOpacity onPress={() => setCat(item)} style={[{flexDirection:"row",alignItems:"center",paddingHorizontal:10,borderRadius:6,height:height*0.044,marginRight:12},item==active ? {backgroundColor:"#5C3EBC"}:{borderColor:"#f0eff7",borderWidth:1.3}]}>
            <Text style={[{fontSize:12,color:"#7849F7",fontWeight:"600"},item==active && {color:"white"}]}>{item}</Text>
        </TouchableOpacity>
    )
}
function index() {

    const [category,setCategory] = useState<String>("Birlikte iyi gider")

  return (
  <ScrollView style={{width:"100%",backgroundColor:"white",height:height*0.07,flexDirection:"row",paddingVertical:height*0.014,paddingHorizontal:12,borderBottomColor:"lightgray",borderBottomWidth:1}}showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
       {["Birlikte iyi gider","Çubuk","Kutu","Külah","Çoklu","Bar"].map((item) => (
        <TypeBox setCat={setCategory} item={item} active={category}/>
       ))}
  </ScrollView>
  )
}

export default index

