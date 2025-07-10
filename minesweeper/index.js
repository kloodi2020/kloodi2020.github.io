let font = new Image()
font.src = "gfxColor/font.png"
const fontLetters = "1234567890- "

let tiles = new Image()
tiles.src = "gfxColor/tiles.png"

let smiley = new Image()
smiley.src = "gfxColor/smiley.png"

let dynamicBg = new Image()
dynamicBg.src = "gfxColor/dynamicBg.png"
let dynamicGrid = new Image()
dynamicGrid.src = "gfxColor/dynamicGrid.png"

const TILE_CLOSED = 0
const TILE_OPENED = 1
const TILE_MINE = 2

const FLAG_NONE = 0
const FLAG_NORMAL = 1
const FLAG_MARK = 2

const neighbors = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]]

function random(x, y) {
    return Math.floor(Math.random() * (y + 1 - x)) + x
}

class Game {
    constructor(canvas, width, height, mines) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")

        this.width = width
        this.height = height

        this.mines = mines

        this.canvas.width = 23 + this.width * 16
        this.canvas.height = 66 + this.height * 16

        this.canvas.width *= 3
        this.canvas.height *= 3

        this.ctx.scale(3, 3)

        this.ctx.mozImageSmoothingEnabled = false
        this.ctx.webkitImageSmoothingEnabled = false
        this.ctx.imageSmoothingEnabled = false

        this.reset()

        const cnvWidth = this.canvas.width / 3

        const numW = 13 * 3

        const leftNumX = 17
        const rightNumX = cnvWidth - 57

        const smileyX = Math.ceil((cnvWidth - 24) / 2)
        const smileyW = 24

        this.horzMap = []
        for (let x = 0; x < this.canvas.width / 3; x += 1) {
            let slice = 0
            if (x >= cnvWidth - 1) {
                slice = 15
            }
            else if (x >= cnvWidth - 2) {
                slice = 14
            }
            else if (x >= cnvWidth - 3) {
                slice = 13
            }
            else if (x >= cnvWidth - 8) {
                slice = 1
            }
            else if (x >= cnvWidth - 9) {
                slice = 12
            }
            else if (x >= cnvWidth - 10) {
                slice = 11
            }
            else if (x >= rightNumX + numW + 1) {
                slice = 4
            }
            else if (x >= rightNumX) {
                slice = 6
            }
            else if (x >= rightNumX - 1) {
                slice = 5
            }
            else if (x >= smileyX + smileyW + 1) {
                slice = 4
            }
            else if (x >= smileyX + smileyW) {
                slice = 10
            }
            else if (x >= smileyX) {
                slice = 9
            }
            else if (x >= smileyX - 1) {
                slice = 8
            }
            else if (x >= leftNumX + numW + 1) {
                slice = 4
            }
            else if (x >= leftNumX) {
                slice = 6
            }
            else if (x >= leftNumX - 1) {
                slice = 5
            }
            else if (x >= 11) {
                slice = 4
            }
            else if (x >= 10) {
                slice = 3
            }
            else if (x >= 9) {
                slice = 2
            }
            else if (x >= 3) {
                slice = 1
            }
            this.horzMap.push(slice)
        }
    }

    reset() {
        this.time = 0

        this.flags = 0

        this.firstClick = true

        this.win = false
        this.lose = false

        this.clickedMine = 0
        this.holdingIdx = -1

        this.prevTime = this.time

        this.numEmpty = this.width * this.height - this.mines
        this.numOpened = 0

        this.curSmiley = 0

        this.tileStates = []
        this.tileFlagged = []
        for (let x = 0; x < this.width; x += 1) {
            for (let y = 0; y < this.height; y += 1) {
                this.tileStates.push(TILE_CLOSED)
                this.tileFlagged.push(FLAG_NONE)
            }
        }
    }

    hasControl() {
        return !(this.lose || this.win)
    }

    outOfBounds(x, y) {
        return x < 0 || y < 0 || x >= this.width || y >= this.height
    }

    tileFlaggable(x, y) {
        let state = this.tileStates[this.coordsToIdx(x, y)]

        return state === TILE_CLOSED || state === TILE_MINE
    }

    coordsToIdx(x, y) {
        return y + x * this.height
    }
    idxToCoords(idx) {
        return [idx % this.height, idx / this.height]
    }

    minesNextTo(x, y) {
        let mines = 0
        neighbors.forEach((neighbor) => {
            let neighborX = x + neighbor[0]
            let neighborY = y + neighbor[1]
            if (this.outOfBounds(neighborX, neighborY)) { return }

            if (this.tileStates[this.coordsToIdx(neighborX, neighborY)] === TILE_MINE) {
                mines += 1
            }
        })

        return mines
    }

    drawText(text, x, y) {
        for (let i = 0; i < text.length; i += 1) {
            const char = text.charAt(i)
            const charIdx = fontLetters.indexOf(char)

            this.ctx.drawImage(font, 13 * charIdx, 0, 13, 23, x + 13 * i, y, 13, 23)
        }
    }

    drawDynamicGrid(x, y, w, h) {
        w /= 3
        h /= 3

        for (let x1 = 0; x1 < w; x1 += 1) {
            let srcX = 0
            if (x1 > 0) {
                srcX = 3
            }
            if (x1 >= w - 1) {
                srcX = 6
            }

            for (let y1 = 0; y1 < h; y1 += 1) {
                let srcY = 0
                if (y1 > 0) {
                    srcY = 3
                }
                if (y1 >= h - 1) {
                    srcY = 6
                }

                this.ctx.drawImage(dynamicGrid, srcX, srcY, 3, 3, x + x1 * 3, y + y1 * 3, 3, 3)
            }
        }
    }

    openTile(x, y) {
        if (this.outOfBounds(x, y)) { return false }
        if (this.tileFlagged[this.coordsToIdx(x, y)] === FLAG_NORMAL) { return false }

        if (this.tileStates[this.coordsToIdx(x, y)] === TILE_OPENED) { return false }
        if (this.tileStates[this.coordsToIdx(x, y)] === TILE_MINE) {
            this.clickedMine = this.coordsToIdx(x, y)

            if (document.getElementById("sound").checked) {
                const lose = new Audio("lose.wav")
                lose.play()
            }

            this.lose = true
            this.curSmiley = 96
            return true
        }
        
        if (this.firstClick) {
            for (let i = 0; i < this.mines; i += 1) {
                while (true) {
                    let mineX = random(0, this.width - 1)
                    let mineY = random(0, this.height - 1)
                    
                    let idx = this.coordsToIdx(mineX, mineY)
                    if (this.tileStates[idx] !== TILE_MINE && mineX !== x && mineY !== y) {
                        this.tileStates[idx] = TILE_MINE
                        break
                    }
                }
            }
        }
        this.firstClick = false

        let idx = this.coordsToIdx(x, y)

        this.numOpened += 1
        this.tileStates[idx] = TILE_OPENED
        if (this.tileFlagged[idx] === FLAG_MARK) {
            this.tileFlagged[idx] = FLAG_NONE
        }
        
        if (this.minesNextTo(x, y) <= 0) {
            neighbors.forEach((neighbor) => {
                this.openTile(x + neighbor[0], y + neighbor[1])
            })
        }

        if (this.numOpened === this.numEmpty) {
            if (!this.win && document.getElementById("sound").checked) {
                const win = new Audio("win.wav")
                win.play()
            }
            
            this.win = true
            this.curSmiley = 72
        }

        return true
    }

    flagTile(x, y) {
        if (this.outOfBounds(x, y)) { return }

        if (!this.tileFlaggable(x, y)) { return }

        let idx = this.coordsToIdx(x, y)

        const prevFlag = this.tileFlagged[idx]

        this.tileFlagged[idx] += 1
        if (!document.getElementById("marks").checked && this.tileFlagged[idx] === FLAG_MARK) {
            this.tileFlagged[idx] = FLAG_NONE
        }
        if (this.tileFlagged[idx] > FLAG_MARK) {
            this.tileFlagged[idx] = FLAG_NONE
        }

        if (prevFlag === FLAG_NORMAL && this.tileFlagged[idx] !== FLAG_NORMAL) {
            this.flags -= 1
        }
        else if (prevFlag !== FLAG_NORMAL && this.tileFlagged[idx] === FLAG_NORMAL) {
            this.flags += 1
        }
    }

    update(dt) {
        if (!this.firstClick && this.hasControl()) {
            this.time += dt
            if (Math.floor(this.time) !== Math.floor(this.prevTime)) {
                this.prevTime = this.time

                if (document.getElementById("sound").checked) {
                    const tick = new Audio("tick.wav")
                    tick.play()
                }
            }
        }
    }

    onClick(x, y) {
        x = Math.floor(x / 3)
        y = Math.floor(y / 3)

        const cnvWidth = this.canvas.width / 3
        const smileyX = Math.ceil((cnvWidth - 24) / 2)

        if (x >= smileyX && y >= 16 && x < smileyX + 24 && y < 40) {
            this.curSmiley = 24
            return
        }

        x -= 14
        y -= 55

        x = Math.floor(x / 16)
        y = Math.floor(y / 16)

        this.holdingIdx = this.coordsToIdx(x, y)

        if (this.hasControl()) {
            this.curSmiley = 48
        }
    }

    onUnClick(x, y) {
        x = Math.floor(x / 3)
        y = Math.floor(y / 3)

        const cnvWidth = this.canvas.width / 3
        const smileyX = Math.ceil((cnvWidth - 24) / 2)

        if (x >= smileyX && y >= 16 && x < smileyX + 24 && y < 40) {
            this.reset()
            return
        }

        if (this.curSmiley === 24) {
            if (this.lose) {
                this.curSmiley = 96
            }
            else if (this.win) {
                this.curSmiley = 72
            }
            else {
                this.curSmiley = 0
            }
        }
        if (this.curSmiley === 48) {
            this.curSmiley = 0
        }

        if (!this.hasControl()) { return }

        x -= 14
        y -= 55

        x = Math.floor(x / 16)
        y = Math.floor(y / 16)

        let idx = this.coordsToIdx(x, y)
        let state = this.tileStates[idx]

        this.holdingIdx = -1

        if (state === TILE_OPENED) {
            neighbors.forEach((neighbor) => {
                this.openTile(x + neighbor[0], y + neighbor[1])
            })
        }
        else {
            this.openTile(x, y)
        }
    }

    onMiddleClick(x, y) {
        this.curSmiley = 48
    }

    onUnMiddleClick(x, y) {
        if (this.curSmiley === 48) {
            this.curSmiley = 0
        }
    }

    onRightClick(x, y) {
        if (!this.hasControl()) { return }

        x = Math.floor(x / 3) - 14
        y = Math.floor(y / 3) - 55

        this.flagTile(Math.floor(x / 16), Math.floor(y / 16))
    }

    onMouseMove(x, y) {
        x = Math.floor(x / 3)
        y = Math.floor(y / 3)

        const cnvWidth = this.canvas.width / 3
        const smileyX = Math.ceil((cnvWidth - 24) / 2)

        if (!(x >= smileyX && y >= 16 && x < smileyX + 24 && y < 40)) {
            if (this.curSmiley === 24) {
                if (this.lose) {
                    this.curSmiley = 96
                }
                else if (this.win) {
                    this.curSmiley = 72
                }
                else {
                    this.curSmiley = 0
                }
            }
        }

        x -= 14
        y -= 55

        x = Math.floor(x / 16)
        y = Math.floor(y / 16)

        if (!this.outOfBounds(x, y) && this.holdingIdx > -1) {
            this.holdingIdx = this.coordsToIdx(x, y)
        }
    }

    drawRect(x, y, w, h, color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(x, y, w, h)
    }

    draw() {
        const cnvWidth = this.canvas.width / 3
        const cnvHeight = this.canvas.height / 3

        const black = document.getElementById("color").checked ? "#808080" : "#000000"

        this.drawRect(0, 0, cnvWidth, cnvHeight, "#C0C0C0")

        this.drawRect(0, 0, 3, cnvHeight - 1, "#FFFFFF")

        this.drawRect(cnvWidth - 3, 0, 3, cnvHeight, black)
        this.drawRect(1, cnvHeight - 3, cnvWidth, 3, black)

        this.drawRect(1, cnvHeight - 2, 1, 1, "#C0C0C0")
        this.drawRect(1, cnvHeight - 3, 1, 1, "#FFFFFF")

        this.drawRect(2, cnvHeight - 3, 1, 1, "#C0C0C0")

        this.horzMap.forEach((slice, idx) => {
            this.ctx.drawImage(dynamicBg, slice, 0, 1, 52, idx, 0, 1, 52)
        })

        this.drawDynamicGrid(9, 52, 6 + this.width * 16, 6 + this.height * 16)

        const displayNum = Math.max(-99, Math.min(this.mines - this.flags, 999))

        if (displayNum < 0) {
            this.drawText("-" + (-displayNum).toString().padStart(2, "0"), 17, 16)
        }
        else {
            this.drawText(displayNum.toString().padStart(3, "0"), 17, 16)
        }
        this.drawText(Math.min(Math.floor(this.time), 999).toString().padStart(3, "0"), cnvWidth - 57, 16)

        this.ctx.drawImage(smiley, this.curSmiley, 0, 24, 24, Math.ceil((cnvWidth - 24) / 2), 16, 24, 24)

        for (let x = 0; x < this.width; x += 1) {
            for (let y = 0; y < this.height; y += 1) {
                let idx = this.coordsToIdx(x, y)
                let state = this.tileStates[idx]
                
                let srcX = 0
                switch (state) {
                    case TILE_CLOSED:
                        if (this.tileFlagged[idx] === FLAG_NORMAL) {
                            if (this.lose) {
                                srcX = 112
                            }
                            else {
                                srcX = 32
                            }
                        }
                        else if (this.tileFlagged[idx] === FLAG_MARK) {
                            srcX = 48
                            if (this.holdingIdx === idx) {
                                srcX = 64
                            }
                        }
                        else {
                            if (this.holdingIdx === idx) {
                                srcX = 16
                            }
                        }
                        break
                    case TILE_OPENED:
                        let mines = this.minesNextTo(x, y)
                        if (mines <= 0) {
                            if (this.tileFlagged[idx] === FLAG_MARK) {
                                srcX = 64
                            }
                            else {
                                srcX = 16
                            }
                        }
                        else {
                            srcX = 112 + mines * 16
                        }
                        break
                    case TILE_MINE:
                        if (this.lose || this.win) {
                            srcX = 80
                            if (this.clickedMine === idx) {
                                srcX = 96
                            }
                            if (this.tileFlagged[idx] === FLAG_NORMAL || this.win) {
                                srcX = 32
                            }
                        }
                        else {
                            if (this.tileFlagged[idx] === FLAG_NORMAL) {
                                if (this.lose) {
                                    srcX = 112
                                }
                                else {
                                    srcX = 32
                                }
                            }
                            else if (this.tileFlagged[idx] === FLAG_MARK) {
                                srcX = 48
                                if (this.holdingIdx === idx) {
                                    srcX = 64
                                }
                            }
                            else {
                                if (this.holdingIdx === idx) {
                                    srcX = 16
                                }
                            }
                        }
                        break
                }

                // srcX = 112 + idx * 16

                this.ctx.drawImage(tiles, srcX, 0, 16, 16, 12 + x * 16, 55 + y * 16, 16, 16)
            }
        }
    }
}

let canvas
let game

function initGame(width, height, mines) {
    game = new Game(canvas, width, height, mines)
}

function updateImages(folder) {
    font.src = `${folder}/font.png`

    tiles.src = `${folder}/tiles.png`

    smiley.src = `${folder}/smiley.png`

    dynamicBg.src = `${folder}/dynamicBg.png`
    dynamicGrid.src = `${folder}/dynamicGrid.png`
}

let prevTime = performance.now()
window.onload = () => {
    canvas = document.getElementById("gameScreen")
    initGame(8, 8, 10)

    document.getElementById("mode").addEventListener("change", (event) => {
        switch (event.target.value) {
            case "beginner":
                initGame(8, 8, 10)
                break
            case "intermediate":
                initGame(16, 16, 40)
                break
            case "expert":
                initGame(30, 16, 99)
                break
            case "huge":
                initGame(64, 64, 128)
                break
        }
    })
    document.getElementById("color").addEventListener("change", (event) => {
        if (event.target.checked) {
            updateImages("gfxColor")
        }
        else {
            updateImages("gfxNoColor")
        }
    })

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
        if (event.button === 1) {
            game.onMiddleClick(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
        }
        if (event.button === 2) {
            game.onRightClick(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
        }
    })
    document.addEventListener("mouseup", (event) => {
        if (event.shiftKey) { return }

        if (event.button === 0) {
            game.onUnClick(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
        }
        if (event.button === 1) {
            game.onUnMiddleClick(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
        }
    })
    document.addEventListener("mousemove", (event) => {
        game.onMouseMove(event.x - canvas.getBoundingClientRect().left, event.y - canvas.getBoundingClientRect().top)
    })
    document.addEventListener("contextmenu", (event) => {
        if (event.shiftKey) { return }

        event.preventDefault()
    })

    requestAnimationFrame(gameLoop)
}
