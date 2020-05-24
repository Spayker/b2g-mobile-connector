import React from 'react'
import globals from "../globals.jsx";
import {AsyncStorage} from 'react-native';

export default class AccountRequests extends React.Component {

    signUp = (name, email, password) => {
        console.debug('Account signUp: ' + email + ' ' + password)
        return fetch(globals.GE_SERVER_CREATE_NEW_ACCOUNT_URL_ADDRESS, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                        'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:	            -1,
                name:           name,
                email:          email,
                createdDate:	null,
                modifiedDate:	null,
                age:			35,
                gender:		    null,
                weight:		    75,
                height:		    175,
                password:       password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.debug('account signUp: ' + responseJson)
            this.getAccessToken(email, password)
        })
        .catch((error) => { console.error(error) });
    }

    getAccessToken = (email, password) => {
        console.debug('Account getAccessToken: ' + email + ' ' + password)
        var details = {
            "scope": "ui",
            "username": email,
            "password": password,
            "grant_type": "client_credentials"
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        return fetch(globals.GE_SERVER_GET_ACCOUNT_TOKEN_URL_ADDRESS, {
            method: 'POST',
            headers: {
                Authorization: "Basic YnJvd3Nlcjo=",
                Accept: "*/*", 
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: formBody
        })
        .then((response) => response.json())
        .then((responseJson) => { 
            console.debug('account getAccessToken: ' + responseJson)
            this.storeData(responseJson.access_token, email) 
        })
        .catch((error) => { console.error(error) });
    }

    storeData = async (userToken, email) => {
        console.debug('account storeData: userToken ' + userToken)
        console.debug('account storeData: email ' + email)
        try {
            let multiDataSet = [
                [globals.ACCESS_TOKEN_KEY, userToken],
                [globals.USERNAME_TOKEN_KEY, email],
            ];
            await AsyncStorage.multiSet(multiDataSet);
        } catch (error) { console.debug('couldn\'t save user access token to storage because of: ' + error) }
    };
}