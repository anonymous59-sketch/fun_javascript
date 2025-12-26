// 회원가입.js

// 전역 변수 
const formEvent = document.querySelector('#register');

//// 이벤트
formEvent.addEventListener('submit', e => {
  e.preventDefault();

  let userId = document.querySelector('#user-id');
  let userPw1 = document.querySelector('#user-pw1');
  let userPw2 = document.querySelector('#user-pw2');

  if (userId.value.length < 4 || userId.value.length > 15) { // Id
    alert(`아이디의 글자 수를 4글자 이상, 15글자 이하로 적어주십시오.\n현재 아이디의 글자수는 ${userId.value.length}글자 입니다.`);
    userId.focus();
  } else if (userPw1.value.length < 8) { // Password
    alert(`비밀번호의 글자 수를 8자리 이상으로 적어주십시오.\n방금 입력한 비밀번호는 ${userPw1.value.length}글자였습니다.`);
    userPw1.value = '';
    userPw2.value = '';
    userPw1.focus();
  } else if (userPw1.value != userPw2.value) { // PasswordConfirm 패스워드 확인창만 초기화하고 확인창에 포커스를 넣는 방식
    alert(`비밀번호가 일치하지 않습니다. 다시 확인해주십시오`)
    userPw2.value = '';
    userPw2.focus();
  } // 문제 요구사항
  
  // } else if (userPw1.value != userPw2.value) { // PasswordConfirm
  //   alert(`비밀번호가 일치하지 않습니다. 다시 입력해주십시오.`);
  //   userPw1.value = '';
  //   userPw2.value = '';
  //   userPw1.focus();
  // }
  // 비밀번호 확인을 잘못 입력했는지 비밀번호를 잘못 입력했는지 알 수 없기에 비밀번호 확인창에서 문제가 생기면 비밀번호 입력 한 것 전부 초기화가 맞지 않을까?
  // 아니면 회원가입 특성 상 비밀번호를 여러 번 입력하게 하는 게 더 귀찮기 때문에?
});

