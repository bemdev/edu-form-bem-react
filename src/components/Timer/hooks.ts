import { useEffect, useState } from 'react'

const seconds2time = (seconds: number) => {
    let hours = Math.floor(seconds / 3600);
    let minutes: any = Math.floor((seconds - (hours * 3600)) / 60);
    let _seconds = seconds - (hours * 3600) - (minutes * 60);
    let time = "";

    if (hours !== 0) {
        time = hours + ":";
    }
    if (minutes !== 0 || time !== "") {
        minutes = (minutes < 10 && time !== "") ? "0" + minutes : String(minutes);
        time += minutes + ":";
    }
    if (time === "") {
        time = _seconds + " сек.";
    }
    else {
        time += (_seconds < 10) ? "0" + _seconds : String(_seconds);
    }
    return time;
}

export const useTimer = (timeOff: number, onTimerOff: () => void) => {

    const timeFromSession = localStorage.getItem('timer')
    const [time, setTime]: any = useState(timeFromSession || timeOff)

    useEffect(() => {
        if (time > 0) {
            const intervalId = setInterval(() => {
                setTime(time - 1);
                localStorage.setItem('timer', time)
            }, 1000);
            return () => {
                clearInterval(intervalId);
            };
        } else {
            onTimerOff()
        }
    }, [time])

    return { time: seconds2time(time) }
}