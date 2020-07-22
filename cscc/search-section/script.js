const tabsButtons = document.getElementsByClassName("tabs__btn")
const tabsContents = document.getElementsByClassName("tabs__contents-box")

let arrTabsButtons = [...tabsButtons]
let arrTabsContents = [...tabsContents]

/* скрываю весь контент внутри секций с табами на странице */
arrTabsContents.forEach(element => {
  element.style.display = "none"
})


/* два массива отсортированных для секции search */
/* TODO: переписать скрипт так, что бы в цикле автоматом вытаскивал все первые вхождения новых блоков
   TODO: возможно, даже не стоит перебирать массивы, а понерфить через метод всех соседей первых объектов в каждой секции */
let searchTabsButtons = arrTabsButtons.filter(item => {/* 
  console.log("Получен аттрибут у кнопки: ", item.getAttribute("data-section")) */
  return item.getAttribute("data-section") == "search"
})
let searchTabsContents = arrTabsContents.filter(item => {
  return item.getAttribute("data-section") == "search"
})
searchTabsButtons[0].classList.add("tabs__btn--active")
searchTabsContents[0].style.display = 'block'

/* ==================== */
let popularTabsButtons = arrTabsButtons.filter(item => {/* 
  console.log("Получен аттрибут у кнопки: ", item.getAttribute("data-section")) */
  return item.getAttribute("data-section") == "popular"
})
let popularTabsContents = arrTabsContents.filter(item => {
  return item.getAttribute("data-section") == "popular"
})
popularTabsButtons[0].classList.add("tabs__btn--active")
popularTabsContents[0].style.display = 'block'

/* *********** */
/* два массива отсортированных для секции search */
/* TODO: в принципе, можно будет выпилить */
/* let searchTabsButtons2 = arrTabsButtons.filter(item => {
  return item.getAttribute("data-section") == "search2"
})
let searchTabsContents2 = arrTabsContents.filter(item => {
  return item.getAttribute("data-section") == "search2"
})
searchTabsButtons2[0].classList.add("tabs__btn--active")
searchTabsContents2[0].style.display = 'block' */


/* 
initi(arrTabsButtons, arrTabsContents) */

/* function initi(tabsButtons, tabsContents) {

 
  for (let i = 0; i < tabsButtons.length; i++) {

      let temp = tabsButtons[i].getAttribute("data-section")

      tabsButtons.forEach(element => {
        if (element.getAttribute("data-section") == temp) {
          element.classList.remove("tabs__btn--active")
        }
      })

      tabsButtons[i].classList.add("tabs__btn--active")

      tabsContents.forEach(element => {
        if (element.getAttribute("data-section") == temp) {
          element.style.display = 'none'
        }

      })
      tabsContents[i].style.display = 'block'

   
  }



  console.log("Произошло что-то непонятное")
} */


function eventList(tabsButtons, tabsContents) {

  for (let i = 0; i < tabsButtons.length; i++) {
    console.log("Массив кнопок: ", tabsButtons)

    tabsButtons[i].addEventListener('click', () => {

      let temp = tabsButtons[i].getAttribute("data-section")

      tabsButtons.forEach(element => {
        if (element.getAttribute("data-section") == temp) {
          element.classList.remove("tabs__btn--active")
        }
      })

      tabsButtons[i].classList.add("tabs__btn--active")

      tabsContents.forEach(element => {
        if (element.getAttribute("data-section") == temp) {
          element.style.display = 'none'
        }

      })
      tabsContents[i].style.display = 'block'

    })
  }

  console.log("функция сработала")
}

eventList(arrTabsButtons, arrTabsContents)


/* надеюсь верую вовеки не найдёт сей код никто из ныне живущих. Иначе смерть для меня будет самым лёгким способом искупления стыда за этот скрипт */
/* песочу оба списка и каждый элемент нерфлю, после чего нужному элементу в рамках события навешиваю нужный класс */

/* или можно изначально оставить видимым только один контент, а при нажатии на каждую из кнопок - вытаскивать из неё data-атрибут и по нему искать элемент с таким же id и показывать его */