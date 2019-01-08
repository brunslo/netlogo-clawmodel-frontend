# Netlogo CLAW Model Frontend
## Overview
This project is a React application providing the frontend for the [Netlogo CLAW model](https://github.com/JTHooker/CLAW-Model). It is designed specifically to interact with the [netlogo-clawmodel-backend](https://github.com/brunslo/netlogo-clawmodel-backend) project.

## Usage
The project can be built directly using npm (tested against Node 11.5):
```
npm run build
``` 
It can also be built and packaged into a Docker container directly, without any Node-specific dependencies:
```docker
docker build -t netlogo-clawmodel-frontend-<version>
```