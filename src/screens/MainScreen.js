import React, {Component} from "react";
import { StyleSheet, ScrollView } from "react-native";
import InfoButton from "../components/InfoButton";
import {  AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';


export default class MainScreen extends Component {
  constructor(props){
    super(props);

    this.bannerAdId = "ca-app-pub-5730041151145223/7722161208";
    
  }

  render(){
    return (
    <ScrollView style={styles.Back}>
      <AdMobBanner
        bannerSize="smartBanner"
        adUnitID="ca-app-pub-5730041151145223/7722161208" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds={false} // true or false
        onDidFailToReceiveAdWithError={(e) => console.log(e)}
      />
      <InfoButton ButtonName = "ციტატები" InfoName="citatebi" code="4feOIo5b1LUF6E2cOeCV" color="#335c67" navigation = {this.props.navigation}/>
      <InfoButton ButtonName="გრამატიკა და მართლწერა" InfoName='gramatika' code="HhBpQtwcBgoZZTP1aKmX" color="#e09f3e" navigation = {this.props.navigation}/>      
      <InfoButton ButtonName="სასარგებლო ფრაზები" InfoName='sasargeblo_frazebi' code="BQcBPeXEz2qEIwkr8oAs" color="#9e2a2b" navigation = {this.props.navigation}/>  
      <InfoButton ButtonName="ზოგადი განათლება" InfoName = 'zogadi_ganatleba' code="HcI6MCvT7FeO8JhCrZpo" color="#c9ada7" navigation = {this.props.navigation}/>   
      <InfoButton ButtonName="დამატებითი ლიტერატურა" InfoName = 'damatebiti_literatura' code="zVEwUufv6bzs6BlPCQaj" color="#1b4332" navigation = {this.props.navigation}/>        
    </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  Back: {
    backgroundColor: "#FFFFFF",
  }
});


