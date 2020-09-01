var ARGUMENTS = ""

function getPlymouth(){
    var _IsPlymouth = document.getElementById("plymouth_enable");
    if (_IsPlymouth.checked) {
        ARGUMENTS = ARGUMENTS + " " + "-b";
    }
}

function getCompType(){
    ARGUMENTS = ARGUMENTS + " " + document.getElementById('sfs-comp-type').value;
}

function getUsername(){
    var _Username = document.getElementById("username").value;
    // console.log(_Username);
    if (_Username != "alter" && _Username != "" ) {
        ARGUMENTS = ARGUMENTS + " " + "-u \"" + _Username + "\"";
    }
}

function getPassword(){
    var _Password = document.getElementById("password").value;
    //console.log(_Password);
    if (_Password != "alter" && _Password != "" ) {
        ARGUMENTS = ARGUMENTS + " " + "-p \"" + _Password + "\"";
    }
}

function startgen() {
    // 初期化
    ARGUMENTS = ""

    getPlymouth();
    getCompType();
    getUsername();
    getPassword();
    
    // 出力
    document.getElementById('output').innerHTML = "";
    document.getElementById('output').innerHTML = ARGUMENTS;
}