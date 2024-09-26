class MinecraftBots {
    constructor() {
        this.reset();
    }

    reset() {
        for (let i = 0; i < this.bots.size; i++) {
            const key = Object.keys(this.bots)[i];
            const value = this.bots[key];

            value.quit();
        }

        this.bots = {};
    }
    
    getInfo() {
        return {
            "id": "MinecraftBots",
            "name": "Minecraft",
            "blocks": [{
                "opcode": "makeBot",
                "blockType": Scratch.BlockType.COMMAND,
                "text": "make bot called [username] and connect to [host]",
                "arguments": {
                    "username": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": "SimpleBot"
                    },
                    "host": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": ""
                    }
                }
            },
            {
                "opcode": "botChat",
                "blockType": Scratch.BlockType.COMMAND,
                "text": "make bot [bot] say [msg]",
                "arguments": {
                    "bot": {
                        "type": Scratch.ArgumentType.STRING,
                        "menu": "bots"
                    },
                    "msg": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": "Hello World!"
                    }
                }
            },
            {
                "opcode": "botSetKey",
                "blockType": Scratch.BlockType.COMMAND,
                "text": "set bot [bot] key [key] to [held]",
                "arguments": {
                    "bot": {
                        "type": Scratch.ArgumentType.STRING,
                        "menu": "bots"
                    },
                    "key": {
                        "type": Scratch.ArgumentType.STRING,
                        "menu": "keys"
                    },
                    "held": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "menu": "held"
                    }
                }
            }
            ],
            "menus": {
                "bots": {
                    "acceptReporters": true,
                    "items": "getAllBotNames"
                },
                "keys": {
                    "acceptReporters": true,
                    "items": ["forward", "left", "right", "backward", "jump", "sneak"]
                },
                "held": {
                    "acceptReporters": true,
                    "items": {
                        "held": 1,
                        "released": 0,
                    }
                }
            }
        }
    }

    makeBot({username, host}) {
        var bot = mineflayer.createBot({
            username: username,
            host: host,
            version: "1.20.4",
        })

        this.bots[username] = bot;
    }

    botSetKey({bot, key, held}) {
        this.bots[bot].setControlState(key, held > 0);
    }

    botChat({bot, msg}) {
        this.bots[bot].chat(msg);
    }

    getAllBotNames() {
        return Object.keys(this.bots);
    }
}

Scratch.extensions.register(new MinecraftBots())