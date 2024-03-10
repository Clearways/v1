document.getElementById('XB').onclick = function () {
    document.getElementById('tabmanagerc').style.display = 'none';
}

document.getElementById('TabHolder').onclick = function () {
    var TBMGR = document.getElementById('tabmanagerc');
    TBMGR.style.display = TBMGR.style.display === 'flex' ? 'none' : 'flex';
}