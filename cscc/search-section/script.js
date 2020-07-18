const tabsButtons = document.getElementsByClassName("tabs__btn")
const tabsContents = document.getElementsByClassName("search__content-box")

let arrTabsButtons = [...tabsButtons]
let arrTabsContents = [...tabsContents]
console.log(arrTabsButtons)
console.log(arrTabsContents)

arrTabsContents.forEach(element => {
  element.style.display = "none"
})

arrTabsContents[0].style.display = 'block'

/* надеюсь верую вовеки не найдёт сей код никто из ныне живущих. Иначе смерть для меня будет самым лёгким способом искупления стыда за этот скрипт */
/* песочу оба списка и каждый элемент нерфлю, после чего нужному элементу в рамках события навешиваю нужный класс */
for (let i = 0; i < arrTabsButtons.length; i++) {
  arrTabsButtons[i].addEventListener('click', () => {
    arrTabsButtons.forEach(element =>{
      element.classList.remove("tabs__btn--active")
    })
    arrTabsButtons[i].classList.add("tabs__btn--active")

    arrTabsContents.forEach(element => {
      element.style.display = 'none'
    })
    arrTabsContents[i].style.display = 'block'

  })
}

/* или можно изначально оставить видимым только один контент, а при нажатии на каждую из кнопок - вытаскивать из неё data-атрибут и по нему искать элемент с таким же id и показывать его */