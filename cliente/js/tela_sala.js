export default class tela_sala extends Phaser.Scene {

  constructor () {
    super('tela_sala')
  }

  preload() {
    this.load.image('tela_salas', '../assets/imagens/tela_salas.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create() {
    this.add.image(400, 225, 'tela_salas')
  }
    update() { }
  
  }