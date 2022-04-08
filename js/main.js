$(document).ready(function(){
  
    $('.products__slider').slick({
        dots: true,
        arrows: true,
      //   autoplay: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive:[
        {
          breakpoint: 1300,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          }
      }, {
        breakpoint: 690,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
        ]
      });
   $('.reviews__slider').slick({
      dots: true,
      arrows: true,
    //   autoplay: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 4,
      responsive:[
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
      }
    }, {
      breakpoint: 690,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
      ]
    });
    
      $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active')
      });
   });