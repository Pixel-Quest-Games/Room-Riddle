/* eslint-disable no-undef */
export default class salam1 extends Phaser.Scene {
  constructor () {
    super('sala_m1')
  }

  preload () {
    this.load.image('parede_mia1', '../assets/imagens/parede_mia1.png')
    // this.load.image('porta_final', '../assets/imagens/porta_final.png')
    this.load.image('porta_final_aberta', '../assets/imagens/porta_final_aberta.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('enigma_final', '../assets/imagens/enigma_final.png')
    this.load.image('mesa', '../assets/imagens/mesa_m1.png')
    this.load.image('cofre', '../assets/imagens/cofre.png')
    this.load.image('papel_enrolado', '../assets/imagens/papel_enrolado.png')
    this.load.image('walkie_talkie', '../assets/imagens/walkie_talkie.png')
    // this.load.image('estante', '../assets/imagens/estante.png')
    this.load.image('suporte_bonecos', '../assets/imagens/suporte_bonecos.png')
    this.load.image('boneco_homem_p', '../assets/imagens/boneco_homem_p.png')
    this.load.image('boneco_mulher_p', '../assets/imagens/boneco_mulher_p.png')
    this.load.image('vaso1', '../assets/imagens/vaso1.png')
    this.load.image('abre_gaveta', '../assets/imagens/abre_gaveta.png')

    this.load.script(
      'webfont',
      'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    )
    this.load.audio('glitch', '../assets/audios/glitch_radio.mp3')
  }

  create () {
    this.glitch = this.sound.add('glitch')
    this.add.image(400, 225, 'parede_mia1')
    if (this.game.verifica_enigma === 'V') {
      this.add.image(400, 323, 'porta_final_aberta')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_m1')
          this.game.scene.start('tela_final')
        })
    } // else {
    // this.add.image(400, 323, 'porta_final')
    // }

    this.add.image(400, 50, 'inventario')

    this.add.image(400, 175, 'enigma_final')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('enigma_final')
      })

    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('sala_m4')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.cameras.main.fadeOut(100, 0, 0, 0)
        this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.countdown,
          callbackScope: this,
          loop: true
        })
        
      })
    this.add.image(620, 400, 'mesa')
    this.add.image(670, 334, 'cofre')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.game.enigmacofrecompleto === true) { console.log('enigma completo') } else {
          this.game.scene.stop('sala_m1')
          this.game.scene.start('tela_cofre')
        }
      })
    this.add.image(615, 343, 'papel_enrolado')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('tela_papel')
      })
    this.add.image(114, 314, 'suporte_bonecos')
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.stop('sala_m1')
        this.scene.start('enigma2')
      })
    this.add.image(560, 338, 'walkie_talkie')
      .setInteractive()
      .on('pointerdown', () => {
        this.glitch.play()
      })
    // this.add.image(100, 395, 'estante')
    this.add.image(114, 304, 'boneco_homem_p')
    this.add.image(97, 304, 'boneco_mulher_p')
    this.add.image(275, 418, 'vaso1')

    this.add.image(100, 412, 'abre_gaveta')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('gaveta4')
      })
    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
      this.time.delayedCall(1000, () => {
        this.scene.start('phaser-logo')
      })
    })
  }

  countdown () {
    this.timer -= 2
    if (this.timer <= 0) {
      this.game.scene.stop('sala_m1')
      this.cameras.mais.fadeIn(100, 0, 0, 0)
      this.game.scene.start('sala_m2')
    }
  }

  update () { }
}
