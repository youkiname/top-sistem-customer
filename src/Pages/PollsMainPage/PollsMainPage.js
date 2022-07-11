import React from 'react'

import { FooterPanel } from '../../Components/FooterPanel'
import { Messages } from '../../Components/Messages'
import { LayoutContent } from '../../Layouts/LayoutContent'
import cls from '../CatalogPage/CatalogPage.module.scss'
import { HeaderProfilePage } from '../ProfilePage/Components/HeaderProfilePage'


const PollsMainPage = () => {
	return (
		<div className={cls.catalogPage}>
			<HeaderProfilePage avatar={false} />
			<LayoutContent>
				<Messages />
			</LayoutContent>
			<FooterPanel active={'messenger'} />
		</div>
	)
}

export default PollsMainPage