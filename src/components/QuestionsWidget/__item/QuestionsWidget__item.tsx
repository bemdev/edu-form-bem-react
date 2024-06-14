import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import { Text } from '@yandex/ui/Text/desktop/bundle'
import { Button } from '@yandex/ui/Button/desktop/bundle'

import './QuestionsWidget__item.css'
import Variants from '../../Variants/Variants'

const elemName = cn('QuestionsWidget', 'item')()

export interface IQuestionsWidgetItemProps {
    title: string,
    variants: string[],
    answer: string | string[],
    view: string | null,
}

interface IQuestionsWidgetItemWithActionsProps extends IQuestionsWidgetItemProps {
    visible: boolean,
    currentQuestion: number,
    setCurrentQuestion: (currentQuestion: number) => void
}

const Item: FC<IQuestionsWidgetItemWithActionsProps> = ({
    title,
    variants,
    // answer,
    visible,
    view,
    currentQuestion,
    setCurrentQuestion
}) => {

    const [processing, setProcessing] = React.useState(false)

    const isDisabled = React.useCallback(() => localStorage.getItem(title) === null ? true : false, [title])

    const saveAnswer = React.useCallback((value: string) => {
        localStorage.setItem(title, value)
        setProcessing(!processing)
    }, [setProcessing, processing, title])

    const handleClickToChangeQuestion = React.useCallback(() => {
        setCurrentQuestion(currentQuestion + 1)
        localStorage.setItem('currentQuestion', (currentQuestion + 1).toString())
    }, [setCurrentQuestion, currentQuestion])

    return visible ? (
        <div className={elemName}>
            <Text weight='bold' typography='subheader-m'>{title}</Text>
            <Variants title={title} onSelectAnswer={saveAnswer} variants={variants} view={view} />
            <Button disabled={isDisabled()} onClick={handleClickToChangeQuestion} size='s' view='action'>Ответить</Button>
        </div>
    ) : null
}


export default Item