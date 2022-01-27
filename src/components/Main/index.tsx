import styles from './styles.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.content}>
      <h2>HAYAO MIYAZAKI</h2>
      <h1>A VIAGEM DE CHIHIRO</h1>
      <p>
        Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
        desobedecem são transformados em animais.
      </p>

      <div className={styles.buttons}>
        <button type="button" className={styles['btn-play-now']}>
          <img src="icons/play.svg" />
          Assistir agora
        </button>
        <button type="button" className={styles['btn-watch-trailer']}>
          Assistir trailer
        </button>
      </div>
    </div>
    <div className={styles.ghosts}>
      <img src="banner.png" alt="Imagens ilustrando dois fantasminhas" />
    </div>
  </main>
)
