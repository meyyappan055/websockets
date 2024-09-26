# CLI Chat Application with WebSocket

![WebSocket Chat](https://img.shields.io/badge/WebSocket-Chat-orange)
![Node.js](https://img.shields.io/badge/Node.js-brightgreen)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Why I Chose `ws`](#why-i-chose-ws)

## Overview
Real-time communication is essential in the digital era. This CLI chat application utilizes WebSockets to enable seamless and interactive conversations among users in a command-line interface. 

## Features
- **Real-time Messaging**: Send and receive messages instantly with WebSocket technology.
- **User Registration**: Users can set their names and join the chat.
- **Private Messaging**: Messages can be sent to specific users, maintaining privacy.
- **Error Handling**: Comprehensive error handling for connection issues and invalid user actions.
- **Timestamping**: Messages include a timestamp for better context.
- **User Notifications**: Receive notifications for user join/leave actions.

## Technology Stack
- **Backend**: Node.js with the `ws` library for WebSocket implementation.
- **Frontend**: Command Line Interface (CLI) using Node.js `readline` module.
- **Architecture**: MVC (Model-View-Controller) pattern for code organization.

## Why I Chose `ws`
The `ws` library was selected for this chat application due to its numerous advantages:

- **Performance**: `ws` is known for its high performance and low latency, making it ideal for real-time applications where speed is crucial.
- **Lightweight**: With minimal overhead, `ws` allows for efficient handling of WebSocket connections, which is especially beneficial for applications with many concurrent users.
- **Simplicity**: This is simple and easy to use, enabling quick integration and reducing the complexity of setting up WebSocket communication.
- **Active Community**: As a widely used library, `ws` has a robust community and extensive documentation, providing ample support and resources for troubleshooting and development.
- **Compatibility**: It works seamlessly with Node.js, ensuring smooth integration into the application’s backend.

Choosing `ws` for this project ensures that users enjoy a fast and responsive chat experience while keeping the implementation simple and maintainable.
