import { Facebook, Instagram, Twitter, Youtube } from 'static/icons/'

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
          <Facebook />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://instagram.com/leuvargas"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/leuvargas"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://discord.com/invite/QevDJqCzaY"
          rel="noreferrer"
        >
          <Youtube />
        </a>
      </li>
    </ul>
  </header>
)
