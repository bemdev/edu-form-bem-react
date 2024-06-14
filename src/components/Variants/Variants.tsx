import React, { FC } from 'react'
import { cn } from '@bem-react/classname'
import { compose } from '@bem-react/core'
import { IClassNameProps } from '@bem-react/core'

import { VariantsViewMulti } from './_view/Variants_view_multi'
import { VariantsViewLong } from './_view/Variants_view_long'
import { VariantsViewShort } from './_view/Variants_view_short'

import {
    Radiobox,
    Radio,
} from '@yandex/ui/Radiobox/desktop/bundle'

import './Variants.css'

export const blockName = cn('Variants')()

export interface IVariantsProps extends IClassNameProps {
    title: string,
    variants: string[]
    view: string | null
    onSelectAnswer: (value: string) => void
}

const Variants: FC<IVariantsProps> = ({ variants, title, onSelectAnswer }) => {

    const valueFromSession = localStorage.getItem(title)

    const [value, setValue] = React.useState<string | null>(valueFromSession || null)

    const handleOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        onSelectAnswer(e.target.value)
    }, [onSelectAnswer])

    return (
        <Radiobox
            className={blockName}
            size="s"
            view="default"
            value={value}
            onChange={handleOnChange}>
            {
                variants.map((variant, index) =>
                    <Radio key={index} value={variant}>{variant}</Radio>)
            }
        </Radiobox>
    )
}

export default compose(
    VariantsViewMulti,
    VariantsViewLong,
    VariantsViewShort
)(Variants)