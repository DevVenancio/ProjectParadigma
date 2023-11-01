var existOldDaysValue = true
var existOldMonthValue = true
var existOldYearValue = true

var oldDaysValue = 0
var oldMonthValue = 0
var oldYearValue = 0

var daysValue = 0
var monthValue = 0
var yearValue = 0

///On Focus
function getOldValues(){
    oldDaysValue = document.getElementById("daysValue").value
    oldMonthValue = document.getElementById("monthValue").value
    oldYearValue = document.getElementById("yearValue").value
}


function existOldValueForDays(){
    if(oldDaysValue == daysValue){
        return false
    }
    if(oldDaysValue == "" && daysValue == ""){
        return false
    }
    return true
}

function existOldValueForMonth(){
    if(oldMonthValue == monthValue){
        return false
    }
    if(oldMonthValue == "" && monthValue == ""){
        return false
    }
    return true
}

function existOldValueForYear(){
    if(oldYearValue == yearValue){
        return false
    }
    if(oldYearValue == "" && yearValue == ""){
        return false
    }
    return true
}

function convertDays(){

    daysValue = document.getElementById("daysValue").value
    monthValue = document.getElementById("monthValue").value
    yearValue = document.getElementById("yearValue").value
    
    existOldDaysValue = existOldValueForDays()
    existOldMonthValue = existOldValueForMonth()
    existOldYearValue = existOldValueForYear()

    if(existOldDaysValue == true && existOldMonthValue == false && existOldYearValue == false){
        const daysConverted = daysValue
        const monthConverted = daysValue / 30
        const yearConverted = daysValue / 365 

        document.getElementById("daysValue").value = daysConverted
        document.getElementById("monthValue").value = monthConverted
        document.getElementById("yearValue").value = yearConverted

    }else if(existOldDaysValue == false && existOldMonthValue == true && existOldYearValue == false){
        const daysConverted = monthValue * 30
        const monthConverted = monthValue
        const yearConverted = monthValue / 12 

        document.getElementById("daysValue").value = daysConverted
        document.getElementById("monthValue").value = monthConverted
        document.getElementById("yearValue").value = yearConverted

    }else if(existOldDaysValue == false && existOldMonthValue == false && existOldYearValue == true){
        const daysConverted = yearValue * 365
        const monthConverted = yearValue * 12
        const yearConverted = yearValue

        document.getElementById("daysValue").value = daysConverted
        document.getElementById("monthValue").value = monthConverted
        document.getElementById("yearValue").value = yearConverted

    }

}