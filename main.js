const emailInput = document.querySelector('.email')
const passwordIput = document.querySelector('.password')
const btn = document.querySelector('.btn')

function onClick() {
    if (emailInput.value.indexOf('@') != -1 && emailInput.value.indexOf('.') != -1 && passwordIput.value.length >= 8)
    {
        alert('로그인 완료')
    }
}
btn.addEventListener('click', onClick)