import React from 'react'
import { Enhance, IClassNameProps, withBemMod } from '@bem-react/core'

import { Checkbox } from '@yandex/ui/Checkbox/desktop/bundle'

import './Variants_view_multi.css'

import { blockName } from '../Variants'

interface IVariantsViewMultiProps extends IClassNameProps {
    title?: string,
    variants?: string[],
    onSelectAnswer?: (value: string) => void
}

const VariantsView: Enhance<IVariantsViewMultiProps> = () => {

    class VariantsViewMulti extends React.Component<IVariantsViewMultiProps, any> {

        constructor(props: IVariantsViewMultiProps) {
            super(props)

            let tmpValues = {}

            this.props.title &&
                localStorage.getItem(this.props.title)?.split(',')
                    .map(item => tmpValues = { ...tmpValues, [item]: true })

            this.state = tmpValues

        }

        handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
            const payload = { ...this.state, [e.target.name]: e.target.checked }
            this.setState(payload)

            this.props.onSelectAnswer && this.props.onSelectAnswer(
                Object.keys(payload).filter(key => payload[key]).toString()
            )
        }

        render() {
            const { className, variants } = this.props

            return <div className={`${blockName} ${className}`}>
                {
                    variants?.map((variant, index) => {
                        return <Checkbox
                            key={index}
                            label={variant}
                            size="s"
                            view="default"
                            name={variant}
                            onChange={this.handleOnChange.bind(this)}
                            checked={this.state[variant]}
                        />
                    })
                }
            </div>
        }
    }

    return VariantsViewMulti
}

export const VariantsViewMulti = withBemMod<IVariantsViewMultiProps>('Variants', { view: 'multi' }, VariantsView)
