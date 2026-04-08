function toggle_sub_menu(target_id, classname){
    var obj = document.getElementById(target_id);
    if (obj.classList.contains(classname)){
        obj.classList.remove(classname);
    }else{
        obj.classList.add(classname);
    }
}

function toggle_show(){
    var div = document.querySelector('div.sidenav');
    var top_div = document.querySelector('div.main-cont');
    if (div.classList.contains('show')){
        div.classList.remove("show");
        top_div.classList.remove("topnav-margin");
    }else{
        div.classList.add("show");
        top_div.classList.add("topnav-margin");
    }
}