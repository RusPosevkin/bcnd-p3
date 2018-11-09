# RESTful Web API with Node.js Framework

## Project Description 
Project is implement RESTful API using a Node.js framework that will interfaces with the private blockchain.

## Node.js framework
This project uses framework [Sails.js](https://sailsjs.com/) to serve the application.

## Prerequisites 
You should have installed [Node.js](https://nodejs.org/en/).
Also Sails.js should be installed:
```bash
npm install sails -g
``` 

## How to start
1. Clone this repository or download as a zip file (in this case you should unpacked it) .

2. Install the dependencies.
```bash
npm install
```
3. Run the project 
```bash
npm run start 
```
4. Service will be available at [http://localhost:8000/](http://localhost:8000/)

## Endpoints Description 

### 1. GET Block Endpoint

#### Method
`GET`

#### Endpoint 
`http://localhost:8000/block`/[height]

#### Request Example
```bash
curl "http://localhost:8000/block/1"
```

#### Response Example
```json
{
    "hash": "c035d3bf898be9d59ff62df2bc8c666fbc1767eaccd9dba767f2562e11ae0330",
    "height": 1,
    "time": "1541788814",
    "previousBlockHash": "2a8488d9c33ba514e07f3b3a3a7decb1c0e4a750f35c4c6237134b6c8f249379",
    "body": "Testing block with test string data"
}
```

If block wasn't found: 
```json
{
    "reason": "Bad request",
    "details": "Block was not found"
}
```

### 2. POST Block Endpoint
#### Method
`POST`

#### Endpoint 
`http://localhost:8000/block`

#### Request Example
```bash
curl -X "POST" "http://localhost:8000/block" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
    "body": "Testing block with test string data"
}'
```

#### Response Example
```json
{
    "hash": "c035d3bf898be9d59ff62df2bc8c666fbc1767eaccd9dba767f2562e11ae0330",
    "height": 1,
    "time": "1541788814",
    "previousBlockHash": "2a8488d9c33ba514e07f3b3a3a7decb1c0e4a750f35c4c6237134b6c8f249379",
    "body": "Testing block with test string data"
}
```

#### Required fields and limitations
`body` should contain non-empty string. 


If there are any errors occured response contains an error reason in `details` field. For example:
```json
{
    "reason": "Bad request",
    "details": "There is no property 'body' in your request or this property is empty"
}
``` 

### Testing Endpoints
For testing endpoints you can also using different GUI tools. For example: [Postman](https://www.getpostman.com).