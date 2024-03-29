import React from 'react'
import { View,Text, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { useState } from 'react'
import { Category } from '../../models'

const CategoryBox = ({item,active}:{item:Category,active:Category} ) => {
    return (
        <View style={[{paddingHorizontal:9,flexDirection:"row",alignItems:"center"},item.name == active.name && {borderBottomColor:"#FFD00C",borderBottomWidth:2.5}]}>
            <Text style={{fontSize:14,color:"white",fontWeight:"600"}}>{item.name}</Text>
        </View>
    )
}

const {width,height} = Dimensions.get("window")
function index({category}:{category:Category}) {
    const [catefories,setCategories] = useState<Category[]>(categoriesGetir)
  return (
    <ScrollView style={{width:"100%",backgroundColor:"#7849F7",height:height*0.065}} showsHorizontalScrollIndicator={false} bounces={true} horizontal={true}>
    {catefories.map((item) => (
        <CategoryBox key={item.id} item={item} active={category}/>
    ))}   

    </ScrollView>
  )
}

export default index
