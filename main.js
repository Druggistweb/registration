const scriptURL = 'https://script.google.com/macros/s/AKfycbxPpm_VGtat81n-NgLDsR-uK8Kdxc-_MSXPFjsNHz5xs598-plQ7z5U_VtI-IHWLewq/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(document.getElementById("load").style.visibility = `visible`))
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
