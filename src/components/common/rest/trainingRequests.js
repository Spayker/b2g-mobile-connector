import React from 'react'
import globals from "../globals.js";

export default class TrainingRequests extends React.Component {

    constructor(props) { super(props) }

    sendTrainingData = (username, userToken) => {
        console.log('Training sendTrainingData: ' + username + ' ' + userToken)
        return fetch(globals.GE_SERVER_POST_NEW_TRAINING_URL_ADDRESS, {
            method: 'POST',
            headers: this.trainingHeaderBuilder(userToken),
            body:    this.trainingJsonBodyBuilder(username, new Date())
        })
        .catch((error) => { console.error(error) });
    }

    trainingHeaderBuilder = (userToken) => {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userToken
        }
    }

    trainingJsonBodyBuilder = (username, date) => {
        return JSON.stringify({
            id:             null,
            deviceName:     'miBand3',
            deviceFirmware: 'v1.0.0',
            createdDate:    null,
            time:           60000,
            type:           'jogging',
            calories:       5000,
            account:        {
                id:	            1,
                name:           'spayker',
                email:          'spykerstar@gmail.com',
                createdDate:	null,
                modifiedDate:	null,
                age:			35,
                gender:		    null,
                weight:		    75,
                height:		    175
            }
        })
    }

}