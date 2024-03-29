import React from "react";
import { View, Text, Image, Dimensions,TouchableOpacity } from "react-native";
import { Product } from "../../models";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartActions";


type CardItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};
const { width, height } = Dimensions.get("window");
function index({ product, quantity,removeFromCart }: CardItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          borderBottomWidth: 0.4,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomColor: "lightgray",
          height: height * 0.13,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: width * 0.04,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderWidth: 0.45,
              borderColor: "lightgray",
              borderRadius: 8,
              padding: 4,
            }}
          >
            <Image
              style={{ height: height * 0.09, width: height * 0.09 }}
              source={{ uri: product.image }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.46,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>

        <View
          style={{
            shadowOpacity: 0.4,
            shadowColor: "gray",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: width * 0.21,
            borderColor: "lightgray",
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity 
          onPress={() => removeFromCart(product)}
          style={{ flex: 1, alignItems: "center" }}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#5D3EBD",
              height: height * 0.037,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 12 }}>
              {quantity}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(index);
