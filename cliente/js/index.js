/* Importação de objetos */
import config from './config.js'
import abertura_jogo from './abertura_jogo.js'
import tela_sala from './tela_sala.js'
import sala_s1 from './sala_s1.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura_jogo', abertura_jogo)
    this.scene.add('tela_sala', tela_sala)
    this.scene.add('sala_s1', sala_s1)
    this.scene.start('abertura_jogo')
  }
}

/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
