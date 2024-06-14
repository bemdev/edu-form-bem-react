import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import './Timer.css'
import { useTimer } from './hooks'
export const blockName = cn('Timer')()

interface ITimerProps {
    timeOff: number,
    onTimerOff: () => void
}

const Timer: FC<ITimerProps> = ({ timeOff, onTimerOff }) => {
    const { time } = useTimer(timeOff, onTimerOff)
    return <div className={blockName}>{time}</div>
}

export default Timer