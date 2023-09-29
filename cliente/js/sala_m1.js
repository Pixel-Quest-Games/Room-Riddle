export default class sala_m1 extends Phaser.Scene {
constructor() {
  super('sala_m1')
}

preload() {
  this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
  this.load.image('porta_final', '../assets/imagens/porta_final.png')
  this.load.image('porta_final_aberta', '../assets/imagens/porta_final_aberta.png')
  this.load.image('inventario', '../assets/imagens/inventario.png')
  this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
  this.load.image('seta_d', '../assets/imagens/seta_direita.png')
  this.load.image('enigma_final', '../assets/imagens/enigma_final.png')
  this.load.image('mesa', '../assets/imagens/mesa_m1.png')
  this.load.image('cofre', '../assets/imagens/cofre.png')
  this.load.image('papel_enrolado', '../assets/imagens/papel_enrolado.png')
  this.load.image('walkie_talkie', '../assets/imagens/walkie_talkie.png')
  this.load.image('estante', '../assets/imagens/estante.png')

  this.load.script(
    'webfont',
    'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
  )
}


create() {
  this.game.inventario
  this.add.image(400, 225, 'parede_mia')
  if (this.game.verifica_enigma === 'V') {
    this.add.image(400, 323, 'porta_final_aberta')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('tela_final')
      })
  } else {
    this.add.image(400, 323, 'porta_final')
  }

  this.add.image(400, 50, 'inventario')
  //Configuração da cena enigma_final
  this.add.image(400, 175, 'enigma_final')
    .setInteractive()
    .on('pointerdown', () => {
      this.game.scene.stop('sala_m1')
      this.game.scene.start('enigma_final')
    })
  //Configuração do carrosel de cenas
  this.add.image(25, 225, 'seta_e')
    .setInteractive()
    .on('pointerdown', () => {
      this.game.scene.stop('sala_m1')
      this.game.scene.start('sala_m4')
    })

  this.add.image(775, 225, 'seta_d')
    .setInteractive()
    .on('pointerdown', () => {
      this.game.scene.stop('sala_m1')
      this.game.scene.start('sala_m2')
    })
  this.add.image(620,390, 'mesa')
  this.add.image(670, 328, 'cofre')
    .setInteractive()
    .on('pointerdown', () => {
      this.game.scene.stop('sala_m1')
      this.game.scene.start('tela_cofre')
    })
  this.add.image(600, 337, 'papel_enrolado')
    .setInteractive()
    .on('pointerdown', () => {
      this.game.scene.stop('sala_m1')
      this.game.scene.start('tela_papel')
    })
  this.add.image(545, 332, 'walkie_talkie')
  this.add.image(100, 395, 'estante')
}
update() { }
}