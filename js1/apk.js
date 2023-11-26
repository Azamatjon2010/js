const elTextInp = document.querySelector('.text-input-js');
const elAmountInp = document.querySelector('.amount');
const elForm = document.querySelector('.form-js');
const elWrittenText = document.querySelector('.text-js');
const elCopyBtn = document.querySelector('.copy-btn');

elForm.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const text = elTextInp.value;
  const amount = elAmountInp.value;
  if(amount >= 10){
    return alert(" kichikroq son yoz!")
  }else if(amount <= 0 ){
    return alert("sonni yozmading dumbul!")
  }

  elWrittenText.textContent = (text + ' ').repeat(amount);
  elWrittenText.classList.add('text')
});

elCopyBtn.addEventListener('click', function(){
    navigator.clipboard.writeText(elCopyBtn.nextElementSibling.textContent)
    alert('Text copied to clipboard')
});