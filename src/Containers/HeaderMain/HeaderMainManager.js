import React from "react";
import {ProfileDisplay} from "../../Components/ProfileDisplay";
import {QRButton} from "../../Components/QRButton";
import cls from './HeaderMain.module.scss'
import {BonusCard} from "../../Components/BonusCard";
import {LayoutContainer} from "../../Layouts/LayoutContainer/LayoutContainer";
import {Logo} from "../../Components/BonusCard/Logo";
import {useBackground} from "./hook/useBackground";
import {CashbackDisplay} from "./Components/CashbackDisplay";

const HeaderMainManager = () => {
    const {background} = useBackground()

    return (
        <div
            className={cls.wrapper}
            style={background}
        >
            <LayoutContainer>
                <div className={cls.logo}>
                    <Logo/>
                </div>
                <ProfileDisplay type={'full'}/>
                <div className={cls.secondRow}>
                    <QRButton/>
                    <CashbackDisplay />
                </div>
            </LayoutContainer>
        </div>
    )
}

export {HeaderMainManager}