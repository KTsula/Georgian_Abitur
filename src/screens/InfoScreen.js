import React, {useEffect, useState} from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import firebase from 'firebase/app'
import 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import NetInfo from "@react-native-community/netinfo";

NetInfo.addEventListener(networkState => {
    if(!networkState.isConnected){
        alert("You are offline!")
    };
  });



//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyDR_rFE5ZbWDLJKdKEO9QJ2AXsY1PImOLU",
  authDomain: "abiturgeo.firebaseapp.com",
  projectId: "abiturgeo",
  storageBucket: "abiturgeo.appspot.com",
  messagingSenderId: "870746590834",
  appId: "1:870746590834:web:847b83116a8d30f4a4bceb",
  measurementId: "G-KE8THHR6PT"
};
// Initialize Firebase
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}
//

const db = firebase.firestore();

const InfoScreen = ( props ) => {

    
    //NAMING USEFUL VARIABLES TAKEN FROM PROPS
    const HEADER = props.navigation.state.params.Header.InfoName;
    const COLOR = props.navigation.state.params.Color.color;
    const CODE = props.navigation.state.params.Code.code;
    

    const [array, setArray] = useState([]);
    const [page, setPage] = useState(1);
    
    // GETTING ARRAY FROM FIREBASE
    useEffect(() => {
    const COLLECTION = db
      .collection(HEADER)
      .doc(CODE)
      .onSnapshot(documentSnapshot => {
        setArray(documentSnapshot.data()[HEADER]);
    });
}, []);
    
    // br INTO LINE BREAK
    var new_str='';
    if (array[page-1] != undefined){
        var str = array[page-1];
        for (var i = 0 ; i < str.length-1; i++) {
            if( str[i] == "b" && str[i+1]=="r"){
                new_str+= "\n";
                i++;
            }else {new_str+= str[i];}
        }
    }else str = 'Internet Connection Lost';
    
    //NEXT AND BACK BUTTONS
    const Back = () => 
        { 
            if(page==1){ setPage(array.length);}
            else{ setPage(page - 1);}
        }
    const Next = () => 
        { 
            if(page==array.length){ setPage(1);}
            else{ setPage(page + 1);}
        }
    
    
    //UI   
  return (
    <>
        <ScrollView style={styles.container}>
            <View style={styles.mainTextWrapper}>
                <Text style={styles.mainTextStyle}>{new_str}</Text>    
            </View>
        </ScrollView>
        <View style={{
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLOR,
        alignItems:'center'
        }
        }>
            <View>
                <TouchableOpacity 
                    style={styles.next_back}
                    onPress={Back}
                >
                    <Text style={styles.next_back_text}>Back</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>{page} / {array.length}</Text>
            </View>
            
            <View>
                <TouchableOpacity 
                    style={styles.next_back}
                    onPress={Next}
                >
                    <Text style={styles.next_back_text}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
    
  );
};

const styles = StyleSheet.create({
    mainTextStyle : {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 23,
        marginTop: 30,
        padding: 8,
    },
    next_back : {
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        justifyContent: 'center', //Centered vertically
        alignItems: 'center',
        borderRadius: 16,
        margin: 10
    },
    next_back_text: {
        fontSize: 25,
        color: 'white',
        marginHorizontal: 10
    },
    InputPage: {
        borderWidth: 3,
        borderColor: 'red'
    }
});

export default InfoScreen;
