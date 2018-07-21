# Blockchain Data

Blockchain has the potential to change the way that the world approaches data. Develop Blockchain skills by understanding the data model behind Blockchain by developing your own simplified private blockchain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Installing Node and NPM is pretty straightforward using the installer package available from the (Node.js® web site)[https://nodejs.org/en/].

### Configuring your project

- Use NPM to initialize your project and create package.json to store project dependencies.
```
npm init
```
- Install crypto-js with --save flag to save dependency to our package.json file
```
npm install crypto-js --save
```
- Install level with --save flag
```
npm install level --save
```

## Testing

To test code:
1: Open a command prompt or shell terminal after install node.js.
2: Enter a node session, also known as REPL (Read-Evaluate-Print-Loop).
```
node
```
3: Copy and paste your code into your node session
4: Instantiate blockchain with blockchain variable
```
let blockchain = new Blockchain();
```
5: Generate 10 blocks using a for loop
```
for (var i = 0; i <= 10; i++) {
  blockchain.addBlock(new Block("test data "+i));
}
```
6: Validate blockchain
```
blockchain.validateChain();
```
7: Induce errors by changing block data
```
let inducedErrorBlocks = [2,4,7];
for (var i = 0; i < inducedErrorBlocks.length; i++) {
  blockchain.chain[inducedErrorBlocks[i]].data='induced chain error';
}
```
8: Validate blockchain. The chain should now fail with blocks 2,4, and 7.
```
blockchain.validateChain();
```


Envio de projeto
Overview
Keeping the blockchain dataset in an array is expensive to retain in the computer's memory. In addition, inefficient for long term storage.

In the project boilerplate, all data is held within the chain array. Upon restart, the chain array is refreshed. The data stored is at risk of permanent loss. The project application needs to persist the dataset. LevelDB was selected to solve this problem due to it's robustness as a key/value datastore along with it's historical usage with Bitcoin.

A core responsibilities of a blockchain nodes is to validate the blockchain dataset. In this project you will learn to validate the blockchain dataset by converting the current validation functions with chain array to LevelDB.

In the project boilerplate, the array needs to be replaced with LevelDB to persist the data.
Functions that once worked with the array should now work with LevelDB.
At the end of the project you will learn the skills needed to create your own private blockchain ledger, persist data, and validate the blockchain ledger utilizing block hashes.

Project boiler plate
Download project boilerplate

Submission Instructions
Evaluation
Your project will be evaluated by a Udacity reviewer according to the Blockchain Data - Project Rubric. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.

Submission
To successfully complete this project and meet the rubric criteria.

You may submit your project as a archive file in zip format, or, with your github repository.

What’s next?
Once your project is submitted it will be picked up by one of our project reviewers. They will provide detailed feedback based on your submission and get back to you within 24 hours. Once your feedback is complete, you will receive an email with details about your project review.

Material de apoio
 Project 2