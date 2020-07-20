const search = document.querySelector('input')
const msgOne = document.querySelector('#msgOne')
const msgtwo = document.querySelector('#msgtwo')
document.querySelector('form').addEventListener('submit',(e)=>{
  e.preventDefault()
  const location = search.value
  msgOne.textContent = 'loading.....'
  msgTwo.textContent=''
  fetch('/whether/?address='+location).then((response)=>{
    response.json().then((data)=>{
      if(data.error){
        msgOne.textContent =  data.error
      }
       else {
        msgOne.textContent=data.location
        msgTwo.textContent=data.forecast
      }   
    })
  })
})
System.err.println("hello, logs!");
System.out.println("hello, logs!")