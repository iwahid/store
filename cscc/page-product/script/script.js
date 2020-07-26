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
   /* ==================== секция поиска*/ 


/* ==================== секция: витрина товара */
let showcaseTabsButtons = arrTabsButtons.filter(item => {/* 
  console.log("Получен аттрибут у кнопки: ", item.getAttribute("data-section")) */
  return item.getAttribute("data-section") == "showcase"
})
let showcaseTabsContents = arrTabsContents.filter(item => {
  return item.getAttribute("data-section") == "showcase"
})
showcaseTabsButtons[0].classList.add("tabs__btn--active")
showcaseTabsContents[0].style.display = 'block'


/* ==================== секция: С этим товаром покупают */
let popular2TabsButtons = arrTabsButtons.filter(item => {/* 
  console.log("Получен аттрибут у кнопки: ", item.getAttribute("data-section")) */
  return item.getAttribute("data-section") == "popular-2"
})
let popular2TabsContents = arrTabsContents.filter(item => {
  return item.getAttribute("data-section") == "popular-2"
})
popular2TabsButtons[0].classList.add("tabs__btn--active")
popular2TabsContents[0].style.display = 'block'





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
console.log("Передал параметры в функцию: ", arrTabsButtons, arrTabsContents )
eventList(arrTabsButtons, arrTabsContents)
