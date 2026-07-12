// class

// class is the blueprint which siused by using object ,object is the insatance of the class 
//this keuword refers to the current  object
    // class shivam{

    //     constructor(name){
    //         this.name=name
    //     }

    //     printName(){
    //         console.log("My name is:",this.name);
    //     }
    // }

    // let obj=new shivam("Shivam Thosar");

    // obj.printName();

// Default parameter
//when the paramer is not passed to the constructor or function then it use the default parameter
    // class shivam{
    //     //constructor is used to innitilize the variable of the object ,it is called when the object is created,property are passed when the object is created
    //     constructor(name="Shivam Thosar"){
    //         this.name=name
    //     }

    //     printName(){
    //         console.log("My name is:",this.name);
    //     }
    // }

    // let obj=new shivam();

    // obj.printName();


//getter&setter
//getter is used to get the CSSMathValue,it is ued to acces the proper as a normal variable but behinde the scen it run as a function.

    class shivam{
            //constructor is used to innitilize the variable of the object ,it is called when the object is created,value are passed when the object is created
            constructor(Sname){
                this.Sname=Sname;
            }

            printName(){
                console.log("My name is:",this.Sname);
            }

            get name(){
                return this.Sname;
            }
            set name(newName){
                this.Sname=newName;
            }
        }

        let obj=new shivam("Hariom Thosar");

        obj.printName();

        console.log(obj.name);
        obj.name="Shivam Thosar"
        console.log(obj.name);

//public and private variable in class 
// create public variable syntax   =>name="shivam";
// create private variable syntax   => #name="shivam";
//acess it like a #name,this.#name
