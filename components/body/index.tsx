import React from 'react'
import css from './index.scss'

export const Body: React.FC = ({ children }) => {
    return <div className={css.body}>{children}</div>
}
