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
    "hash": "a1e791905c8dca79546f827ee6dd4d7dca0f860638064b1f400aa1be09ba7222",
    "height": 1,
    "time": "1534715355",
    "previousBlockHash": "2a2e16c1acbd7acc7129fc76c68e643fd3907dfc5af1ac344e030c531a498585",
    "body": {
        "address": "1JhzgwjPp8xGswhfNHvoPmiANTe21r6Wq3",
        "star": {
            "dec": "-1° 2' 3.4",
            "ra": "00h 00m 0.0s",
            "story": "53746172206578616d706c652073746f7279",
            "storyDecoded": "Star example story"
        }
    }
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
    "hash": "0c6d3cd60169bdb3c7be5eef54f7fab12899adcd4243ccd05b2cca3e0de2b0c4",
    "height": 1,
    "time": "1541787241",
    "previousBlockHash": "a03ab9a29ab764dbd310c08dd7d4f660d7cc0bddeb5478c60aac15af4b72a7ea"
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