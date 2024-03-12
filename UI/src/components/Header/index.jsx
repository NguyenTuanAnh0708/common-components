import React from 'react'
import ListRouter from '../Router'
import style from './style.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={style.header}>
            <h2 className={style.title}>Dây là nav của dự án</h2>
            <div className={style.nav}>
                {ListRouter.map(ListRouter => (
                    <Link className={style.item} key={ListRouter.id} to={ListRouter.path} >
                        {ListRouter.name}
                    </Link>
                ))}
            </div>
        </header>
    )
}

export default Header