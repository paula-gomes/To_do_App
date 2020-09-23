
function deleteTask(event) {

  const idFetch = `${event.target.parentNode.dataset.idTasks}`;
  fetch(`http://localhost:3000/${idFetch}`, { method: "DELETE" })
    .then(() => { event.target.parentNode.remove() })
    .catch(err => console.log(err));
}

