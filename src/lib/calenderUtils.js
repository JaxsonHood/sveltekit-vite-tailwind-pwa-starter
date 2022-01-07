// $lib/calenderUtils.js

class CalenderUtils {
    constructor() {
        var today = new Date();

        this.name = "App Utils"
        this.year = today.getFullYear()
        this.month = today.getMonth()

        this.day = today.getDay()

        this.currentYear = this.year
        this.currentMonth = this.month

        this.monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
      
    }
    getDaysInMonth = () => {
        var date = new Date(this.currentYear, this.currentMonth, 1);
        var days = [];

        while (date.getMonth() === this.currentMonth) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return days;
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