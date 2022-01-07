// $lib/calenderUtils.js

class CalenderUtils {
    constructor() {
        var today = new Date();

        this.name = "Calender Utils"
        this.year = today.getFullYear()
        this.month = today.getMonth()

        this.day = today.getDate()

        this.currentYear = this.year
        this.currentMonth = this.month

        this.monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      
    }
    getDaysInMonth = () => {
        var date = new Date(this.currentYear, this.currentMonth, 1);
        var days = [];

        while (date.getMonth() === this.currentMonth) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        const startDay = days[0].toString().substring(0, 3)
        let daysToAdd = []

        for (let i in this.dayNames){
            let d = this.dayNames[i].substring(0, 3)
            if (d == startDay){
                break;
            }
            daysToAdd.push("New Day")
        }

        let dayNums = []

        for (let i in daysToAdd){
            dayNums.push(0)
        }

        for (let i in days){
            dayNums.push(parseInt(i) + 1)
        }

        return dayNums
    }

    nextMonth = () => {
        if (this.currentMonth == 11){
            this.currentYear = this.currentYear + 1
            this.currentMonth = 0
        } else {
            this.currentMonth++
        }
    }

    prevMonth = () => {
        console.log(this.currentMonth)
        if (this.currentMonth == 0){
            this.currentYear = this.currentYear - 1
            this.currentMonth = 11
        } else {
            this.currentMonth--
        }
    }

    getMonthName = () => {
        return this.monthNames[this.currentMonth]
    }

    backToNow = () => {
        this.currentMonth = this.month
        this.currentYear = this.year
    }

    isNow = () => {
        return (this.currentMonth == this.month) && (this.currentYear == this.year)
    }
}

export default CalenderUtils;