import React from "react";
import cls from './LayoutContainer.module.scss'

export const LayoutContainer = ({children}) => {
    return (
        <div className={cls.container}>
            {children}
        </div>
    )
}