import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  ScrollView
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { Header } from "react-native-elements";
import Swiper from "react-native-swiper";

import Dress1 from "../../assets/dresses/dress1.jpg";
import Dress2 from "../../assets/dresses/dress2.jpg";
import Blazzer1 from "../../assets/blazzers/blazzer1.jpg";
import Blazzer2 from "../../assets/blazzers/blazzer3.jpg";
import Mobile from "../../assets/mobiles/mobile1.jpg";
import Laptop from "../../assets/laptops/laptop1.jpg";

const { width } = Dimensions.get("window");
const height = width * 0.5;

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          placement="left"
          containerStyle={{
            backgroundColor: "#4169E1"
          }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          rightComponent={{ icon: "add_shopping_cart", color: "#fff" }}
          centerComponent={{
            text: "Shop Home",
            style: { fontSize: 18, fontWeight: "bold", color: "#fff" }
          }}
        />
        <ScrollView style={{ backgroundColor: "#c1c1c1" }}>
          <ScrollView
            // style={{ flex: 1, width, height: 120 }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={require("../../assets/wide1.jpg")}
            />
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={require("../../assets/wide2.jpg")}
            />
          </ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              flexWrap: "wrap",
              borderBottomWidth: 1,
              borderBottomColor: "#C3C1C1",
              backgroundColor: "#fff"
            }}
          >
            <View style={{ alignItems: "center", padding: 5 }}>
              <Ionicons name="ios-send" color="orange" size={40} />
              <Text style={{ fontSize: 12, fontWeight: "300" }}>
                Send Money
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Ionicons name="ios-qr-scanner" color="orange" size={40} />
              <Text style={{ fontSize: 12, fontWeight: "300" }}>Scan</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <MaterialIcons name="receipt" color="orange" size={40} />
              <Text style={{ fontSize: 12, fontWeight: "300" }}>
                Pay Bill's
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Ionicons name="md-settings" color="orange" size={40} />
              <Text style={{ fontSize: 12, fontWeight: "300" }}>Offer's</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Ionicons name="ios-more" color="orange" size={40} />
              <Text style={{ fontSize: 12, fontWeight: "300" }}>More</Text>
            </View>
          </View>
          <View style={styles.productImageContainer}>
            <View>
              <Text
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  fontSize: 16,
                  alignItems: "center",
                  marginVertical: 5,
                  marginLeft: 8
                }}
              >
                Related to items you've viewed
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                borderBottomWidth: 1,
                borderBottomColor: "#c1c1c1"
              }}
            >
              <View
                style={{
                  backgroundColor: "#E2E2E2",
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/dresses/dress1.jpg")}
                />
                <Text>Blue Dress</Text>
                <Text>$ 25.4</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#E2E2E2",
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/dresses/dress2.jpg")}
                />
                <Text>Red Dress</Text>
                <Text>$ 20.4</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#E2E2E2",
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/blazzers/blazzer1.jpg")}
                />
                <Text>Mens casoule Blazzer</Text>
                <Text>$ 125.44</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#E2E2E2",
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/blazzers/blazzer2.jpg")}
                />
                <Text>Mens Slim fit Blazzer</Text>
                <Text>$ 135.94</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 8,
                justifyContent: "space-between",
                width: width - 10
              }}
            >
              <Text style={{ fontSize: 16, color: "lightblue" }}>See more</Text>
              <AntDesign name="right" size={16} color="lightblue" />
            </View>
          </View>
          <View style={styles.productImageContainer}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  alignItems: "center",
                  marginVertical: 5,
                  marginLeft: 8
                }}
              >
                Amazon Pantry Up to 50% off + Extra benefits
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                borderBottomWidth: 1,
                borderBottomColor: "#c1c1c1",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4,
                  alignContent: "center"
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/dresses/dress2.jpg")}
                />
                <Text>Bestsellers from our top category</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  width: width / 2 - 2,
                  paddingHorizontal: 4,
                  marginBottom: 4
                }}
              >
                <Image
                  style={styles.productImage}
                  source={require("../../assets/blazzers/blazzer1.jpg")}
                />
                <Text>Save more with coupons</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginVertical: 8,
                justifyContent: "space-between",
                width: width - 10
              }}
            >
              <Text style={{ fontSize: 16, color: "lightblue" }}>See more</Text>
              <AntDesign name="right" size={16} color="lightblue" />
            </View>
          </View>
          <View style={{ flex: 1, height: 150 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productImageContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 3
  },
  scrollContainer: {
    height
  },
  image: {
    height: 120,
    width
  },
  productImage: {
    height: 180,
    width: 130
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  }
});