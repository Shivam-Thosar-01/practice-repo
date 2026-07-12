//Object Cloning
// object cloning means data present in one object is clone to another object.

//By using spread object
    // let obj1={
    //     name:"Shivam Thosar",
    //     age:"19",
    //     ht:"170cm",
    //     wt:"58kg",
    //     education:"Diploma holder in Information Technology"
    // }


    // let obj2={...obj1};

    // obj1.name="Hariom";
    // obj1.location="Nashik";
    // console.log("Original Object",obj1);
    // console.log("Cloned Object",obj2);

// object cloning by assign method
    // let obj1={
    //     name:"Shivam Thosar",
    //     age:"19",
    //     ht:"170cm",
    //     wt:"58kg",
    //     education:"Diploma holder in Information Technology"
    // }
    // let obj2=Object.assign({},obj1);

    // obj1.name="Ashok";
    // obj1.location="Sindkhed";
    // console.log("Original Object",obj1);
    // console.log("Cloned Object",obj2);


//cloning by iteration of the for in loop


    let obj1={
        name:"Shivam Thosar",
        age:"19",
        ht:"170cm",
        wt:"58kg",
        education:"Diploma holder in Information Technology"
    }
    let obj2={};

    for (const key in obj1) {
        dumkey=key;
        dumValue=obj1[key];

        obj2[dumkey]=dumValue;
    }

    console.log(obj2);


//garbage collector
    // in javaScript we camt make control in garbage collector
    