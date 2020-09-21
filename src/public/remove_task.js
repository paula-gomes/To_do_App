let cardTask = document.querySelectorAll('.cards');
let btnDelete= document.querySelectorAll('.deleteTask');


for ( let i =0 ; i< cardTask.length; i++){

    btnDelete[i].addEventListener ('click', () => {

        fetch(`http://localhost:3000/${i+1}`, {method: "DELETE"}).then(() => {
            cardTask[i].remove();
          })
            .catch( err => console.log(err));


    });

};

