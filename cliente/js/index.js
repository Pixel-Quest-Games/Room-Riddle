/* eslint-disable no-undef */
/* Importação de objetos */
import config from './config.js'
import aberturajogo from './abertura_jogo.js'
import telasala from './tela_sala.js'
import telafinal from './tela_final.js'
import salam1 from './sala_m1.js'
import salam2 from './sala_m2.js'
import salam3 from './sala_m3.js'
import salam4 from './sala_m4.js'
import enigmafinal from './enigma_final.js'
import telacofre from './tela_cofre.js'
import telapapel from './tela_papel.js'
import cofreaberto from './cofre_aberto.js'
import gaveta4 from './tela_gaveta4.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    // Adição de cenas que o index vai acessar
    this.socket = io()
    this.socket.on('connect', () => {
      console.log('Conectado ao servidor!')
    })

    this.scene.add('abertura_jogo', aberturajogo)
    this.scene.add('tela_sala', telasala)
    this.scene.add('tela_final', telafinal)
    this.scene.add('sala_m1', salam1)
    this.scene.add('enigma_final', enigmafinal)
    this.scene.add('sala_m2', salam2)
    this.scene.add('sala_m3', salam3)
    this.scene.add('sala_m4', salam4)
    this.scene.add('tela_cofre', telacofre)
    this.scene.add('tela_papel', telapapel)
    this.scene.add('cofre_aberto', cofreaberto)
    this.scene.add('gaveta4', gaveta4)
    this.scene.start('abertura_jogo')
    // Objetos comuns as cenas
    this.inventario = {}
    this.verifica_enigma = 'F'
    this.verifica_enigma2 = 'F'
  }
}

/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
