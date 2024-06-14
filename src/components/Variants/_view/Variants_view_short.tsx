import React from 'react'
import { Enhance, IClassNameProps, withBemMod } from '@bem-react/core'

import { Textarea } from '@yandex/ui/Textarea/desktop/bundle'

import './Variants_view_short.css'

import { blockName } from '../Variants'

interface IVariantsViewShortProps extends IClassNameProps {
    title?: string,
    variants?: string[],
    onSelectAnswer?: (value: string) => void
}

const VariantsView: Enhance<IVariantsViewShortProps> = () => {

    class VariantsViewShort extends React.Component<IVariantsViewShortProps, any> {

        constructor(props: IVariantsViewShortProps) {
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
                    placeholder='Напишите короткий ответ на вопрос (не более 150 символов)'
                    maxLength={150}
                />
            </div>
        }
    }

    return VariantsViewShort
}

export const VariantsViewShort = withBemMod<IVariantsViewShortProps>('Variants', { view: 'short' }, VariantsView)
