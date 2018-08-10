### About
This project is intended to demonstrated a simple private blockchain creation using models and helpers. It is ready to scale and build features on top of it

### Requirements
* [Node.js: 8.11.3 LTS](https://nodejs.org)
* [express](https://www.express.com)
* [LevelDB](http://expressjs.com)
* [Jest](https://jestjs.io)


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
This starts the API server, listening on port 8000 of localhost.

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
GET /chain
```


Sample output:
```json
[
	{
		"hash": "253eea560b7b62557a3f6efdccbba7974b9e4570bad921b3be01a7dff75c6ada",
		"height": 0,
		"body": "First block in the chain - Genesis block",
		"time": "1533917415",
		"previousBlockHash": "",
		"isValid": true
	},
	{
		"hash": "7ce0d8803c51dac90c9fcfd381aa047f27e78afa54842b9a48d8644b5312d40c",
		"height": 1,
		"body": "blocc",
		"time": "1533917569",
		"previousBlockHash": "253eea560b7b62557a3f6efdccbba7974b9e4570bad921b3be01a7dff75c6ada",
		"isValid": true
	}
]
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