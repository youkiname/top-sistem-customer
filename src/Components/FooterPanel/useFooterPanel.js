import React, {useState} from 'react';
import homeIcon from "../../img/home-icon.svg";
import catalogIcon from "../../img/catalog-icon.svg";
import messengerIcon from "../../img/messeger-icon.svg";
import profileIcon from "../../img/profile-icon.svg";
import {FooterPanelUI} from "./FooterPanelUI";

const menu = [
    {
        title: 'Home',
        svg: homeIcon
    },
    {
        title: 'Catalog',
        svg: catalogIcon
    },
    {
        title: 'Messenger',
        svg: messengerIcon
    },
    {
        title: 'Profile',
        svg: profileIcon
    },
]

export const useFooterPanel = ({active, count = '2 359'}) => {
    const [activeState, setActiveState] = useState({
        home: active === 'home' || false,
        catalog: active === 'catalog' || false,
        messenger: active === 'messenger' || false,
        profile: active === 'profile' || false
    })

    const activeIcon = "#4F31C2"
    const notActiveIcon = "#B3B3B3"

    return {
        menu,
        activeState, setActiveState,
        activeIcon,
        notActiveIcon,
        active, count,
    }
};

const FooterPanel = (props) => {
    return <FooterPanelUI {...useFooterPanel(props)} />
}

export {FooterPanel}

