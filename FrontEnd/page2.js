var namelabel = document.getElementById('name');
if(sessionStorage.getItem('name')){
    namelabel.innerHTML = sessionStorage.getItem('name');
}