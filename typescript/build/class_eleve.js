"use strict";
//****************************************************************
// *******************  CLASS ELEVE ******************************
//****************************************************************
Object.defineProperty(exports, "__esModule", { value: true });
// DEFINE CLASS PROPERTIES******************
var eleve = /** @class */ (function () {
    //***** DEFINE CONSTRUCTOR **********************************
    //**************************************************** */
    function eleve(name, age, adress, note, lang) {
        this.prenom = name;
        this.age = age;
        this.adresse = adress;
        this.note = note;
        this.lang = lang;
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
            "- ");
        console.log(this.adresse);
        this.langu_list();
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
    eleve.prototype.langu_list = function () {
        console.log("here is the list of the student's learned Languages");
        for (var i = 0; i < this.lang.length; i++) {
            console.log(this.lang[i]);
        }
    };
    return eleve;
}());
exports.eleve = eleve;
// *********** END CLASS ELEVE *********************
