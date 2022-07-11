import React from 'react';
import cls from "../ProfilePage.module.scss";
import {BackArrow} from "../../../Components/UI/BackArrow";
import {Logo} from "../../../Components/BonusCard/Logo";
import {ProfileDisplay} from "../../../Components/ProfileDisplay";
import {LayoutContainer} from "../../../Layouts/LayoutContainer/LayoutContainer";

const HeaderProfilePage = ({avatar}) => {
    return (
        <div>
            <LayoutContainer>
                <div className={cls.header}>
                    <BackArrow/>
                    <Logo width={true}/>
                </div>
                {avatar && <div className={cls.profile}>
                    <ProfileDisplay type={'light'}/>
                </div>}
            </LayoutContainer>
        </div>
    );
};

export {HeaderProfilePage};
