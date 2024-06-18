let oladky = document.querySelector('.oladky')
let pyrih = document.querySelector('.tort')
let milkshake = document.querySelector('.milkshake')
let deruny = document.querySelector('.deruny')
let varenyky = document.querySelector('.varenyky')
let salat = document.querySelector('.salad')

let info = document.querySelector('.info')

oladky.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">640 г пшеничного борошна</li>
                    <li class="recipe_item">100 г цукру</li>
                    <li class="recipe_item">30 г живих (пресованих) дріжджів</li>
                    <li class="recipe_item">2 яйця</li>
                    <li class="recipe_item">100 г молока</li>
                    <li class="recipe_item">150 г м’якого вершкового масла
                    </li>
                    <li class="recipe_item">½ ч. л. солі</li>
                    <li class="recipe_item">2 ст. л. олії для змащування форми</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

pyrih.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

milkshake.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

deruny.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

varenyky.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})

salat.addEventListener('click', function () {
    info.innerHTML = `
    <img class="close" src="img/close.png" alt="">
                <p class="recipe_name">Курячі котлети з сиром та грибами</p>
                <ul class="recipe_list">
                    Інгредієнти
                    <li class="recipe_item">500 г курячого фаршу</li>
                    <li class="recipe_item">100 г твердого сиру</li>
                    <li class="recipe_item">200 г печериць</li>
                    <li class="recipe_item">1 цибулина</li>
                    <li class="recipe_item">1 яйце</li>
                    <li class="recipe_item">2 зубчики часнику</li>
                    <li class="recipe_item">3 ст. л. панірувальних сухарів</li>
                </ul>
                <ul class="recipe_list">
                    Спосіб приготування
                    <li class="recipe_item">Цибулю та часник дрібно нарізати. Гриби нарізати скибочками</li>
                    <li class="recipe_item">Розігріти сковороду з рослинною олією та обсмажити цибулю до золотистого кольору. Додати
                        часник і гриби, смажити ще 5
                        хвилин</li>
                    <li class="recipe_item">Змішати курячий фарш, яйце, тертий сир, обсмажені гриби з цибулею та часником, сіль та
                        перець</li>
                    <li class="recipe_item">З фаршу сформувати котлети, обваляти їх у панірувальних сухарях</li>
                    <li class="recipe_item">Розігріти сковороду з вершковим маслом та обсмажити котлети з обох боків до золотистої
                        скоринки</li>
                    <li class="recipe_item">Додати трохи води або вершків на сковороду, накрити кришкою та тушкувати котлети на
                        повільному вогні 15-20 хвилин</li>
                </ul>`
    info.style.display = 'flex'
    let close_btn = document.querySelector('.close')
    close_btn.addEventListener('click', function () {
        info.style.display = 'none'
    })
})