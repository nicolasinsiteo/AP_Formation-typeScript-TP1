import { eleve } from "./class_eleve";





namespace NS_Lang 
{
    export class languages
    {
        list()
        {
            var languageLearned : Array<string>=["EN","FR","DE","RU"];
            return languageLearned;
        }
    }


}





var nombre_a : number = 1;
var nombre_b : number = 2 ;

var prenom : string = "nicolas";
var age : number = 36;

function hello(name: string, age: number): string {
    return "hello "+name+" youre age is : "+age+" ! congrats...";
}

console.log(hello(prenom,age));


var prenoms : Array<string> = ["george", "lucas", "paul", "pierre"];

function hello_friends(stringArray:Array<string>)
    {
    
    for(var i=0; i<stringArray.length; i++)
    {
        console.log("salut "+prenoms[i]);
    }


}
hello_friends(prenoms);


var adress = { 
    rue: "rue des vignobles", 
    cp: 31470,  
    ville: "toulouse", 
    appartement:17
 };

 function affiche_adress(rue:string, cp : number | string, ville:string, appartement?:number): void{
    rue = adress.rue;
    cp = adress.cp;
    ville = adress.ville;

    console.log(`j'habite a cette adreses :  ${rue} ${cp} ${ville}`);

 }

 


// new eleve
var briansNotes : Array<number> = [12,16,17,17,11,8,15,16];
let importListLanguages = new NS_Lang.languages();
    

let brian = new eleve("Brian", 16, adress,briansNotes,importListLanguages.list())

brian.eleve_info();
brian.notes();


//*******************INTERFACE ADRESS */****************** */


interface AdressInterf {
    rue: string;
    cp: any;
    ville: string;
    appartement?:string;
}


function SetAdress(config: AdressInterf): {street: string; code: number; city:string; appt:string} 
{
    let newAdress = {street:config.rue, code:config.cp ,city:config.ville,appt:""};
    
    if (config.appartement) {
        newAdress.appt = config.appartement;
    }

    return newAdress;
}

let joshsAdress = SetAdress({rue: "rue de la gare", cp:31450, ville:"toulouse"});
var joshsNotes : Array<number> = [12,16,17,17,11,8,15,16];
//********************INTERFACE ADRESS END ************** */

//***********************LAUNCH languageLearned FROM ANOTHER CLASS */





let joshStudent = new eleve("Josh",23,joshsAdress,joshsNotes,importListLanguages.list());

joshStudent.eleve_info();
joshStudent.notes();

