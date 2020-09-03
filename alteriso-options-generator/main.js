var ARGUMENTS = ""

// デフォルトではない設定のみ引数で指定する
ONLY_NO_DEFAULT = true

function writeLog(_msg) {
    var _log_box = document.getElementById("generator-output")

    // 参考 https://www.sejuku.net/blog/30171
    var _time = new Date();
    var _log_date = _time.getHours() + ":" + _time.getMinutes() + ":" + _time.getSeconds();
    console.log (_log_date);
    _log_box.value = "\n" + "[ " + _log_date + " ]" + _msg +_log_box.value;
}

function getPlymouth(){
    var _IsPlymouth = document.getElementById("plymouth_enable");
    if (_IsPlymouth.checked) {
        ARGUMENTS = ARGUMENTS + " -b";
    }
}

function getClean () {
    var _IsClean = document.getElementById("clean_enable");
    if (_IsClean.checked) {
        ARGUMENTS = ARGUMENTS + " -e"
    }
}

function getTarball () {
    var _IsTarball = document.getElementById("tarball_enable");
    if (_IsTarball.checked) {
        ARGUMENTS = ARGUMENTS + " --tarball";
    }
}

function getArchitecture () {
    var _Architecture = document.getElementById("architecture").value;

    if (_Architecture != "") {
        if (ONLY_NO_DEFAULT == false || _Architecture != "x86_64") {
            ARGUMENTS = ARGUMENTS + " -a \"" + _Architecture + "\"";
        }
    }
}

function getCompType () {
    var _Comptype = document.getElementById('sfs-comp-type').value;
    if (_Comptype != "") {
        if (_Comptype != "zstd" || ONLY_NO_DEFAULT == false) {
            ARGUMENTS = ARGUMENTS + " -c \"" + _Comptype + "\"";
        }
    }
}

function getKernel () {
    var _Kernel = document.getElementById("kernel").value;
    if(_Kernel != "") {
        if (_Kernel != "zen" || ONLY_NO_DEFAULT == false) {
            ARGUMENTS = ARGUMENTS + " -k \"" + _Kernel + "\"";
        }
    }
}

function getUsername (){
    var _Username = document.getElementById("username").value;
    // console.log(_Username);
    if (_Username != "" ) {
        if (_Username != "alter" || ONLY_NO_DEFAULT == false) {
            ARGUMENTS = ARGUMENTS + " -u \"" + _Username + "\"";
        }
    }
}

function getPassword (){
    var _Password = document.getElementById("password").value;
    //console.log(_Password);
    if (_Password != "" ) {
        if (_Password != "alter" || ONLY_NO_DEFAULT == false ) { 
            ARGUMENTS = ARGUMENTS + " -p \"" + _Password + "\"";
        }
    }
}

function getDebug () {
    var _IsDebug = document.getElementById("debug_enable");
    if (_IsDebug.checked) {
        ARGUMENTS = ARGUMENTS + " -d"
    }
}

function getBashDebug () {
    var _IsBashDebug = document.getElementById("bash_debug_enable");
    if (_IsBashDebug.checked) {
        ARGUMENTS = ARGUMENTS + " -x";
    }
}

function getGitversion () {
    var _IsGetversion = document.getElementById("gitversion_enable");
    if (_IsGetversion.checked) {
        ARGUMENTS = ARGUMENTS + " --gitversion";
    }
}

function getShmkalteriso () {
    var _IsShmkalteriso = document.getElementById("shmkalteriso_enable");
    if (_IsShmkalteriso.checked) {
        ARGUMENTS = ARGUMENTS + " --shmkalteriso";
    }
}

function startgen() {
    // 初期化
    ARGUMENTS = ""

    if (document.getElementById("only_no_default").checked) {
        ONLY_NO_DEFAULT = false
    } else {
        ONLY_NO_DEFAULT = true
    }

    getPlymouth();
    getClean();
    getTarball();
    getArchitecture();
    getCompType();
    getKernel();
    getUsername();
    getPassword();
    getShmkalteriso();
    getGitversion();
    getDebug();
    getBashDebug();
    
    // 出力
    document.getElementById('output').innerHTML = "";
    if (ARGUMENTS == "") {
        document.getElementById('output').value = "引数は必要ありません";
    } else {
        document.getElementById('output').value = ARGUMENTS;
    }
}

function copy_to_clipboard() {
    var output_value = document.getElementById("output").value;

    if (output_value != ""){
        //参考 https://qiita.com/butakoma/items/642c0ec4b77f6bb5ebcf#clipboardeventclipboarddataを使う方法

        var listener = function(e){
        
            e.clipboardData.setData("text/plain" , output_value);    
            // 本来のイベントをキャンセル
            e.preventDefault();
            // 終わったら一応削除
            document.removeEventListener("copy", listener);
        }

        document.addEventListener("copy" , listener);
        document.execCommand("copy");

        writeLog("「" + output_value + "」" + "をクリップボードにコピーしました！");
    } else {
        writeLog("コピーするものがありません")
    }
}