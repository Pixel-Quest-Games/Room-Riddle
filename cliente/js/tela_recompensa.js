// eslint-disable-next-line no-undef
export default class recompensa extends Phaser.Scene {
  constructor () {
    super('recompensa')
  }

  preload() {
    this.load.image('recompensa', '../assets/imagens/tela_recompensa.png')
    this.load.image('botao_login', '../assets/imagens/botao_login.png')
  }

  create() {
    this.add.image(this.game.config.width * 0.5, this.game.config.height * 0.5, 'recompensa')

    this.posicao = ''

    this.usuarioTextoBase = 'Usuário: '
    this.usuarioDigitado = ''
    this.usuario = this.add.text(450, 150, this.usuarioTextoBase, {
      fontFamily: 'monospace',
      font: '32px Courier',
      fill: '#ffffff'
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.posicao = 'usuário'
        this.usuario.setFill('#ffffff')
        this.senha.setFill('#000000')
        this.voltar.x = 750
        this.voltar.y = this.usuario.y
      })

    this.senhaTextoBase = 'Senha: '
    this.senhaDigitada = ''
    this.senha = this.add.text(450, 250, this.senhaTextoBase, {
      fontFamily: 'monospace',
      font: '32px Courier',
      fill: '#ffffff'
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.posicao = 'senha'
        this.usuario.setFill('#000000')
        this.senha.setFill('#ffffff')
        this.voltar.x = 750
        this.voltar.y = this.senha.y
      })

    const teclado = [...Array(10).keys()]
    teclado.forEach(digito => {
      const valor = (digito + 1) % 10
      this.add.text(80 * ((digito % 3) + 1), 100 * (Math.floor(digito / 3) + 1), valor, {
        fontFamily: 'monospace',
        font: '32px Courier',
        fill: '#ffffff'
      })
        .setInteractive()
        .on('pointerdown', () => {
          if (this.posicao === 'usuário') {
            if (this.usuarioDigitado.length < 4) {
              this.usuarioDigitado += valor
              this.usuario.text = this.usuarioTextoBase + this.usuarioDigitado
            }
          } else if (this.posicao === 'senha') {
            if (this.senhaDigitada.length < 4) {
              this.senhaDigitada += valor
              let senhaOculta = ''
              Array.from(this.senhaDigitada).forEach(numero => {
                senhaOculta += '*'
              })
              this.senha.text = this.senhaTextoBase + senhaOculta
            }
          }
          if (this.usuarioDigitado.length === 4 && this.senhaDigitada.length === 4) {
            this.enviar = this.add.text(450, 300, '[ENVIAR]', {
              fontFamily: 'monospace',
              font: '64px Courier',
              fill: '#ffffff'
            })
              .setInteractive()
              .on('pointerdown', () => {
                axios.post('https://feira-de-jogos.sj.ifsc.edu.br/api/v1/credito', {
                  id: this.usuarioDigitado,
                  senha: this.senhaDigitada,
                  jogo: this.game.id,
                  valor: this.game.valor
                })
                  .then((response) => {
                    if (response.status === 200) {
                      this.enviar.destroy()
                      this.tempo = 2
                      this.relogio = this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                          this.tempo--
                          if (this.tempo === 0) {
                            this.relogio.destroy()
                            this.scene.stop('recompensa')
                            this.scene.start('aberturajogo')
                          }
                        },
                        callbackScope: this,
                        loop: true
                      })
                    }
                  })
                  .catch((error) => {
                    if (error.response.status === 401) {
                      this.enviar.text = '[401]'
                      this.tempo = 2
                      this.relogio = this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                          this.tempo--
                          if (this.tempo === 0) {
                            this.relogio.destroy()
                            this.enviar.destroy()
                          }
                        },
                        callbackScope: this,
                        loop: true
                      })
                    }
                    console.error(error)
                  })
              })
          }
        })
    })

    this.voltar = this.add.text(800, 100, '<', {
      fontFamily: 'monospace',
      font: '32px Courier',
      fill: '#ffffff'
    })
      .setInteractive()
      .on('pointerdown', () => {
        if (this.posicao === 'usuário') {
          if (this.usuarioDigitado.length > 0) {
            this.usuarioDigitado = this.usuarioDigitado.slice(0, -1)
            this.usuario.text = this.usuarioTextoBase + this.usuarioDigitado
          }
        } else if (this.posicao === 'senha') {
          if (this.senhaDigitada.length > 0) {
            this.senhaDigitada = this.senhaDigitada.slice(0, -1)
            let senhaOculta = ''
            Array.from(this.senhaDigitada).forEach(numero => {
              senhaOculta += '*'
            })
            this.senha.text = this.senhaTextoBase + senhaOculta
          }
        }

        if (this.usuarioDigitado.length !== 4 || this.senhaDigitada.length !== 4) {
          try {
            this.enviar.destroy()
          } catch (error) {
            console.error(error)
          }
        }
      })
  }


  update() { }
}
