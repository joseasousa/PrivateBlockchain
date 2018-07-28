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
    "success": true,
    "data": {
        "hash": "66f9a59eba778febd1f1d3aec57992b508644255ca0e670bc6ebf1c13dfbd112",
        "height": 2,
        "body": "String Test",
        "time": "1532806713",
        "previousBlockHash": "09ac1f5139b0fa411544194180e18c8e1dafb329cf6701d9340c49dd22510f57"
    }
}
```

```
GET /block/{height}
```


Sample output:
```json
{
    "success": true,
    "data": {
        "hash": "66f9a59eba778febd1f1d3aec57992b508644255ca0e670bc6ebf1c13dfbd112",
        "height": 2,
        "body": "String Test",
        "time": "1532806713",
        "previousBlockHash": "09ac1f5139b0fa411544194180e18c8e1dafb329cf6701d9340c49dd22510f57"
    }
}
```