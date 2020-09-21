let cardTask = document.querySelectorAll('.cards');
let btnDelete= document.querySelectorAll('.deleteTask');


/*for ( let i =0 ; i< cardTask.length; i++){

    btnDelete[i].addEventListener ('click', () => {

        fetch(`http://localhost:3000/${i+1}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }).then(() => {
            console.log("Tarefa deletada");
          })
            .catch( err => console.log(err));


    })

};*/


btnDelete.forEach((btn) => {
        btn.addEventListener('click', () => { console.log("fui clicado");});
});








/*(btnDelete) => {
    btnDelete.addEventListener('click', () => { console.log('olamundo');});
});*/