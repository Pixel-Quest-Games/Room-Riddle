/* Importação de objetos */
import config from './config.js'
import abertura_jogo from './abertura_jogo.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura_jogo', abertura_jogo)
    this.scene.start('abertura_jogo')
  }
}

/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
