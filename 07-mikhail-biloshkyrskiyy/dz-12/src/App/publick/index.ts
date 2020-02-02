import {
    format,
    parse,
    setSeconds,
    getSeconds,
    getMinutes,
    getHours,
    setDate,
    getDate,
    getTime
} from 'date-fns'

import { iClock } from '~interface/iClock'

export class FakeDate {
    constructor() { }

    private date = new Date()
    private formatTime: string = format(this.date, 'HH:mm:ss')
    private formatDate: string = format(this.date, 'dd:MM:yy')

    get FormatTime(): string {
        return this.formatTime
    }
    set FormatTime(value: string) {
        this.formatTime = value
    }
    get FormatDate(): string {
        return this.formatDate
    }
    set FormatDate(value: string) {
        this.formatDate = value
    }
    /* setFakeDateTime - функция получает данные, сначала разпарсивает к 
    типу Date, функция format  приводит к данные к формату 'HH:mm:ss' 
    или 'dd:MM:yy', а также проверяет на наличие праввильно введеных 
    данных, если не праввильно ввиденные данные то функция посылает 
    throw с тестом об ошыбку */
    public setFakeDateTime(props: iClock) {
        try {
            const time = props.hour + "-" + props.minutes + "-" + props.seconds
            const date = props.date + "-" + props.month + "-" + props.year
            if (!(time === 'undefined-undefined-undefined' || date === 'undefined-undefined-undefined')) {
                this.FormatTime = format(parse(time, 'HH-mm-ss', new Date()), 'HH:mm:ss')
                this.FormatDate = format(parse(date, 'dd-MM-yyyy', new Date()), 'dd:MM:yy')

                const year: number = props.year as number
                const month: number = props.month as number
                const day: number = props.date as number
                const hour: number = props.hour as number
                const minutes: number = props.minutes as number
                const seconds: number = props.seconds as number

                this.date = new Date(year, month - 1, day, hour, minutes, seconds)
            }
        } catch (error) {
            throw 'Ошибка форматирования даты или времени'
        }
    }
    /* Now - this function adds 1 second to the time and 
    looks if it is possible to add 1 day, at addition 
    of which month or year is switched off */
    public now() {
        const seconds = this.getSeconds()
        const minutes = this.getMinutes()
        const hours = this.getHours()
        const date = this.getDate()

        if (seconds === 59 && minutes === 59 && hours === 23) {
            this.setDate(date + 1)
            this.setSeconds(seconds + 1)
        } else {
            this.setSeconds(seconds + 1)
        }
    }
    // Get the milliseconds timestamp of the given date.
    public countMilseconds():number {
        return getTime(this.date)
    }
    private setSeconds(seconds: number) {
        this.date = setSeconds(this.date, seconds)
        this.FormatTime = format(this.date, 'HH:mm:ss')
    }
    private getSeconds(): number {
        const seconds: number = getSeconds(this.date)
        if (seconds !== undefined) {
            return seconds
        } else {
            return 0
        }
    }
    private getMinutes(): number {
        const minutes: number = getMinutes(this.date)
        if (minutes !== undefined) {
            return minutes
        } else {
            return 0
        }
    }
    private getHours(): number {
        const hours: number = getHours(this.date)
        if (hours !== undefined) {
            return hours
        } else {
            return 0
        }
    }
    private setDate(date: number) {
        this.date = setDate(this.date, date)
        this.FormatDate = format(this.date, 'dd:MM:yy')
    }
    private getDate(): number {
        const date: number = getDate(this.date)
        if (date !== undefined) {
            return date
        } else {
            return 0
        }
    }
}