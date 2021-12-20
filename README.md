[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Spayker/h2g-mobile-connector/blob/master/LICENSE)
[![Build Status](https://app.travis-ci.com/Spayker/h2g-mobile-connector.svg?branch=master)](https://travis-ci.com/Spayker/h2g-mobile-connector.svg)

# H2G (Health 2 Game) Mobile Connector

Project stays in the active phaze of development. Android platform was chosen as a main test stand.

## Description
Client concept approximately looks:

![alt text](resources/ux/h2g_activity_list.jpg)
![alt text](resources/ux/h2g_service_list.jpg)

## Architecture

Simplified version of app architecture is shown below. The key difference here is approach to get sensor data.
Instead of smart band cooperation, app takes data from smartphone sensor array by Android sensor framework. </br>

![alt text](resources/arch/H2G_mobile_connector_redesign.jpg)

## Technical Stack
1) Java 11 (since min Android SDK is 28)
2) Android sensor framework

## How To Run
WIP

## Testing
WIP

## License
MIT
