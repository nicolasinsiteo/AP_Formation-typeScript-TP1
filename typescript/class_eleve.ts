//****************************************************************
 // *******************  CLASS ELEVE ******************************
 //****************************************************************
 
 // DEFINE CLASS PROPERTIES******************
 
 
 export class eleve 
 {
     
     _prenom: string;
     _age: number;
     _adresse: object;
     _note : Array<number>;
     _lang : Array<string>;
     
 
     //***** DEFINE CONSTRUCTOR **********************************
     //**************************************************** */
     constructor(name:string, age:number, adress:object, note:Array<number>,lang:Array<string> ) 
     {
         this._prenom = name;
         this._age = age;
         this._adresse = adress;
         this._note = note;
         this._lang = lang;
     }
 
     // DEFINE GETTER / SETTER
     //****************************** */
     get prenom(){
         return this._prenom;
     }
     set prenom(newName:string){
         this._prenom = newName;
     }
     //****************************** */
     get age(){
         return this._age;
     }
     set age(newAge:number){
         this._age = newAge;
     }
     //****************************** */
     get adresse():{}{
         return this._adresse;
     }
     set adresse(newAdresse:{}){
         this._adresse = newAdresse;
     }
     //****************************** */
     get note():any{
         
         for(var i = 0; i<this._note.length;i++)
         return this._note[i];
     }
     set note(newNote:any){
         this._note.push(newNote);
     }
     //*************END GETTER / SETTER***************** */
 
     // *** METHOD "ELEVE_INFO" TO RETURN "NAME/AGE/ADRESS/"
     eleve_info()
     {
         console.log
         (
             "- "+this._prenom+"\n"+
             "- "+this._age+"\n"+
             "- " 
         )
         console.log(this._adresse);
         this.langu_list();
     }
     //****************END METHOD ******* */
 
     //************METHOD TO CALCULATE AVERAGE SCORE */
     calc_moyenne()
     {
         
         var totalScore = 0;
         
         for(var i=0; i<this._note.length;i++)
         {
            totalScore +=  this._note[i];
            return this._note[i];
         }
         var averageScore = totalScore / this._note.length;
         return averageScore;
     }
     // ************ METHOD TO DISPLAY SCORE & AVERAGE SCORE
     notes()
     {
         console.log("here is the list of the student's grades")
         for(var i=0; i<this._note.length;i++)
         {
             console.log(this._note[i]);
         }
         console.log("The average Score of this student is "+this.calc_moyenne()+".");
     }
     langu_list()
     {
         console.log("here is the list of the student's learned Languages")
         for(var i=0; i<this._lang.length;i++)
         {
             console.log(this._lang[i]);
         }
         
     }
 
 
 }
 // *********** END CLASS ELEVE *********************

 
