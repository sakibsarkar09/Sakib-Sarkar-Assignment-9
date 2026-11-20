const time = document.getElementById("time")
const date = document.getElementById("date")

const ul = document.createElement("ul")
ul.classList = "flex justify-center gap-3 "
const days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
days.forEach((day) => {
    const li = document.createElement("li")
    li.classList = "border px-2 rounded"
    li.textContent = day
    ul.appendChild(li)
})

date.parentElement.appendChild(ul)

const weekDays = Array.from(ul.children)



const showTime = () => {
    const d = new Date()
    let hour = d.getHours() % 12 || 12
    hour = hour.toString().padStart(2,'0')
    const min = d.getMinutes().toString().padStart(2, '0')
    const sec = d.getSeconds().toString().padStart(2, '0')
     const ampm = d.getHours() >= 12 ? "PM" : "AM"
    time.textContent = `${hour}:${min}:${sec} ${ampm}`

    const dt = d.getDate().toString().padStart(2, '0')
    const mon = d.toLocaleString("default",{month: "long"})
    const yr = d.getFullYear()
    date.textContent = `${dt}-${mon}-${yr}`

    weekDays.forEach((wd, i) => {
        if (d.getDay() === i) {
            wd.classList = "border px-2 rounded text-blue-600 font-bold shadow-md"
        }else {
            wd.classList = "border px-2 rounded"
        }
    })
}

showTime()

setInterval(showTime,1000)