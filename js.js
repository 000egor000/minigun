/*-----------slider-----------*/
$('.slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
})
/*-----------F2/F5-----------*/

let sub = document.querySelector('.sub')
let sub1 = document.querySelector('.inr')
let fun = () => alert('сообщение отправлено')
sub.addEventListener('click', fun)
sub1.addEventListener('click', fun)

let group__form = document.querySelector('.group__form select')
let image__x = document.querySelector('.image__x')

group__form.addEventListener('change', function () {
  if (this.value == 0) {
    image__x.setAttribute('src', '')
  }

  if (this.value == 1) {
    image__x.setAttribute('src', 'img/11.png')
  }
  if (this.value == 2) {
    image__x.setAttribute('src', 'img/22.png')
  }
  if (this.value == 3) {
    image__x.setAttribute('src', 'img/33.png')
  }
  if (this.value == 4) {
    image__x.setAttribute('src', 'img/44.png')
  }
})
