
// 전체 동의하기 체크, 해제
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('chk-part');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    });
}

// 체크버튼 전부 눌렀을 때 전체 동의하기 버튼이 눌리도록 설정
document.addEventListener('change', function (e) {
    var chkAll = document.getElementById("chk-all");
    var checkboxes = document.querySelectorAll('.chkbox:not(#chk-all)');

    for (var i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            chkAll.checked = false;
            return;
        }
    }

    chkAll.checked = true;
});
