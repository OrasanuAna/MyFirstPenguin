    
    const ceas = document.getElementById("ceas");

    update();
    
    function update(){
        let date =new Date();
        ceas.innerHTML = date;
    }

    /*
    function formatDate(date){
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();

        return `${month}/${day}/${year}`
    }
    */