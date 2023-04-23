const directors = [
        {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
        },
        {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
        },
        {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
        },
        {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
        },
        {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
        },
        {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
        },
        {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
        },
    ];
const director1 = document.getElementById ('director1');
console.log (director1);
console.log(directors[0].name);
director1.textContent = directors[0].name;

document.addEventListener("DOMContentLoaded", function() {
    const director1 = document.getElementById ('director1');
    director1.textContent = directors[0].name;
    const director2 = document.getElementById ('director2');
    director2.textContent = directors[1].name; 
    const director3 = document.getElementById ('director3');
    director3.textContent = directors[2].name;
    const director4 = document.getElementById ('director4');
    director4.textContent = directors[3].name;
    const director5 = document.getElementById ('director5');
    director5.textContent = directors[4].name;
    const director6 = document.getElementById ('director6');
    director6.textContent = directors[5].name;
    const director7 = document.getElementById ('director7');
    director7.textContent = directors[6].name;
    const director8 = document.getElementById ('director8');
    director8.textContent = directors[7].name;
});
directors.forEach((name, career, films, top_rated_film) => {
    console.log(`${name} ${career} ${films} ${top_rated_film}`);
    });
const directorsList = document.getElementById('director');
let list = '';
directors.forEach(item => {
    list += `<div>${name}</div>`
});
directorsList.innerHTML = list;

const html = directors.map((item) => 
`<div>${item}</div>`).join('');
document.getElementById('director').innerHTML = html;






