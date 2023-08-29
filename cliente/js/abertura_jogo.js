export default class abertura_jogo extends Phaser.Scene {

  constructor () {
    super('abertura_jogo')
  }

  preload() {
    this.load.image('tela_inicio', '../assets/imagens/tela_inicio.png')
    this.load.image('room_riddle', '../assets/imagens/room_riddle.png')
    this.load.spritesheet('botao_start', '../assets/imagens/botao_start.png', {
      frameWidth: 192,
      frameHeight: 192
    })
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create() {
    this.add.image(400, 225, 'tela_inicio')
    this.add.image(400, 150, 'room_riddle')

    this.anims.create({
      key: 'botao',
      frames: this.anims.generateFrameNumbers('botao_start', {
        start: 0,
        end: 5
      }),
      frameRate: 8
    })

    this.timer = 0
    this.jogar = this.add.sprite(390, 380, 'botao_start')
      .setInteractive()
      .on('pointerdown', () => {
        this.jogar.anims.play('botao')
        this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.countdown,
          callbackScope: this,
          loop: true
        })
      })
  }

  countdown() {
    this.timer -= 0.5
    if (this.timer <= 0) {
      this.jogar.destroy()
      this.timedEvent.destroy()
      this.game.scene.stop('abertura_jogo')
      this.game.scene.start('tela_sala')
    }
  }

  update() { }

}