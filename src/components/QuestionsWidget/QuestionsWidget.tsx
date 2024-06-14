import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import { Button } from '@yandex/ui/Button/desktop/bundle'
import { Text } from '@yandex/ui/Text/desktop/bundle'

import './QuestionsWidget.css'

import Item, { IQuestionsWidgetItemProps } from './__item/QuestionsWidget__item'
import Progress from '../Progress/Progress'
import Timer from '../Timer/Timer'

const blockName = cn('QuestionsWidget')()
const finalBlockName = cn('QuestionsWidget')({ end: true })

const elemHeaderName = cn(blockName, 'header')()
const elemContentName = cn(blockName, 'content')()

export interface IQuestionsWidgetProps {
    title: string,
    timeOff: number,
    questions: IQuestionsWidgetItemProps[]
}

const QuestionsWidget: FC<IQuestionsWidgetProps> = ({ title, timeOff, questions }) => {

    const currentQuestionSession = Number(localStorage.getItem('currentQuestion'))

    const [timeIsOff, setTimeIsOff] = React.useState(false)
    const [currentQuestion, setCurrentQuestion] = React.useState(currentQuestionSession || 0)

    const handleRestartTesting = () => {
        window.location.href = '/'
        localStorage.clear()
    }

    const onTimerOff = React.useCallback(() => setTimeIsOff(true), [timeIsOff])

    return currentQuestion <= questions.length - 1 && !timeIsOff ? <div className={blockName}>
        <div className={elemHeaderName}>
            <Text weight='bold' typography='headline-m'>{title}</Text>
            <Timer timeOff={timeOff} onTimerOff={onTimerOff} />
        </div>
        <Progress currentQuestion={currentQuestion} totalQuestions={questions.length} />
        <div className={elemContentName}>
            {
                questions.map((item, index) =>
                    <Item
                        view={item.view}
                        visible={currentQuestion === index}
                        key={index}
                        title={item.title}
                        variants={item.variants}
                        answer={item.answer}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion} />
                )
            }
        </div>
    </div> : <div className={finalBlockName}>
        <Text typography='headline-m'>{timeIsOff ? 'Время истекло' : 'Тест закончен'}</Text>
        <Button onClick={handleRestartTesting} size='s' view='default'>Пройти занова</Button>
    </div>
}


export default QuestionsWidget