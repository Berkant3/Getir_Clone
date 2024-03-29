import React from "react";
import {TouchableOpacity, View, Text,Dimensions } from "react-native";
import { connect } from "react-redux";
import { Product } from "../../models";
import * as actions from "../../redux/actions/cartActions"

const {width,height} = Dimensions.get("window")

type cartButtonType = {
  addItemToCart : (a:Product) => void;
  item:Product;
}
function index({item,addItemToCart}:cartButtonType) {
  return (
    <TouchableOpacity
    onPress={() => addItemToCart(item)}
      style={{
        justifyContent:"center",
        width: "100%",
        position:"absolute",
        bottom:0,
        height: height*0.11,
        backgroundColor: "white",
      }}
    >
        <View style={{
            alignItems:"center",
            justifyContent:"center",
            marginTop:-10,
            height:height*0.06,
            width: "90%",
            backgroundColor:"#5D39C1",
            marginHorizontal:"5%",
            borderRadius:8,
        }}>

      <Text style={{
        fontWeight:"bold",
        color:"white",
      }}>Sepete Ekle</Text>
        </View>
    </TouchableOpacity>
  );
}
const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart: (product:Product) =>
    dispatch(actions.addToCart({quantity:1,product}))
  }
}

export default connect(null,mapDispatchToProps)(index);
