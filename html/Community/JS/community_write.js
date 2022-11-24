const pwBox = document.querySelector('.inputPassword > input'),
  warning = document.getElementsByTagName('span'),
  textarea = document.querySelector('textarea'),
  confirm = document.querySelector('button');

let checkPW;

pwBox.addEventListener("input", function () {
  checkPW = this.value;
});


confirm.addEventListener('click', function (e) {
  if (!textarea.value) {
    alert('내용을 입력해 주세요.')
  } else if (!checkPW) {
    alert('비밀번호를 입력해 주세요.')
  }
});

