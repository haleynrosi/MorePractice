



const students = ["Amir"];

// below is with the callback method for controlling sequences

const addStudent = (newStudent, printCallback) =>{
    setTimeout(function(){
        students.push(newStudent);
    console.log("student added");
    printCallback();
    }, 2000);
}
const printStudents = ()=>{
    setTimeout(function(){
        for(let i in students){
            console.log(students[i]);
        }
    }, 1000);
}

// addStudent("Victoria", printStudents);


//below is with promises to control the sequence
//this is how you would write your own promise

const printStudentsForPromise = ()=>{
    for (let i in students) {
        console.log(students[i]);
    }
}

const addStudentsViaPromise = (newStudent) =>{
    const studentPromise = new Promise(function(resolve,reject){
        const studentFound = students.find(s=> s==newStudent);
        if(studentFound){
            reject()
        } else{
            students.push(newStudent);
            // console.log("new student added");
            resolve();
        }
    })
    return studentPromise;
}

addStudentsViaPromise("Amir").then(()=>{ // guarantees that the then is only executed after the addStudentsViaPromise is executed
    printStudentsForPromise();
}).catch(()=>{        //catches the rejection and does something if you tell it to /let you know its been rejected - if it is rejected, do this instead, if you dont do catch its deprecated and you have to handle it but it used to ignore it 
    console.log("student exists already") 
})
