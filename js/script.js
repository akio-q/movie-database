'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Ліга справедливості",
            "Ла-ла ленд",
            "Одержимість",
            "Скотт Пілігрим проти..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre  = poster.querySelector('.promo__genre'),
          moviesList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        genre.textContent = 'Драма';
    
        poster.style.backgroundImage = 'url("./img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    const createMovieList = (films, parent) => {
        parent.innerHTML = '';
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    };

    deleteAdv(adv);
    makeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, moviesList);

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const newFilm = addInput.value;
        const favoriteFilm = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm);
            
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, moviesList);
        }

        e.target.reset();
    });
});