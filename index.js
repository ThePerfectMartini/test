

//이니셜라이즈



//초기변수설정
let iHave = 0
let had = 0
let purchase = 0
let cristalFight = 20
let cristalDaily = 20 + cristalFight + purchase
let check = 0
let count = 0

function init(){
    iHave = 0
    iHave += had
    check = 0
    count = 0
    cristalDaily = 20 + cristalFight + purchase
    nextMonth = new Date(toYear,toMonth,toDay)
    untilNextEvent = Math.ceil((Number(nextMonth) - Number(now))/(1000*60*60*24))
    datesBody.innerText = (toMonth+1).toString()+"월까지 " + "D-" + untilNextEvent.toString() + " 현재 보유 " + iHave.toString()
}

//날짜변수

let now = new Date()
let toYear = now.getFullYear()
let toMonth = now.getMonth()
let toDay = now.getDate()

let nextMonth = new Date(toYear,toMonth,toDay)







//이벤트리스너

let have = document.querySelector("#have")
have.addEventListener("change",iHad);

let dateSelector = document.querySelector("#dateSelect")
dateSelector.addEventListener("change",setup);
dateSelector.min = now.toISOString().substring(0,10);

let datesBody = document.querySelector("#datesBody")
let untilNextEvent = Math.ceil((Number(nextMonth) - Number(now))/(1000*60*60*24))

let boxCheck = document.querySelector("#check")
boxCheck.addEventListener("change",checking)


//함수정리
function iHad(event){
    had = Number(event.target.value)
    addSchedules()
}
function checking(event){
    if (event.target.checked === true){
        purchase += Number(event.target.defaultValue)
    }else{
        purchase -= Number(event.target.defaultValue)
    }
    addSchedules()

}
function setup(){
    toYear = Number(dateSelector.value.substr(0,4))
    toMonth = Number(dateSelector.value.substr(5,2))-1
    toDay = Number(dateSelector.value.substr(8,2))
    addSchedules()
}


function addSchedules(){
    init()
    for(untilNextEvent;untilNextEvent>=0;untilNextEvent--){
        let dayCount = new Date(now.getFullYear(),now.getMonth(),now.getDate()+count)
        let div = document.createElement('div')
        div.innerHTML = "<p>D-" + untilNextEvent.toString() + " 오늘은 " + dayCount.getDate().toString() + "일 " + whatDay(dayCount.getDay()) + "</p>" + 
        "<p>" + calculate() + "</p>"
        datesBody.appendChild(div)  
        count++
    }
}

function calculate(){
    iHave += cristalDaily + dailyCheck()
    return iHave
}

function dailyCheck(){
    check += 1
    if (check === 5){
        return 50
    } 
    else if (check >= 10){
        check = 0
        return 50
    }
    return 0
}

//주간미션은 월요일 4시 초기화 달성까지 적어도 이틀 요일이 화요일일때 120 추가하면 될듯

function whatDay(n){
    if (n === 1){
        return "월"
    }else if (n === 2){
        iHave += 120
        return "화"
    }else if (n === 3){
        return "수"
    }else if (n === 4){
        return "목"
    }else if (n === 5){
        return "금"
    }else if (n === 6){
        return "토"
    }else {
        return "일"
    }
}

function hide(){
    if (datesBody.className === 'hiden'){
        datesBody.classList.remove('hiden')
    }
    else {datesBody.className = 'hiden'
    }
}





// 코드실행
