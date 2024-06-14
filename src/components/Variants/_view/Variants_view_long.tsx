import React from 'react'
import { Enhance, IClassNameProps, withBemMod } from '@bem-react/core'

import { Textarea } from '@yandex/ui/Textarea/desktop/bundle'

import './Variants_view_long.css'

import { blockName } from '../Variants'

interface IVariantsViewLongProps extends IClassNameProps {
    title?: string,
    variants?: string[]
    onSelectAnswer?: (value: string) => void
}

const VariantsView: Enhance<IVariantsViewLongProps> = () => {

    class VariantsViewLong extends React.Component<IVariantsViewLongProps, any> {

        constructor(props: IVariantsViewLongProps) {
            super(props)
            this.props.title
                ? this.state = { value: localStorage.getItem(this.props.title) }
                : this.state = { value: null }

        }

        handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
            this.setState({ value: e.target.value })
            this.props.onSelectAnswer && this.props.onSelectAnswer(e.target.value)
        }

        render() {
            const { className } = this.props

            return <div className={`${blockName} ${className}`}>
                <Textarea
                    size="m"
                    view="default"
                    value={this.state.value}
                    onChange={this.handleOnChange.bind(this)}
                    placeholder='Напишите развернутый ответ на вопрос (не более 1000 символов)'
                    maxLength={1000}
                />
            </div>
        }
    }

    return VariantsViewLong
}

export const VariantsViewLong = withBemMod<IVariantsViewLongProps>('Variants', { view: 'long' }, VariantsView)
