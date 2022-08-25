function openSection(section){
    document.getElementById(`${section}_section`).classList.toggle("open_section");
}

function onload(){
    initDetail();
}