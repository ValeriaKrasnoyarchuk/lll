window.onload = function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        rows: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slider1').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        rows: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '5%',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30%',
                }
            }
        ]
    });
};


/*Slider of feedbacks*/

$(".slider-1").on('afterChange', function (event, slick, currentSlide) {
    $(".slide-num-current").text("0" + String(currentSlide + 1));
});

$(document).ready(function () {
    $('.slider-1').slick({
        dots: false,
        prevArrow: $('.pr'),
        nextArrow: $('.nx'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
});

// Телефон
$("input[type='tel']").each(function () {
    $(this).on("change keyup paste", function (e) {
        var output,
            $this = $(this),
            input = $this.val();

        if (e.keyCode != 8) {
            input = input.replace(/[^0-9]/g, '');
            var area = input.substr(0, 3);
            var pre = input.substr(3, 3);
            var tel = input.substr(6, 4);
            if (area.length < 3) {
                output = "(" + area;
            } else if (area.length == 3 && pre.length < 3) {
                output = "(" + area + ")" + " " + pre;
            } else if (area.length == 3 && pre.length == 3) {
                output = "(" + area + ")" + " " + pre + "-" + tel;
            }
            $this.val(output);
        }
    });
});

//FETCH API
document.addEventListener('DOMContentLoaded', () => {

    const fetchSend = async (formData) => {
        const fetchResp = await fetch('https://formcarry.com/s/goMH_6kGsS', {
            method: 'POST',
            body: formData
        });
        if (!fetchResp.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
        }
        return await fetchResp.text();
    };

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);

            fetchSend(formData)
                .then((response) => {
                    console.log(response);
                    form.reset();// очищаем поля формы
                })
                .catch((err) => console.error(err))
        });
    });

});

Vue.component("modal", {
    template: "#modal-template"
});

const router = new VueRouter()



new Vue({
    el: "#tar",
    router,
    data: {
        showModal: false,
        firstname: '',
        email: '',
        comment: '',
        tel: ''
    },
    mounted() {
        if (localStorage.fisrtname) {
            this.fisrtname = localStorage.firstname;
        }
        if (localStorage.tel) {
            this.tel = localStorage.tel;
        }
        if (localStorage.email) {
            this.email = localStorage.email;
        }
        if (localStorage.comment) {
            this.comment = localStorage.comment;
        }
    },
    watch: {
        name(newName) {
            localStorage.first = newName;
        },
        phone(newName) {
            localStorage.tel = newName;
        },
        email(newName) {
            localStorage.email = newName;
        },
        text(newName) {
            localStorage.comment = newName;
        }
    },
})






window.onpopstate = function () {
    vue.back()
};


