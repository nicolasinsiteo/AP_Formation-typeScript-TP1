//****************************************************************
 // *******************  CLASS ELEVE ******************************
 //****************************************************************
 
 // DEFINE CLASS PROPERTIES******************
 
 
 export class eleve 
 {
     
     prenom: string;
     age: number;
     adresse: object;
     note : Array<number>;
     lang : Array<string>
 
     //***** DEFINE CONSTRUCTOR **********************************
     //**************************************************** */
     constructor(name:string, age:number, adress:object, note:Array<number>,lang:Array<string> ) 
     {
         this.prenom = name;
         this.age = age;
         this.adresse = adress;
         this.note = note;
         this.lang = lang;
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
         this.langu_list();
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
     langu_list()
     {
         console.log("here is the list of the student's learned Languages")
         for(var i=0; i<this.lang.length;i++)
         {
             console.log(this.lang[i]);
         }
         
     }
 
 
 }
 // *********** END CLASS ELEVE *********************

 
