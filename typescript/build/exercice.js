"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_eleve_1 = require("./class_eleve");
var NS_Lang;
(function (NS_Lang) {
    var languages = /** @class */ (function () {
        function languages() {
        }
        languages.prototype.list = function () {
            var languageLearned = ["EN", "FR", "DE", "RU"];
            return languageLearned;
        };
        return languages;
    }());
    NS_Lang.languages = languages;
})(NS_Lang || (NS_Lang = {}));
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
// new eleve
var briansNotes = [12, 16, 17, 17, 11, 8, 15, 16];
var importListLanguages = new NS_Lang.languages();
var brian = new class_eleve_1.eleve("Brian", 16, adress, briansNotes, importListLanguages.list());
brian.eleve_info();
brian.notes();
function SetAdress(config) {
    var newAdress = { street: config.rue, code: config.cp, city: config.ville, appt: "" };
    if (config.appartement) {
        newAdress.appt = config.appartement;
    }
    return newAdress;
}
var joshsAdress = SetAdress({ rue: "rue de la gare", cp: 31450, ville: "toulouse" });
var joshsNotes = [12, 16, 17, 17, 11, 8, 15, 16];
//********************INTERFACE ADRESS END ************** */
//***********************LAUNCH languageLearned FROM ANOTHER CLASS */
var joshStudent = new class_eleve_1.eleve("Josh", 23, joshsAdress, joshsNotes, importListLanguages.list());
joshStudent.eleve_info();
joshStudent.notes();
