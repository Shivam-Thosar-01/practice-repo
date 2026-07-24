    // Monitor event it is used to show events
    // Syntax:-
    //     monitorEvents(document);

    // terms
    //     1.EventTarget   -> it is a element on which event is happen
    //     2.EventListner  ->it perform the action when the event happen.
    //         a.addEventListener
    //         Syntax:-
    //             <EventTarget>.addEventListener(<Event-type>,<Function-action>);
    //         b.removeEventListener
    //             <EventTarget>.removeEventListener(<Event-type>,<Function-action>);
    // Event Life Cycle
    //     1.Capture   ->it goes down for the target element
    //     2.attarget  ->
    //     3.Bubbling  ->moveing from target element to the root element.By default event listner execute at bubbbling phase

    // Event Object
    //     it is the object which give all info about the event 
    
    // preventDefault
    //     used to avoid the element default behaviour
        

    
function funRun(){
    console.log("Yaaaaa...");
}

let submitBtn=document.getElementById('btn');

// add event listner
submitBtn.addEventListener('click',funRun);
// remove event listner
// submitBtn.removeEventListener('click',funRun);
