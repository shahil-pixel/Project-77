import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class signUpLoginScreen extends React.Component{
    constructor(){
        super();

        this.state={
         emailID:'',
         Password:''
        }
    }

    userSignup=(emailID,Password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailID,Password)
        .then((Response)=>{
            return Alert.alert("User successfully signedUp")
        })
        .catch(function(error){
            var errorCode = error.code
            var errorMessage = error.message 
    
            return Alert.alert(errorMessage)
        })
        }
    
        userLogin=(emailID,Password)=>{
            firebase.auth().signInWithEmailAndPassword(emailID,Password)
            .then((Response)=>{
                return Alert.alert("User Login Successful")
            })
            .catch(function(error){
                var errorCode = error.code
                var errorMessage = error.message 
        
                return Alert.alert(errorMessage)
            })
            }

    render(){
        return(
            <View style={styles.container}>

          <View>
            <Text style={styles.title}>Book Santa</Text>
          </View>

           <View>
             <TextInput
             style={styles.loginBox}
             placeholder='abc@example.com'
             keyboardType='email-address'
             onChangeText={(text)=>{
                 this.setState({emailID:text})
             }}
             />

             <TextInput
             style={styles.loginBox}
             secureTextEntry={true}
             placeholder='Enter Password'
             onChangeText={(text)=>{
                 this.setState({Password:text})
             }}
             />

             <TouchableOpacity
             style={[styles.button,{marginBottom:20,margin:20}]}
             onPress={()=>{
                 this.userLogin(this.state.emailID,this.state.Password)
             }}>
                
                <Text style={styles.buttonText}>Login</Text>

             </TouchableOpacity>

             <TouchableOpacity
             style={styles.button}
             onPress={()=>{
                 this.userSignup(this.state.emailID,this.state.Password)
             }}>
                
                <Text style={styles.buttonText}>Sign up</Text>

             </TouchableOpacity>
           </View>
             
        </View>
    )
  }
} 

const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'cyan'
    },

    title:{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color:'lime'
    },

    loginBox:{
    width:300,
    height:40,
    borderBottomWidth:1.5,
    borderColor:'black',
    margin:10 ,
    paddingLeft:10,
    fontSize:20
    },

    button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:'yellow',
    shadowColor:'black',
    shadowOffset:{
        width:0,
        height:8
      },
    shadowOpacity:0.30,
    shadowRadius:10.32,
    elevation:60
    },

    buttonText:{
    color:'black',
    fontWeight:'200',
    fontSize:20
    }
})