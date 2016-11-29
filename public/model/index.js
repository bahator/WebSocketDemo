var classname = { TEMPERATURE : {nom : "Temperature", dat : "TimeSerie"},
    HUMIDITY : {nom : "Humidity", dat : "TimeSerie"},
    LIGHT : {nom : "Light", dat : "TimeSerie"},
    SWITCH : {nom : "Switch", dat : "Datum"},
    DOOR : {nom : "Door", dat : "Datum"},
    FAN_SPEED : {nom : "Fan_speed", dat : "TimeSerie"}
};

export function ExceptionUser(message) {
    this.message=message;
    this.name="ExceptionUser";
}

export class Temperature{
    constructor(){}
}

export class Humidity{
    constructor(){}
}

export class Light{
    constructor(){}
}

export class Switch{
    constructor(){}
}

export class Door{
    constructor(){}
}

export class Fan_speed{
    constructor(){}
}

export class Data {
    constructor(data) {}
}

export class TimeSerie extends Data {
    constructor(data) {
        super();
        this.values = data["values"];
        this.labels = data["labels"];

    }
    getValues(){
        return this.values;
    }
    getLabels(){
        return this.labels;
    }
    Moyenne () {
        try {
            var acc=0;
            for(var val in this.values)
            { acc+=this.values[val];}
            if(isNaN(acc/this.values.length)) throw new ExceptionUser('Données Incorrectes');
            else return acc/this.values.length;
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }

    TotalTime () {
        try {
            var x=new Date(this.labels[this.labels.length-1])-new Date(this.labels[0]);
            if(x<0) throw new ExceptionUser('Données Incorrectes')
            else return new Date(this.labels[this.labels.length-1])-new Date(this.labels[0]);
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }

    ValueparSeconde () {
        try {
            var acc=0;
            for(var val in this.values)
            { acc+=this.values[val];}
            return this.TotalTime() == 0 ? 0 : acc/(this.TotalTime()/1000);
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }
}

export class Datum extends Data {
    constructor(data) {
        super();
        if(isNaN(data["value"])){
            throw new ExceptionUser("Données Incorrectes");
        }
        else  this.value = data["value"];
    }
    getValue(){
        return this.value
    }
}

global.Temperature = Temperature;
global.Humidity = Humidity;
global.Light = Light;
global.Switch = Switch;
global.Door = Door;
global.Fan_speed = Fan_speed;
global.TimeSerie = TimeSerie;
global.Datum = Datum;

export class Sensor {
    constructor(id, nom, type, data) {
        this.id = id;
        this.nom = nom;
        try {
            this.type = new global[classname[type].nom](); //creer un objet à partir du string passé en paramètre (passage par le scope global)
            this.data = new global[classname[type].dat](data); // creer un objet en fonction de l'enum tel que type => classe ex: TEMPERATURE => TimeSerie
       }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }
    getId () {
        return this.id;
    }
    getNom () {
        return this.nom;
    }
    getType () {
        return this.type;
    }
    getData () {
        return this.data;
    }
    setData (val) {
        this.data=val;
    }
}
/* TODO : Créer le modèle objet ici */ 
var classname = { TEMPERATURE : {nom : "Temperature", dat : "TimeSerie"},
    HUMIDITY : {nom : "Humidity", dat : "TimeSerie"},
    LIGHT : {nom : "Light", dat : "TimeSerie"},
    SWITCH : {nom : "Switch", dat : "Datum"},
    DOOR : {nom : "Door", dat : "Datum"},
    FAN_SPEED : {nom : "Fan_speed", dat : "TimeSerie"}
};

export function ExceptionUser(message) {
    this.message=message;
    this.name="ExceptionUser";
}

export class Temperature{
    constructor(){}
}

export class Humidity{
    constructor(){}
}

export class Light{
    constructor(){}
}

export class Switch{
    constructor(){}
}

export class Door{
    constructor(){}
}

export class Fan_speed{
    constructor(){}
}

export class Data {
    constructor(data) {}
}

export class TimeSerie extends Data {
    constructor(data) {
        super();
        this.values = data["values"];
        this.labels = data["labels"];

    }
    getValues(){
        return this.values;
    }
    getLabels(){
        return this.labels;
    }
    Moyenne () {
        try {
            var acc=0;
            for(var val in this.values)
            { acc+=this.values[val];}
           if(isNaN(acc/this.values.length)) throw new ExceptionUser('Données Incorrectes');
            else return acc/this.values.length;
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }

    TotalTime () {
        try {
            var x=new Date(this.labels[this.labels.length-1])-new Date(this.labels[0]);
            if(x<0) throw new ExceptionUser('Données Incorrectes')
            else return new Date(this.labels[this.labels.length-1])-new Date(this.labels[0]);
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }

    ValueparSeconde () {
        try {
            var acc=0;
            for(var val in this.values)
            { acc+=this.values[val];}
            return this.TotalTime() == 0 ? 0 : acc/(this.TotalTime()/1000);
        }
        catch (err){
            throw new ExceptionUser('Données Incorrectes');
        }
    }
}

export class Datum extends Data {
    constructor(data) {
        super();
        if(isNaN(data["value"])){
            throw new ExceptionUser("Données Incorrectes");
        }
        else  this.value = data["value"];
    }
    getValue(){
        return this.value
    }
}

global.Temperature = Temperature;
global.Humidity = Humidity;
global.Light = Light;
global.Switch = Switch;
global.Door = Door;
global.Fan_speed = Fan_speed;
global.TimeSerie = TimeSerie;
global.Datum = Datum;

export class Sensor {
    constructor(id, nom, type, data) {
        this.id = id;
        this.nom = nom;
        try {
            this.type = new global[classname[type].nom](); //creer un objet à partir du string passé en paramètre (passage par le scope global)
            this.data = new global[classname[type].dat](data); // creer un objet en fonction de l'enum tel que type => classe ex: TEMPERATURE => TimeSerie
        }
        catch (err) {
            throw new ExceptionUser('Données Incorrectes');
        }
    }

    getId() {
        return this.id;
    }

    getNom() {
        return this.nom;
    }

    getType() {
        return this.type;
    }

    getData() {
        return this.data;
    }

    setData(val) {
        this.data = val;
    }
}
