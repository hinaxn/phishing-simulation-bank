

document.getElementById('loginBtn').addEventListener('click', function () {

  const num = document.getElementById('num').value || '1234 5678 90';
  const pwd = document.getElementById('pwd').value || 'Password123';

  document.getElementById('displayNum').textContent = num;
  document.getElementById('displayPwd').textContent = pwd;

  document.getElementById('revealOverlay').classList.add('show');
});
