import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';



const UseHeader = () => {

  const [title, setTitle] = React.useState('');
  const location =  useLocation()
 
  React.useEffect(() => {
    setTitle(location.pathname)
    if('/conta/estatisticas' === location.pathname) setTitle('Estatísticas')
    if('/conta/postar' === location.pathname) setTitle('Poste Sua Foto')
    if('/conta' === location.pathname) setTitle('Minha Conta')
  }, [useLocation()])


  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UseHeader
