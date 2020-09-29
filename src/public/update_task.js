let buttonEdit = document.querySelectorAll(".editTask");


function updateTask(event) {
    event.preventDefault();
    buttonEdit.forEach((btn) => {

        btn.addEventListener('click', () => {

            const form = document.querySelector('#formTask');
            let card = btn.parentNode;
            let idTask = `${event.target.parentNode.dataset.idTasks}`;
            let titleTask = card.childNodes[0].nextSibling.innerText;
            let descTask = card.childNodes[2].nextSibling.innerText;
            let statusTask = card.childNodes[4].nextSibling.innerText;
            console.log(idTask);
            form[2].value = titleTask;
            form[3].value = descTask;
            form[4].value = statusTask;
            form.action = `/tasks/${idTask}`;
        })
    })
};
