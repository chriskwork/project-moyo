const testinput = document.querySelector(".test")
const testspan = document.querySelector(".testspan")
const testok = document.querySelector(".testok")

testspan.addEventListener("click", () => {
    testinput.style.pointerEvents = "auto"
    testinput.style.border = "1px solid red"
    testinput.focus()
    testinput.value = ""
    
})

testok.addEventListener("click", () => {
    testinput.value = testinput.value
    testinput.style.border = "0"
    testinput.style.pointerEvents = "none"
})