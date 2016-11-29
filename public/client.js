/**
 * Created by thibault on 15/11/16.
 */

//var mqtt = require('mqtt')
//var ws = require('ws')

var client = new Paho.MQTT.Client(location.hostname, Number(location.port), "clientId");
//var client  = mqtt.connect('mqtt://172.16.20.127:1883')
var save = [];

client.on('connect', function () {
    client.subscribe('value/#')
})

var ws = new WebSocket("ws://172.16.20.127:8080");

ws.onopen = function(event) {
    console.log("We are connected.");
};

ws.onmessage = function(event) {

    save.push(new Sensor(
        {id : event.destinationName.substring(6),
            name : event.destinationName.substring(6),
            type : JSON.parse(event.payloadString).type,
            data : {
                values : [JSON.parse(event.payloadString).value],
                labels :[new Date().toString()],
            }
        }))


    line = document.createElement('li');
    line.textContent = "ID :"+event.destinationName.substring(6)+" type :" +JSON.parse(event.payloadString).type+" value :" +JSON.parse(event.payloadString).value;
    messages.appendChild(line);
    console.log(event.data);

};