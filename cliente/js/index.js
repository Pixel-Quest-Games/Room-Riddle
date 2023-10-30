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
import salas1 from './sala_s1.js'
import enigmafinal from './enigma_final.js'
import telacofre from './tela_cofre.js'
import telapapel from './tela_papel.js'
import cofreaberto from './cofre_aberto.js'
import gaveta4 from './tela_gaveta4.js'
import enigma2 from './tela_en2.js'
import enigma5 from './tela_en5.js'
import recompensa from './tela_recompensa.js'

/* Definição do objeto Game */
class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.id = 1 // Jogo Pesadelos Lúcidos, id 1
    this.valor = 100 // crédito padrão em Tijolinhos quando termina o jogo

    let iceServers
    if (window.location.host === 'feira-de-jogos.sj.ifsc.edu.br') {
      iceServers = [
        {
          urls: 'stun:feira-de-jogos.sj.ifsc.edu.br'
        },
        {
          urls: 'turns:feira-de-jogos.sj.ifsc.edu.br',
          username: 'adcipt',
          credential: 'adcipt20232'
        }
      ]
    } else {
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
    this.iceServers = { iceServers }
    this.audio = document.querySelector('audio')

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
    this.scene.add('sala_s1', salas1)
    this.scene.add('tela_cofre', telacofre)
    this.scene.add('tela_papel', telapapel)
    this.scene.add('cofre_aberto', cofreaberto)
    this.scene.add('gaveta4', gaveta4)
    this.scene.add('enigma2', enigma2)
    this.scene.add('enigma5', enigma5)
    this.scene.add('recompensa', recompensa)
    this.scene.start('abertura_jogo')
    // Objetos comuns as cenas
    this.inventario = {}
    this.verifica_enigma = 'F'
    this.verifica_enigma2 = 'F'
    // Lista de objetos para inventario
    /* this.inventarioLista = [
      {
        numero: '1',
        x: 84,
        y: 210,
        objeto: undefined
      },
      {
        numero: '2',
        x: 242,
        y: 210,
        objeto: undefined
      },
      {
        numero: '3',
        x: 406,
        y: 210,
        objeto: undefined
      },
      {
        numero: '4',
        x: 568,
        y: 210,
        objeto: undefined
      },
      {
        numero: '5',
        x: 714,
        y: 210,
        objeto: undefined
      },
      {
        numero: '6',
        x: 84,
        y: 354,
        objeto: undefined
      },
      {
        numero: '7',
        x: 242,
        y: 354,
        objeto: undefined
      },
      {
        numero: '8',
        x: 406,
        y: 354,
        objeto: undefined
      },
      {
        numero: '9',
        x: 568,
        y: 354,
        objeto: undefined
      },
      {
        numero: '10',
        x: 714,
        y: 354,
        objeto: undefined
      }
    ]
    // Ações para a lista
    this.adicionaItem(imagem => {
      this.inventarioLista.every(element => {
        if (this.inventarioLista.objeto === undefined) {
          this.inventarioLista.objeto.push(imagem)
          if (this.inventarioLista.objeto === undefined) {
            return false
          } else {
            return true
          }
        }
      });
    })
    this.removeItem() => {
      array.forEach(element => {

      });
    } */
  }
}

/* Criação do objeto Game */
window.onload = () => {
  window.game = new Game()
}
