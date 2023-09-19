/* Importação de objetos */
import config from './config.js'
import abertura_jogo from './abertura_jogo.js'
import tela_sala from './tela_sala.js'
import tela_final from './tela_final.js'
import sala_m1 from './sala_m1.js'
import sala_m2 from './sala_m2.js'
import sala_m3 from './sala_m3.js'
import sala_m4 from './sala_m4.js'
import enigma_final from './enigma_final.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)
    //Adição de cenas que o index vai acessar
    this.scene.add('abertura_jogo', abertura_jogo)
    this.scene.add('tela_sala', tela_sala)
    this.scene.add('tela_final', tela_final)
    this.scene.add('sala_m1', sala_m1)
    this.scene.add('enigma_final', enigma_final)
    this.scene.add('sala_m2', sala_m2)
    this.scene.add('sala_m3', sala_m3)
    this.scene.add('sala_m4', sala_m4)
    this.scene.start('abertura_jogo')
    //Objetos comuns as cenas
    this.inventario = {}
    this.verifica_enigma = undefined
  }
}

/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
