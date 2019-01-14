"use strict";
var nombre_a = 1;
var nombre_b = 2;
var prenom = "nicolas";
var age = 36;
function hello(name, age) {
    return "hello " + name + " youre age is : " + age + " ! congrats...";
}
console.log(hello(prenom, age));
var prenoms = ["george", "lucas", "paul", "pierre"];
function hello_friends(stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
        console.log("salut " + prenoms[i]);
    }
}
hello_friends(prenoms);
var adress = {
    rue: "rue des vignobles",
    cp: 31470,
    ville: "toulouse",
    appartement: 17
};
function affiche_adress(rue, cp, ville, appartement) {
    rue = adress.rue;
    cp = adress.cp;
    ville = adress.ville;
    console.log("j'habite a cette adreses :  " + rue + " " + cp + " " + ville);
}
//****************************************************************
// *******************  CLASS ELEVE ******************************
//****************************************************************
// DEFINE CLASS PROPERTIES******************
var eleve = /** @class */ (function () {
    //***** DEFINE CONSTRUCTOR **********************************
    //**************************************************** */
    function eleve(name, age, adress, note) {
        this.prenom = name;
        this.age = age;
        this.adresse = adress;
        this.note = note;
    }
    Object.defineProperty(eleve.prototype, "propertyName", {
        // DEFINE GETTER / SETTER
        //****************************** */
        get: function () {
            return this.prenom;
        },
        set: function (newName) {
            this.prenom = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(eleve.prototype, "propertyAge", {
        //****************************** */
        get: function () {
            return this.age;
        },
        set: function (newAge) {
            this.age = newAge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(eleve.prototype, "propertyAdresse", {
        //****************************** */
        get: function () {
            return this.adresse;
        },
        set: function (newAdresse) {
            this.adresse = newAdresse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(eleve.prototype, "propertyNote", {
        //****************************** */
        get: function () {
            for (var i = 0; i < this.note.length; i++)
                return this.note[i];
        },
        set: function (newNote) {
            this.note.push(newNote);
        },
        enumerable: true,
        configurable: true
    });
    //*************END GETTER / SETTER***************** */
    // *** METHOD "ELEVE_INFO" TO RETURN "NAME/AGE/ADRESS/"
    eleve.prototype.eleve_info = function () {
        console.log("- " + this.prenom + "\n" +
            "- " + this.age + "\n" +
            "- " + this.adresse);
    };
    //****************END METHOD ******* */
    //************METHOD TO CALCULATE AVERAGE SCORE */
    eleve.prototype.calc_moyenne = function () {
        var totalScore = 0;
        for (var i = 0; i < this.note.length; i++) {
            totalScore += this.note[i];
            return this.note[i];
        }
        var averageScore = totalScore / this.note.length;
        return averageScore;
    };
    // ************ METHOD TO DISPLAY SCORE & AVERAGE SCORE
    eleve.prototype.notes = function () {
        console.log("here is the list of the student's grades");
        for (var i = 0; i < this.note.length; i++) {
            console.log(this.note[i]);
        }
        console.log("The average Score of this student is " + this.calc_moyenne() + ".");
    };
    return eleve;
}());
// *********** END CLASS ELEVE *********************
// new eleve
var briansNotes = [12, 16, 17, 17, 11, 8, 15, 16];
var brian = new eleve("Brian", 16, adress, briansNotes);
brian.eleve_info();
brian.notes();
