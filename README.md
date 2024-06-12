# VOTProekt

## Assignment

Develop a web service using docker compose, which has a frontend and a backend part with two phases - build and production. The Web service must have authentication and authorization to an OpenID provider, which is in the same infrastructure. Also, it must store user data in a DBMS cluster through a load balancer.

## Project - Solution

A simple mobile app similar to Reddit that allows users to publish posts on whatever topics they wish.

## Project Setup and Instructions

This project involves setting up a backend server, a Keycloak server for authentication, and MySQL database servers, along with running a frontend application using Expo.

### Dependencies

- Docker
- Add `keycloak 127.0.0.1` to **etc/hosts** in order for the backend to work
- Expose port **5000** to the local network in order for the frontend to be able to connect to the backend
- "Expo Go" mobile app ([IOS](https://apps.apple.com/us/app/expo-go/id982107779) / [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&pli=1))
- NodeJS
- Get your server's local IP address

### How to Build and Run

Create a **.env** file in **./backend/** and add field `KEYCLOAK_CLIENT_SECRET` containing your Keycloak client secret.
</br></br>
To build and run the backend, Keycloak server, and database servers, run the following command:

```sh
docker-compose up -d --build
```

</br>

To build and run the frontend **make sure your mobile device is on the same network as the server** and execute:

```sh
cd ./frontend/
npx expo start
```

And then scan the QR code from:

- The "Expo Go" app on **Android**
- The camera on **IOS**
