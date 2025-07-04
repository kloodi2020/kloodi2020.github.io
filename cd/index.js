const GAME_STATE_TITLE = 0
const GAME_STATE_PLAYING = 1

class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")

        this.canvas.width *= 3
        this.canvas.height *= 3

        this.ctx.scale(3, 3)

        this.ctx.mozImageSmoothingEnabled = false
        this.ctx.webkitImageSmoothingEnabled = false
        this.ctx.imageSmoothingEnabled = false

        this.state = GAME_STATE_TITLE

        this.bg = new Image()
        this.bg.src = "bg.png"

        this.water = new Image()
        this.water.src = "water.png"

        this.emblem = new Image()
        this.emblem.src = "emblem.png"

        this.banner = new Image()
        this.banner.src = "banner.png"

        this.littlePlanet = new Image()
        this.littlePlanet.src = "littlePlanet.png"

        this.clouds = new Image()
        this.clouds.src = "clouds.png"

        this.sonic = new Image()
        this.sonic.src = "sonic.png"

        this.pressStart = new Image()
        this.pressStart.src = "pressStart.png"

        this.waterStripes = []
        for (let i = 0; i < 72; i += 1) {
            this.waterStripes.push(0)
        }

        this.cloudsZ = 0

        this.littlePlanetY = 0

        this.sonicAnim = -20
        this.whiteFade = 1

        this.playedMusic = false

        this.fingerWags = 0
        this.fingerCooldown = 0

        this.doPressStart = false
        this.pressStartFade = 0

        this.curMusic = null

        this.started = false
    }

    changeMusic(newMusic) {
        if (this.curMusic) {
            this.curMusic.pause()
        }

        this.curMusic = newMusic
        if (newMusic === null) {
            return
        }

        this.curMusic.play()
    }

    changeState(newState) {
        if (this.state === GAME_STATE_TITLE) {
            this.changeMusic(null)
        }

        this.state = newState
    }

    update(deltaTime) {
        if (!this.started) { return }

        if (this.state === GAME_STATE_TITLE) {
            if (this.sonicAnim >= 12) {
                for (let i = 0; i < 72; i += 1) {
                    this.waterStripes[i] += ((i + 1) / 0.4) * deltaTime
                }
                this.cloudsZ += 128 * deltaTime

                this.littlePlanetY += deltaTime
            }

            if (this.sonicAnim < 12) {
                if (!this.playedMusic && this.sonicAnim >= -15) {
                    this.changeMusic(new Audio("music.mp3"))

                    this.playedMusic = true
                }
                this.sonicAnim += 15 * deltaTime
            }
            else if (this.whiteFade > -0.25) {
                this.whiteFade -= 2 * deltaTime
            }
            else if (this.sonicAnim < 21) {
                this.sonicAnim += 35 * deltaTime
            }
            else {
                this.fingerWags += 1
                if (this.fingerWags < 2) {
                    this.sonicAnim = 12
                }
                else if (this.fingerCooldown <= 0) {
                    this.doPressStart = true
                    this.fingerCooldown = 1
                }
            }

            if (this.doPressStart) {
                this.pressStartFade += 7.5 * deltaTime
            }

            if (this.fingerCooldown > 0) {
                this.fingerCooldown -= deltaTime
                if (this.fingerCooldown <= 0) {
                    this.fingerWags = -1
                }
            }
        }
    }

    draw() {
        this.ctx.imageSmoothingEnabled = false

        switch (this.state) {
            case GAME_STATE_TITLE:
                if (this.sonicAnim < 12) {
                    this.ctx.fillStyle = "#000060"
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

                    this.ctx.globalAlpha = Math.min((this.sonicAnim + 20) / 5, 1)

                    this.ctx.drawImage(this.sonic, Math.max(0, Math.floor(this.sonicAnim)) * 113, 0, 113, 140, 212 - 113 / 2 + 10, 17.5, 113, 140)

                    return
                }

                this.ctx.drawImage(this.bg, 0, 0)
                
                for (let i = 0; i < 72; i += 1) {
                    let x = Math.floor(this.waterStripes[i] % 424)

                    this.ctx.drawImage(this.water, 0, i, 424, 1, x, 168 + i, 424, 1)
                    this.ctx.drawImage(this.water, 0, i, 424, 1, x - 424, 168 + i, 424, 1)
                }

                this.ctx.drawImage(this.littlePlanet, 390 - this.littlePlanet.width, Math.floor(Math.sin(this.littlePlanetY) * 4))

                let tempCanvas = document.createElement("canvas")
                let tempCtx = tempCanvas.getContext("2d")

                tempCanvas.width = 424
                tempCanvas.height = 256

                tempCtx.mozImageSmoothingEnabled = false
                tempCtx.webkitImageSmoothingEnabled = false
                tempCtx.imageSmoothingEnabled = false

                tempCtx.imageSmoothingEnabled = false

                for (let i = 0; i < 256; i += 1) {
                    let width = 646 - i

                    let y = (i + Math.floor(this.cloudsZ)) % 256

                    tempCtx.globalAlpha = 1 - i / 256

                    tempCtx.drawImage(this.clouds, 0, y, 256, 1, 212 - width * 2, i, width, 1)
                    tempCtx.drawImage(this.clouds, 0, y, 256, 1, 212 - width, i, width, 1)
                    tempCtx.drawImage(this.clouds, 0, y, 256, 1, 212, i, width, 1)
                }

                this.ctx.drawImage(tempCanvas, 0, 0, 424, 96)

                this.ctx.drawImage(this.emblem, 212 - this.emblem.width / 2, 40)

                this.ctx.drawImage(this.sonic, Math.floor(this.sonicAnim) * 113, 0, 113, 140, 212 - 113 / 2 + 10, 17.5, 113, 140)

                this.ctx.drawImage(this.banner, 212 - this.banner.width / 2, 135)

                this.ctx.globalAlpha = Math.max(0, this.whiteFade)

                this.ctx.fillStyle = "#ffffff"
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

                this.ctx.globalAlpha = Math.max(0, Math.sin(this.pressStartFade))

                this.ctx.drawImage(this.pressStart, 212 - this.pressStart.width / 2, 200)

                this.ctx.globalAlpha = 1
                break
            case GAME_STATE_PLAYING:
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
}

let prevTime = performance.now()
let deltaTime = 0

let game = null

window.onload = () => {
    if (game === null) {
        game = new Game(document.getElementById("gameScreen"))
    }

    function gameLoop(now) {
        deltaTime = (now - prevTime) / 1000

        game.update(deltaTime)
        game.draw()

        prevTime = now
        
        requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)
}

document.onkeydown = (event) => {
    if (game.started) {
        if (event.key === "Enter" && game.doPressStart) {
            game.changeState(GAME_STATE_PLAYING)
        }
        return
    }

    game.started = true
}
