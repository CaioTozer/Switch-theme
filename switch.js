var label = document.querySelector('#switch')
const element = document.querySelector('body')

label.addEventListener( 'change', function() {
    if(this.checked) {
      element.style.backgroundColor ="#292C35"
    } else {
        
      element.style.backgroundColor ="#F1F1F1"
    }
});



