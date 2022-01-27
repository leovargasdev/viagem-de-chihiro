import { ReactSVG } from 'react-svg'

import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <img src="logo.png" alt="Logo do Studio Ghibli" />

    <ul>
      <li>
        <a
          target="_blank"
          href="https://github.com/LeeonardoVargas"
          rel="noreferrer"
        >
          <ReactSVG src="icons/facebook.svg" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://instagram.com/leuvargas"
          rel="noreferrer"
        >
          <ReactSVG src="icons/instagram.svg" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/leuvargas"
          rel="noreferrer"
        >
          <ReactSVG src="icons/twitter.svg" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://discord.com/invite/QevDJqCzaY"
          rel="noreferrer"
        >
          <ReactSVG src="icons/youtube.svg" />
        </a>
      </li>
    </ul>
  </header>
)
