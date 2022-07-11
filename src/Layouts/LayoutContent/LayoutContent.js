import React from 'react';

import cls from './LayoutContent.module.scss'
import {LayoutContainer} from "../LayoutContainer/LayoutContainer";

const LayoutContent = ({children}) => {
    return (
        <div className={cls.layoutContent}>
            <LayoutContainer>
                {children}
            </LayoutContainer>
        </div>
    );
};

export {LayoutContent};
