document.getElementById('delete-article').addEventListener('click', (e) => {
    var id = e.target.getAttribute('data-id');
    fetch('/articles/' + id, {
        method:'delete'
    })
    .then((res) => res.text())
    .then((res) => {
        console.log(res)
        alert("Deleting");
        window.location.href='/';
    })
})