import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import './Progress.css'

const blockName = cn('Progress')()

interface IProgressProps {
    currentQuestion: number,
    totalQuestions: number
}

const Progress: FC<IProgressProps> = ({ totalQuestions, currentQuestion }) => {

    const getStatusProgress = React.useCallback(
        (index: number) => {
            if (currentQuestion === index) return 'active'
            if (currentQuestion > index) return 'seen'
            return ''
        }, [currentQuestion]
    )

    return <div className={blockName}>
        {
            [...Array(totalQuestions).keys()].map((itemNumber, index) => {
                return <div className={getStatusProgress(index)} key={index}></div>
            })
        }
    </div>
}

export default Progress