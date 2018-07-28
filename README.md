### About
This project is intended to demonstrated a simple private blockchain creation using models and helpers. It is ready to scale and build features on top of it

### Requirements
* [Node.js](https://nodejs.org)
* [NPM](https://www.npmjs.com)
* [LevelDB](https://github.com/google/leveldb)


## Usage

### Installation

## Run App

```sh
git clone https://github.com/joseasousa/PrivateBlockchain.git
cd PrivateBlockchain
npm install
```

This installs the dependencies of the project.

### Start API server
```sh
npm start
```
This starts the API server, listening on port 3000 of localhost.

### Endpoints

The endpoints implemented are:
```
POST /block
```
Sample input:
```json
{
  "data": "String Test"
}
```

Sample output:
```json
{
  "address": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ",
  "requestTimeStamp": "1532296090",
  "message": "142BDCeSGbXjWKaAnYXbMpZ6sbrSAo3DpZ:1532296090:starRegistry",
  "validationWindow": 300
}
```

