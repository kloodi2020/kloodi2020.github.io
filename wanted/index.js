const bg = new Image()
bg.src = "bg.png"

const headsBig = new Image()
headsBig.src = "headsBig.png"

const headsSmall = new Image()
headsSmall.src = "headsSmall.png"

const hud = new Image()
hud.src = "hud.png"

const fontLetters = "0123456789"

const CHAR_LUIGI = 0
const CHAR_MARIO = 1
const CHAR_YOSHI = 2
const CHAR_WARIO = 3

class Head {
    constructor(game, x, y, char) {
        this.game = game
        
        this.x = x
        this.y = y

        this.spawnX = x
        this.spawnY = y

        this.dx = 0
        this.dy = 0

        this.char = char
    }

    setX(x) {
        let newX = x

        if (newX < -32) {
            newX += 288
        }
        if (newX > 256) {
            newX -= 288
        }

        this.x = newX
    }

    setY(y) {
        let newY = y

        if (newY > 192) {
            newY -= 224
        }
        if (newY < -32) {
            newY += 224
        }

        this.y = newY
    }

    update(deltaTime) {
        if (this.game.level > 35) {
            const radius = Math.sin(this.game.levelTimer * 2) * 128
            const timer = Math.sin(this.game.levelTimer) * 3

            this.setX(112 + Math.sin(this.spawnX + timer * radius / 128) * radius)
            this.setY(this.spawnY + Math.cos(this.spawnX + timer * timer * radius / 128) * radius)
        }
        else if (this.game.level > 30) {
            this.dx = Math.max(Math.abs(this.y - 80), 48) * 10
        }
        else if (this.game.level > 25) {
            if (Math.floor(this.spawnX / 32) % 2 == 0 && Math.floor(this.spawnY / 64) % 2 == 0) {
                this.dx = Math.max(Math.min(this.dx, 256), 128)
                this.dy = Math.max(Math.min(this.dy, 256), 128)
                this.dx += 128 * deltaTime
                this.dy += 128 * deltaTime
            }
            else {
                if (Math.floor(this.spawnX / 32) % 2 == 0) {
                    this.dx = Math.max(Math.min(this.dx, 256), 64)
                    this.dx += 256 * deltaTime
                }
                else {
                    this.dy = Math.max(Math.min(this.dy, 512), 32)
                    this.dy += 512 * deltaTime
                }
            }
        }
        else if (this.game.level > 20) {
            this.setX(this.spawnX + Math.sin(this.game.levelTimer * 5) * (64 + Math.sin(this.game.levelTimer + this.spawnX) * 30))
            this.setY(this.spawnY + Math.cos(this.game.levelTimer * 5) * (64 + Math.sin(this.game.levelTimer + this.spawnY) * 30))
        }
        else if (this.game.level > 15) {
            this.setY(this.spawnY + Math.sin(this.x / 16) * (48 - Math.abs(this.spawnY - 96)))
            
            this.dx = 120 + (this.game.level - 15) * 32
            this.dx = Math.floor(this.spawnX / 32) % 2 == 0 ? this.dx : -this.dx
        }
        else if (this.game.level > 10) {
            this.setX(112 + Math.sin((this.y + this.spawnX) / 64) * 96)
            this.dy = 120
        }
        else if (this.game.level > 5) {
            if (this.char == CHAR_LUIGI || this.char == CHAR_YOSHI) {
                this.dx = 120
                this.dy = 60
            }
            if (this.char == CHAR_MARIO || this.char == CHAR_WARIO) {
                this.dx = -120
                this.dy = -60
            }
        }
        else {
            this.setX(this.spawnX + Math.sin(this.y / 32) * 48)
            this.dy = 120
        }

        this.setX(this.x + this.dx * deltaTime)
        this.setY(this.y + this.dy * deltaTime)
    }

    draw() {
        this.game.ctx.drawImage(headsSmall, 32 * this.char, 0, 32, 32, this.x, this.y + 192, 32, 32)
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")

        this.ctx.mozImageSmoothingEnabled = false
        this.ctx.webkitImageSmoothingEnabled = false
        this.ctx.imageSmoothingEnabled = false

        this.time = 10

        this.level = 35
        this.nextLevel()
    }

    updateCorrectHead() {
        for (let i = 0; i < this.heads.length; i += 1) {
            const head = this.heads[i]

            if (head.char == this.wantedChar) {
                this.correctHead = i
                return
            }
        }
    }

    randRange(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min
    }

    win() {
        this.winTimer = 3
    }

    generateHeads() {
        let headPos = []
        if (this.level > 35) {
            for (let i = 0; i < this.level; i += 1) {
                const angle = (i * (360 / this.level)) * Math.PI / 180
                headPos.push([angle, this.randRange(0, 192 - 32)])
            }
        }
        else if (this.level > 25) {
            for (let i = 0; i < 50; i += 1) {
                headPos.push([-i * 32, i * 32])
            }
        }
        else if (this.level > 20) {
            const count = 25 + (this.level - 20) * 5
            for (let i = 0; i < count; i += 1) {
                const angle = (i * (360 / count)) * Math.PI / 180
                headPos.push([112 + Math.sin(angle) * 64, 80 + Math.cos(angle) * 64])
            }
        }
        else if (this.level > 15) {
            for (let i = 0; i < 10; i += 1) {
                headPos.push([i * 32, 80 - 48])
            }
            for (let i = 0; i < 10; i += 1) {
                headPos.push([i * 32, 80 - 32])
            }
            for (let i = 0; i < 10; i += 1) {
                headPos.push([i * 32, 80 + 32])
            }
            for (let i = 0; i < 10; i += 1) {
                headPos.push([i * 32, 80 + 48])
            }
        }
        else if (this.level > 10) {
            for (let i = 0; i < 70; i += 1) {
                headPos.push([i * (64 - (this.level - 10) * 8), Math.floor(i / 10) * 32])
            }
        }
        else if (this.level > 5) {
            for (let i = 0; i <= 20 + (this.level - 5) * 5; i += 1) {
                headPos.push([i * 128 % 224, i * 64 % 160])
            }
        }
        else {
            if (this.level < 2) {
                for (let i = 0; i < 7; i += 1) {
                    headPos.push([112, i * 32])
                }
            }
            else {
                for (let i = 0; i < 7; i += 1) {
                    headPos.push([112 - 64, i * 32])
                }
                for (let i = 0; i < 7; i += 1) {
                    headPos.push([112 + 64, i * 32])
                }
            }
        }

        let possibleChars = [CHAR_LUIGI, CHAR_MARIO, CHAR_YOSHI, CHAR_WARIO]
        delete possibleChars[possibleChars.indexOf(this.wantedChar)]

        this.heads = []
        headPos.forEach((pos) => {
            this.heads.push(new Head(this, pos[0], pos[1], possibleChars[this.randRange(0, possibleChars.length - 1)]))
        })

        this.heads[this.heads.length - 1].char = this.wantedChar
    }

    nextLevel() {
        this.wantedChar = this.randRange(0, 3)
        
        this.level += 1

        this.generateHeads()
        this.updateCorrectHead()
        
        this.levelTimer = 0

        this.timerIncrease = 0
        this.timerIncreaseCldwn = 0.125

        this.winTimer = 0
        this.loseTimer = 0
    }

    hasControl() {
        return this.winTimer <= 0 && this.loseTimer <= 0
    }

    update(deltaTime) {
        if (this.winTimer > 0) {
            this.winTimer -= deltaTime
            if (this.timerIncrease > 0 && this.winTimer <= 2) {
                if (this.timerIncreaseCldwn > 0) {
                    this.timerIncreaseCldwn -= deltaTime
                }
                else {
                    this.timerIncreaseCldwn = 0.125

                    this.timerIncrease -= 1
                    this.time += 1
                }
            }

            if (this.winTimer <= 0) {
                this.nextLevel()
            }
        }
        if (this.loseTimer > 0) {
            this.loseTimer -= deltaTime

            if (this.loseTimer <= 0) {
                this.time = 10

                this.level = -1
                this.nextLevel()
            }
        }

        if (this.hasControl()) {
            this.time -= deltaTime
            if (this.time <= 0) {
                this.time = 0
                this.loseTimer = 3
            }

            this.levelTimer += deltaTime

            this.heads.forEach((head) => {
                head.update(deltaTime)
            })
        }
    }

    drawText(text, x, y, scale) {
        for (let i = 0; i < text.length; i += 1) {
            const char = text.charAt(i)
            const charIdx = fontLetters.indexOf(char)

            this.ctx.drawImage(hud, 15 * charIdx, 8, 15, 15, x + i * 15 * scale, y, 15 * scale, 15 * scale)
        }
    }

    draw() {
        if (this.winTimer > 0 && this.winTimer <= 2.75) {
            this.ctx.fillStyle = "#FFE742"
        }
        else {
            this.ctx.fillStyle = "#000000"
        }
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        this.heads.forEach((head, idx) => {
            if (this.hasControl() || this.correctHead == idx) {
                head.draw()
            }
        })

        this.ctx.drawImage(bg, 0, 0)
        this.ctx.drawImage(headsBig, 64 * this.wantedChar, 0, 64, 64, 96, 54, 64, 64)

        this.ctx.drawImage(hud, 0, 0, 32, 8, 112, 8, 32, 8)

        const timeText = Math.floor(this.time) + ""
        this.drawText(timeText, 128 - timeText.length * 15, 20, 2)
    }

    onClick(x, y) {
        if (this.winTimer > 0) { return }

        if (y < 192) { return }
        y -= 192

        for (let i = this.heads.length - 1; i >= 0; i -= 1) {
            const head = this.heads[i]
            if (x > head.x && x < head.x + 32 && y > head.y && y < head.y + 32) {
                if (head.char == this.wantedChar) {
                    this.timerIncrease += 5

                    this.win()
                }
                else {
                    this.time -= 10
                }
                break
            }
        }
    }
}

let prevTime = performance.now()
window.onload = () => {
    const canvas = document.getElementById("gameScreen")
    const game = new Game(canvas)

    function gameLoop(now) {
        const deltaTime = (now - prevTime) / 1000
        
        game.update(deltaTime)
        game.draw()

        prevTime = now

        requestAnimationFrame(gameLoop)
    }

    document.addEventListener("mousedown", (event) => {
        if (event.shiftKey) { return }

        if (event.button === 0) {
            game.onClick(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
        }
    })

    requestAnimationFrame(gameLoop)
}
