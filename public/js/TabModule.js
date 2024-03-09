//tabService
let TabCounter = 0
function NewTab() {
    TabCounter + 1
}


document.getElementById('TabHolder').onclick = function () {
    var TBMGR = document.getElementById('tabmanagerc');
    TBMGR.style.display = TBMGR.style.display === 'flex' ? 'none' : 'flex';
}