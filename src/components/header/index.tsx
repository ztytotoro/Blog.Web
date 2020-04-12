import React, { createRef, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@fluentui/react'
import { VisitorInfoCard } from '../visitor-info-card'
import css from './index.scss'

export const Header: React.FC = () => {
    const icon = createRef<HTMLElement>()
    const [hideCard, toggleCard] = useState(true)
    return (
        <div className={css.header}>
            <span className={css.headerTitle}>
                <Link href="/">
                    <a>CatLien</a>
                </Link>
            </span>
            <div className={css.headerAvator}>
                <span ref={icon} onClick={() => toggleCard(false)}>
                    <Icon iconName="PartlyCloudyNight" />
                </span>

                <VisitorInfoCard target={icon.current} hidden={hideCard} />
            </div>
        </div>
    )
}
