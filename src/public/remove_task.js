
function deleteTask(event) {

  const idfetch = `${event.target.parentNode.dataset.idTasks}`;
  fetch(`http://localhost:3000/${idfetch}`, { method: "DELETE" })
    .then(() => { event.target.parentNode.remove() })
    .catch(err => console.log(err));
}

