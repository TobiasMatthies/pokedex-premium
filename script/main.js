function openSection(section, i){
    document.getElementById(`${section}_section`).classList.toggle("open_section");

    if (section == 'detail') {
        initDetail(i);
    }
}