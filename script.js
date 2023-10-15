function changeContent(id){
    switch(id){
        case 'home':
            document.getElementById('titulo').innerHTML = "Título Inicial";
        break;

        case 'cont1':
            document.getElementById('titulo').innerHTML = "Conteúdo 1";
        break;

        case 'cont2':
            document.getElementById('titulo').innerHTML = "Conteúdo 2";
        break;
        
        case 'cont3':
            document.getElementById('titulo').innerHTML = "Conteúdo 3";
        break;

        default:
            document.getElementById('titulo').innerHTMl = "Error 404!";
    }
}