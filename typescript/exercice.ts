namespace NS_Lang 
{
    export class languages
    {
        export list()
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

 //****************************************************************
 // *******************  CLASS ELEVE ******************************
 //****************************************************************
 
 // DEFINE CLASS PROPERTIES******************
 
 NS_Lang.languages.
 class eleve 
{
    prenom: string;
    age: number;
    adresse: object;
    note : Array<number>;

    //***** DEFINE CONSTRUCTOR **********************************
    //**************************************************** */
    constructor(name:string, age:number, adress:object, note:Array<number> ) 
    {
        this.prenom = name;
        this.age = age;
        this.adresse = adress;
        this.note = note;
    }

    // DEFINE GETTER / SETTER
    //****************************** */
    get propertyName(){
        return this.prenom;
    }
    set propertyName(newName:string){
        this.prenom = newName;
    }
    //****************************** */
    get propertyAge(){
        return this.age;
    }
    set propertyAge(newAge:number){
        this.age = newAge;
    }
    //****************************** */
    get propertyAdresse():{}{
        return this.adresse;
    }
    set propertyAdresse(newAdresse:{}){
        this.adresse = newAdresse;
    }
    //****************************** */
    get propertyNote():any{
        
        for(var i = 0; i<this.note.length;i++)
        return this.note[i];
    }
    set propertyNote(newNote:any){
        this.note.push(newNote);
    }
    //*************END GETTER / SETTER***************** */

    // *** METHOD "ELEVE_INFO" TO RETURN "NAME/AGE/ADRESS/"
    eleve_info()
    {
        console.log
        (
            "- "+this.prenom+"\n"+
            "- "+this.age+"\n"+
            "- " 
        )
        console.log(this.adresse);
    }
    //****************END METHOD ******* */

    //************METHOD TO CALCULATE AVERAGE SCORE */
    calc_moyenne()
    {
        
        var totalScore = 0;
        
        for(var i=0; i<this.note.length;i++)
        {
           totalScore +=  this.note[i];
           return this.note[i];
        }
        var averageScore = totalScore / this.note.length;
        return averageScore;
    }
    // ************ METHOD TO DISPLAY SCORE & AVERAGE SCORE
    notes()
    {
        console.log("here is the list of the student's grades")
        for(var i=0; i<this.note.length;i++)
        {
            console.log(this.note[i]);
        }
        console.log("The average Score of this student is "+this.calc_moyenne()+".");
    }



}
// *********** END CLASS ELEVE *********************


// new eleve
var briansNotes : Array<number> = [12,16,17,17,11,8,15,16];


let brian = new eleve("Brian", 16, adress,briansNotes)

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


let joshStudent = new eleve("Josh",23,joshsAdress,joshsNotes);

joshStudent.eleve_info();
joshStudent.notes();

