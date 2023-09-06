export default class abertura_jogo extends Phaser.Scene {

  constructor () {
    super('abertura_jogo')
  }

  preload() {
    this.load.image('tela_inicio', '../assets/imagens/tela_inicio.png')
    this.load.image('room_riddle', '../assets/imagens/room_riddle.png')
    this.load.image('setajump', '../assets/imagens/setajump.png')
    this.load.image('login', '../assets/imagens/icone_login.png')
    this.load.spritesheet('botao_start', '../assets/imagens/botao_start.png', {
      frameWidth: 192,
      frameHeight: 192
    })
    /*tela cheia*/
    this.load.spritesheet('tela-cheia', '../assets/imagens/tela-cheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create() {
    this.add.image(400, 225, 'tela_inicio')
    this.add.image(400, 150, 'room_riddle')
    this.add.image(720,380, 'login')
    
    /* provisório para ir onde estamos fazendo */
    this.pular = this.add.image(80, 380, 'setajump')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('abertura_jogo')
        this.game.scene.start('sala_m1')
      })

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
    /*tela cheia*/
    this.tela_cheia = this.add
      .sprite(750, 50, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)
  }
  /*temporizador para animação do botao*/
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