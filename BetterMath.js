const 𝑡𝑒𝑟𝑚𝑠𝐻𝑖 = 10000000
const 𝑡𝑒𝑟𝑚𝑠𝐿𝑜 = 1000000

const 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛 = 20

const 𝜀 = 0.0001

const 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠 = [2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600]

function 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥) {
    const 𝑚𝑎𝑡𝑐ℎ = 𝑥.match(/(-?\d+(\.\d+)?)\s*\+\s*(-?\d+(\.\d+)?)𝑖/)
    if (!𝑚𝑎𝑡𝑐ℎ) return NaN

    return { 𝑟𝑒𝑎𝑙: parseFloat(𝑚𝑎𝑡𝑐ℎ[1]), 𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦: parseFloat(𝑚𝑎𝑡𝑐ℎ[3]) }
}

class BetterMath {
    constructor() {}
    
    getInfo() {
        return {
            "id": "BetterMath",
            "name": "Better Math",
            "blocks": [{
                "opcode": "𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
                "blockType": Scratch.BlockType.BOOLEAN,
                "text": "[𝑥]≈[𝑦]",
                "arguments": {
                    "𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.1
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
                }
            },
			{
				"opcode": "𝑛𝑜𝑡𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≉[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 4
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑖𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≡[𝑦]",
				"arguments": {
                    "𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
                }
			},
			{
				"opcode": "𝑛𝑜𝑡𝐼𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≢[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 4
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≠[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 4
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			"---",
			{
				"opcode": "𝑚𝑜𝑟𝑒𝑂𝑟𝐿𝑒𝑠𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≶[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑒𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≸[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑙𝑒𝑠𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≤[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑚𝑜𝑟𝑒𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≥[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝐿𝑒𝑠𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≰[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝑀𝑜𝑟𝑒𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≱[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝐿𝑒𝑠𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≮[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝑀𝑜𝑟𝑒",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≯[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    }
				}
			},
			{
				"opcode": "𝑙𝑒𝑠𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≲[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.2
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑚𝑜𝑟𝑒𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≳[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5.2
                    }
				}
			},
			"---",
			{
				"opcode": "𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≺[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≻[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑑𝑜𝑢𝑏𝑙𝑒𝑃𝑟𝑒𝑐𝑒𝑑𝑒𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]⪻[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑑𝑜𝑢𝑏𝑙𝑒𝑆𝑢𝑐𝑐𝑒𝑒𝑑𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]⪼[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 7
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝑃𝑟𝑒𝑐𝑒𝑑𝑒𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]⊀[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑛𝑜𝑡𝑆𝑢𝑐𝑐𝑒𝑒𝑑𝑠",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]⊁[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≼[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≽[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≾[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 4
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]≿[𝑦]",
				"arguments": {
					"𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 6
                    },
                    "𝑦": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			"---",
			{
				"opcode": "𝑎𝑛𝑑",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]•[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 6
					},
					"𝑦": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑜𝑟",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]+[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑛𝑜𝑡",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "¬[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑥𝑜𝑟",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥]⊕[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.BOOLEAN,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑡𝑟𝑢𝑒",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "1"
			},
			{
				"opcode": "𝑓𝑎𝑙𝑠𝑒",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "0"
			},
			"---",
			{
				"opcode": "𝑑𝑒𝑔",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]𝑟𝑎𝑑→°",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3.14
					}
				}
			},
			{
				"opcode": "𝑟𝑎𝑑",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]°→𝑟𝑎𝑑",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 180
					}
				}
			},
			{
				"opcode": "Δ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Δ[𝑥]",
				"arguments": {
                    "𝑥": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 5
                    }
				}
			},
			{
				"opcode": "Σ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Σ([𝑢𝑝],𝑥=[𝑑𝑜𝑤𝑛],[𝑒𝑥𝑝𝑟])",
				"arguments": {
                    "𝑢𝑝": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 1
                    },
					"𝑒𝑥𝑝𝑟": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": "𝑥 * 2"
                    },
					"𝑑𝑜𝑤𝑛": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    }
				}
			},
			{
				"opcode": "Π",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Π([𝑢𝑝],𝑥=[𝑑𝑜𝑤𝑛],[𝑒𝑥𝑝𝑟])",
				"arguments": {
                    "𝑢𝑝": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 1
                    },
					"𝑒𝑥𝑝𝑟": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": "𝑥 * 2"
                    },
					"𝑑𝑜𝑤𝑛": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 3
                    }
				}
			},
			{
				"opcode": "Γ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Γ[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑙𝑖𝑚",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑙𝑖𝑚(𝑥→[𝑥],[𝑒𝑥𝑝𝑟])",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					},
					"𝑒𝑥𝑝𝑟": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "(𝑥 - 1) / (𝑥 * 𝑥 - 1)"
					}
				}
			},
			"---",
			{
				"opcode": "𝑧𝑒𝑟𝑜",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "0"
			},
			{
				"opcode": "𝑜𝑛𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "1"
			},
			{
				"opcode": "π",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "π"
			},
			{
				"opcode": "τ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "τ"
			},
			{
				"opcode": "𝑐",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑐"
			},
			{
				"opcode": "Φ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "Φ"
			},
			{
				"opcode": "𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑒"
			},
			{
				"opcode": "𝑠𝑞𝑟𝑡2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√2"
			},
			{
				"opcode": "𝑠𝑞𝑟𝑡3",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√3"
			},
			{
				"opcode": "𝑐𝑏𝑟𝑡2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∛2"
			},
			{
				"opcode": "𝑙𝑛2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑙𝑛(2)"
			},
			{
				"opcode": "𝑙𝑛10",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑙𝑛(10)"
			},
			{
				"opcode": "ħ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "ħ"
			},
			{
				"opcode": "γ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "γ"
			},
			{
				"opcode": "ζ3",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "ζ(3)"
			},
			{
				"opcode": "𝐺",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝐺"
			},
			{
				"opcode": "ϖ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "ϖ"
			},
			{
				"opcode": "𝐴",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝐴"
			},
			{
				"opcode": "𝐾0",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝐾₀"
			},
			{
				"opcode": "δ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "δ"
			},
			{
				"opcode": "α",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "α"
			},
			"---",
			{
				"opcode": "𝑜𝑛𝑒𝑆𝑒𝑣𝑒𝑛𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅐"
			},
			{
				"opcode": "𝑜𝑛𝑒𝑁𝑖𝑛𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅑"
			},
			{
				"opcode": "𝑜𝑛𝑒𝑇𝑒𝑛𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅒"
			},
			{
				"opcode": "𝑜𝑛𝑒𝑇ℎ𝑖𝑟𝑑",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅓"
			},
			{
				"opcode": "𝑡𝑤𝑜𝑇ℎ𝑖𝑟𝑑",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅔"
			},
			{
				"opcode": "𝑜𝑛𝑒𝐹𝑖𝑓𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅕"
			},
			{
				"opcode": "𝑡𝑤𝑜𝐹𝑖𝑓𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅖"
			},
			{
				"opcode": "𝑡ℎ𝑟𝑒𝑒𝐹𝑖𝑓𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅗"
			},
			{
				"opcode": "𝑓𝑜𝑢𝑟𝐹𝑖𝑓𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅘"
			},
			{
				"opcode": "𝑜𝑛𝑒𝑆𝑖𝑥𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅙"
			},
			{
				"opcode": "𝑓𝑖𝑣𝑒𝑆𝑖𝑥𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅚"
			},
			{
				"opcode": "𝑜𝑛𝑒𝐸𝑖𝑔ℎ𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅛"
			},
			{
				"opcode": "𝑡ℎ𝑟𝑒𝑒𝐸𝑖𝑔ℎ𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅜"
			},
			{
				"opcode": "𝑓𝑖𝑣𝑒𝐸𝑖𝑔ℎ𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅝"
			},
			{
				"opcode": "𝑠𝑒𝑣𝑒𝑛𝐸𝑖𝑔ℎ𝑡ℎ",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅞"
			},
			{
				"opcode": "𝑞𝑢𝑎𝑟𝑡𝑒𝑟",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "¼"
			},
			{
				"opcode": "𝑡ℎ𝑟𝑒𝑒𝑄𝑢𝑎𝑟𝑡𝑒𝑟",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "¾"
			},
			{
				"opcode": "ℎ𝑎𝑙𝑓",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "½"
			},
			{
				"opcode": "𝑧𝑒𝑟𝑜𝑇ℎ𝑖𝑟𝑑",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "↉"
			},
			"---",
			{
				"opcode": "𝑚𝑎𝑘𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥] + [𝑦]𝑖",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 1
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 1
					}
				}
			},
			{
				"opcode": "𝑎𝑑𝑑𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥][𝑦]→(𝑎+𝑐) + (𝑏+𝑑)𝑖",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					},
					"𝑦": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			{
				"opcode": "𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑦𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥][𝑦]→(𝑎𝑐-𝑏𝑑) + (𝑎𝑑+𝑏𝑐)𝑖",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					},
					"𝑦": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			{
				"opcode": "𝑚𝑜𝑑𝑢𝑙𝑢𝑠𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]→𝑠𝑞𝑟𝑡(𝑎²+𝑏²)",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					},
					"𝑦": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			{
				"opcode": "𝑟𝑒𝑎𝑙𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]→𝑎",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			{
				"opcode": "𝑖𝑚𝑎𝑔𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]→𝑏",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			{
				"opcode": "𝑑𝑖𝑣𝑖𝑑𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥][𝑦]→(𝑎𝑐+𝑏𝑑)/(𝑐²+𝑑²) + (𝑏𝑐-𝑎𝑑)/(𝑐²+𝑑²)𝑖",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					},
					"𝑦": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "1 + 1𝑖"
					}
				}
			},
			"---",
			{
				"opcode": "𝑠𝑞𝑟𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					}
				}
			},
			{
				"opcode": "𝑐𝑏𝑟𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∛[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑡𝑠𝑟𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∜[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 4
					}
				}
			},
			{
				"opcode": "𝑟𝑜𝑜𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]√[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					}
				}
			},
			"---",
			{
				"opcode": "𝑖𝑐𝑜𝑠𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑛𝑜𝑛𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑜𝑐𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "ℎ𝑒𝑝𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "ℎ𝑒𝑥𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑝𝑒𝑛𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑡𝑒𝑡𝑟𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑡𝑟𝑒𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑑𝑜𝑑𝑒𝑐𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑢𝑛𝑑𝑒𝑐𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑑𝑒𝑐𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑜𝑐𝑡𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "ℎ𝑒𝑝𝑡𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "ℎ𝑒𝑥𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑝𝑒𝑛𝑡𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑡𝑒𝑡𝑟𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑒𝑥𝑝𝑜𝑛𝑒𝑛𝑡𝑖𝑎𝑡𝑒",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]↑[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 6
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 3
					}
				}
			},
			{
				"opcode": "𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑦",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]·[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "ℎ𝑦𝑝𝑒𝑟𝑜𝑝𝑒𝑟𝑎𝑡𝑖𝑜𝑛",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]→[𝑦]→[𝑧]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					},
					"𝑧": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 4
					}
				}
			},
			"---",
			{
				"opcode": "𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]!",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑠𝑢𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝑠𝑓([𝑥])",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "ℎ𝑦𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "𝐻([𝑥])",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			"---",
			{
				"opcode": "𝑏𝑖𝑡𝐴𝑛𝑑",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]∧[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 6
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑏𝑖𝑡𝑂𝑟",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]∨[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 10
					}
				}
			},
			{
				"opcode": "𝑏𝑖𝑡𝑋𝑜𝑟",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]⊍[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 6
					}
				}
			},
			{
				"opcode": "𝑏𝑖𝑡𝑁𝑜𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⌐[𝑥]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑠ℎ𝑖𝑓𝑡𝐿𝑒𝑓𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]⟪[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 27
					}
				}
			},
			{
				"opcode": "𝑠ℎ𝑖𝑓𝑡𝑅𝑖𝑔ℎ𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]⟫[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					}
				}
			},
			{
				"opcode": "𝑟𝑜𝑡𝑎𝑡𝑒𝐿𝑒𝑓𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]⟲[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 30
					}
				}
			},
			{
				"opcode": "𝑟𝑜𝑡𝑎𝑡𝑒𝑅𝑖𝑔ℎ𝑡",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]⟳[𝑦]",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 5
					},
					"𝑦": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					}
				}
			}
			],
            "menus": {
                "roundingMethods": {
                    "acceptReporters": true,
                    "items": ["floor", "round", "ceil"]
                }
            }
        }
    }

    𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return Math.round(𝑥) === Math.round(𝑦)
	}

	𝑛𝑜𝑡𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return !this.𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑖𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦
	}

	𝑛𝑜𝑡𝐼𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return !this.𝑖𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑛𝑜𝑡𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 !== 𝑦
	}

	𝑚𝑜𝑟𝑒𝑂𝑟𝐿𝑒𝑠𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 !== 𝑦
	}

	𝑒𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦
	}

	𝑙𝑒𝑠𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 <= 𝑦
	}
	𝑚𝑜𝑟𝑒𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 >= 𝑦
	}

	𝑛𝑜𝑡𝐿𝑒𝑠𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 > 𝑦
	}
	𝑛𝑜𝑡𝑀𝑜𝑟𝑒𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 < 𝑦
	}

	𝑛𝑜𝑡𝐿𝑒𝑠𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 >= 𝑦
	}
	𝑛𝑜𝑡𝑀𝑜𝑟𝑒({ 𝑥, 𝑦 }) {
		return 𝑥 <= 𝑦
	}

	𝑙𝑒𝑠𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return (𝑥 < 𝑦) || this.𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	𝑚𝑜𝑟𝑒𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return (𝑥 > 𝑦) || this.𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 + 1 === 𝑦
	}
	𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦 + 1
	}

	𝑑𝑜𝑢𝑏𝑙𝑒𝑃𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 + 2 === 𝑦
	}
	𝑑𝑜𝑢𝑏𝑙𝑒𝑆𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦 + 2
	}

	𝑛𝑜𝑡𝑃𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥, 𝑦 }) {
		return !this.𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	𝑛𝑜𝑡𝑆𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥, 𝑦 }) {
		return !this.𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return this.𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 }) || 𝑥 === 𝑦
	}
	𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠𝑂𝑟𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return this.𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 }) || 𝑥 === 𝑦
	}

	𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return this.𝑝𝑟𝑒𝑐𝑒𝑑𝑒𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 }) || this.𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠𝑂𝑟𝐴𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return this.𝑠𝑢𝑐𝑐𝑒𝑒𝑑𝑠({ 𝑥: 𝑥, 𝑦: 𝑦 }) || this.𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑎𝑛𝑑({ 𝑥, 𝑦 }) {
		𝑥 = (𝑥 === undefined || 𝑥 === null) ? false : 𝑥
		𝑦 = (𝑦 === undefined || 𝑦 === null) ? false : 𝑦
		
		return 𝑥 && 𝑦
	}

	𝑜𝑟({ 𝑥, 𝑦 }) {
		𝑥 = (𝑥 === undefined || 𝑥 === null) ? false : 𝑥
		𝑦 = (𝑦 === undefined || 𝑦 === null) ? false : 𝑦
		
		return 𝑥 || 𝑦
	}

	𝑛𝑜𝑡({ 𝑥 }) {
		return !𝑥
	}

	𝑥𝑜𝑟({ 𝑥, 𝑦 }) {
		return 𝑥 !== 𝑦
	}

	𝑡𝑟𝑢𝑒({}) {
		return true
	}
	𝑓𝑎𝑙𝑠𝑒({}) {
		return false
	}

	𝑑𝑒𝑔({ 𝑥 }) {
		return 𝑥 * (180 / Math.PI)
	}

	𝑟𝑎𝑑({ 𝑥 }) {
		return 𝑥 * (Math.PI / 180)
	}

	Δ({ 𝑥 }) {
		return 0
	}

	Σ({ 𝑢𝑝, 𝑒𝑥𝑝𝑟, 𝑑𝑜𝑤𝑛 }) {
		let 𝑟𝑒𝑠𝑢𝑙𝑡 = 0

		if (/[^𝑥+-\/*0-9 ()]/g.test(𝑒𝑥𝑝𝑟)) { return NaN }
		const 𝑓 = new Function("𝑥", `return ${𝑒𝑥𝑝𝑟}`)

		if (𝑑𝑜𝑤𝑛 < 𝑢𝑝) {
			for (let 𝑖 = 𝑑𝑜𝑤𝑛; 𝑖 <= 𝑢𝑝; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 += 𝑓(𝑖)
			}
		}
		else {
			for (let 𝑖 = 𝑢𝑝; 𝑖 <= 𝑑𝑜𝑤𝑛; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 += 𝑓(𝑖)
			}
		}

		return 𝑟𝑒𝑠𝑢𝑙𝑡
	}

	Π({ 𝑢𝑝, 𝑒𝑥𝑝𝑟, 𝑑𝑜𝑤𝑛 }) {
		if (/[^𝑥+-\/*0-9 ()]/g.test(𝑒𝑥𝑝𝑟)) { return NaN }
		const 𝑓 = new Function("𝑥", `return ${𝑒𝑥𝑝𝑟}`)
		
		let 𝑟𝑒𝑠𝑢𝑙𝑡 = 0

		if (𝑑𝑜𝑤𝑛 < 𝑢𝑝) {
			𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑓(𝑑𝑜𝑤𝑛)
			for (let 𝑖 = 𝑑𝑜𝑤𝑛 + 1; 𝑖 <= 𝑢𝑝; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 *= 𝑓(𝑖)
			}
		}
		else {
			𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑓(𝑢𝑝)
			for (let 𝑖 = 𝑢𝑝 + 1; 𝑖 <= 𝑑𝑜𝑤𝑛; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 *= 𝑓(𝑖)
			}
		}

		return 𝑟𝑒𝑠𝑢𝑙𝑡
	}

	Γ({ 𝑥 }) {
		const 𝑔 = 7
		const 𝑝 = [
			0.99999999999980993, 676.5203681218851, -1259.1392167224028,
			771.32342877765313, -176.6150291498386, 12.507343278686905,
			-0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
		]
	  
		if (𝑥 < 0.5) {
			return Math.PI / (Math.sin(Math.PI * 𝑥) * this.Γ({ 𝑥: 1 - 𝑥 }))
		}
	  
		𝑥 --
		let 𝑦 = 𝑝[0]
		for (let 𝑖 = 1; 𝑖 < 𝑔 + 2; 𝑖 ++) {
			𝑦 += 𝑝[𝑖] / (𝑥 + 𝑖)
		}
	  
		let 𝑡 = 𝑥 + 𝑔 + 0.5;
		return Math.sqrt(2 * Math.PI) * 𝑡 ** (𝑥 + 0.5) * Math.exp(-𝑡) * 𝑦;
	}

	𝑙𝑖𝑚({ 𝑥, 𝑒𝑥𝑝𝑟 }) {
		if (/[^𝑥+-\/*0-9 ()]/g.test(𝑒𝑥𝑝𝑟)) { return NaN }
		const 𝑓 = new Function("𝑥", `return ${𝑒𝑥𝑝𝑟}`)

		let 𝑙𝑒𝑓𝑡 = 𝑓(𝑥 - 𝜀)
		let 𝑟𝑖𝑔ℎ𝑡 = 𝑓(𝑥 + 𝜀)

		return (𝑙𝑒𝑓𝑡 + 𝑟𝑖𝑔ℎ𝑡) / 2
	}

	𝑧𝑒𝑟𝑜({}) {
		return 0
	}

	𝑜𝑛𝑒({}) {
		return 1
	}

	π({}) {
		return Math.PI
	}

	τ({}) {
		return Math.PI * 2
	}

	𝑐({}) {
		return 299792458
	}

	Φ({}) {
		return (1 + Math.sqrt(5)) / 2
	}

	𝑒({}) {
		return Math.E
	}

	𝑠𝑞𝑟𝑡2({}) {
		return Math.SQRT2
	}

	𝑠𝑞𝑟𝑡3({}) {
		return Math.sqrt(3)
	}

	𝑐𝑏𝑟𝑡2({}) {
		return Math.cbrt(2)
	}

	𝑙𝑛2({}) {
		return Math.LN2
	}

	𝑙𝑛10({}) {
		return Math.LN10
	}

	ħ({}) {
		return 1.054571817e-34
	}

	γ({}) {
		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 1; 𝑖 <= 𝑡𝑒𝑟𝑚𝑠𝐻𝑖; 𝑖 ++) {
			𝑠𝑢𝑚 += 1 / 𝑖
		}
		return 𝑠𝑢𝑚 - Math.log(𝑡𝑒𝑟𝑚𝑠𝐻𝑖)
	}

	ζ3({}) {
		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 1; 𝑖 <= 𝑡𝑒𝑟𝑚𝑠𝐻𝑖; 𝑖 ++) {
			𝑠𝑢𝑚 += 1 / (𝑖 ** 3)
		}
		return 𝑠𝑢𝑚
	}

	𝐺({}) {
		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 0; 𝑖 < 𝑡𝑒𝑟𝑚𝑠𝐿𝑜; 𝑖 ++) {
			𝑠𝑢𝑚 += (-1) ** 𝑖 / ((2 * 𝑖 + 1) ** 2)
		}
		return 𝑠𝑢𝑚
	}

	ϖ({}) {
		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 0; 𝑖 < 𝑡𝑒𝑟𝑚𝑠𝐻𝑖; 𝑖 ++) {
			let 𝑥 = (𝑖 + 0.5) / 𝑡𝑒𝑟𝑚𝑠𝐻𝑖
			𝑠𝑢𝑚 += 1 / Math.sqrt(1 - 𝑥 ** 4)
		}
		return (𝑠𝑢𝑚 / 𝑡𝑒𝑟𝑚𝑠𝐻𝑖) * 1
	}

	𝐴({}) {
		return 1.2824271291006226 // Sorry, I couldn't get an algorithm to work :(
	}

	𝐾0({}) {
		let 𝑝𝑟𝑜𝑑𝑢𝑐𝑡 = 1
		for (let 𝑖 = 1; 𝑖 <= 𝑡𝑒𝑟𝑚𝑠𝐿𝑜; 𝑖 ++) {
			𝑝𝑟𝑜𝑑𝑢𝑐𝑡 *= Math.pow(𝑖, 1 / 𝑖 ** 2)
		}
		return 𝑝𝑟𝑜𝑑𝑢𝑐𝑡
	}

	δ({}) {
		return 4.669201609 // Again, I couldn't get an algorithm to work :(
	}

	α({}) {
		return 2.502907875 // Again Again, I couldn't get an algorithm to work, I'm so sorry :(
	}

	𝑜𝑛𝑒𝑆𝑒𝑣𝑒𝑛𝑡ℎ({}) {
		return 1 / 7
	}

	𝑜𝑛𝑒𝑁𝑖𝑛𝑡ℎ({}) {
		return 1 / 9
	}

	𝑜𝑛𝑒𝑇𝑒𝑛𝑡ℎ({}) {
		return 0.1
	}

	𝑜𝑛𝑒𝑇ℎ𝑖𝑟𝑑({}) {
		return 1 / 3
	}
	𝑡𝑤𝑜𝑇ℎ𝑖𝑟𝑑({}) {
		return 2 / 3
	}

	𝑜𝑛𝑒𝐹𝑖𝑓𝑡ℎ({}) {
		return 0.2
	}
	𝑡𝑤𝑜𝐹𝑖𝑓𝑡ℎ({}) {
		return 0.4
	}
	𝑡ℎ𝑟𝑒𝑒𝐹𝑖𝑓𝑡ℎ({}) {
		return 0.6
	}
	𝑓𝑜𝑢𝑟𝐹𝑖𝑓𝑡ℎ({}) {
		return 0.8
	}

	𝑜𝑛𝑒𝑆𝑖𝑥𝑡ℎ({}) {
		return 1 / 6
	}
	𝑓𝑖𝑣𝑒𝑆𝑖𝑥𝑡ℎ({}) {
		return 5 / 6
	}

	𝑜𝑛𝑒𝐸𝑖𝑔ℎ𝑡ℎ({}) {
		return 0.125
	}
	𝑡ℎ𝑟𝑒𝑒𝐸𝑖𝑔ℎ𝑡ℎ({}) {
		return 0.375
	}
	𝑓𝑖𝑣𝑒𝐸𝑖𝑔ℎ𝑡ℎ({}) {
		return 0.625
	}
	𝑠𝑒𝑣𝑒𝑛𝐸𝑖𝑔ℎ𝑡ℎ({}) {
		return 0.875
	}

	𝑞𝑢𝑎𝑟𝑡𝑒𝑟({}) {
		return 0.25
	}
	𝑡ℎ𝑟𝑒𝑒𝑄𝑢𝑎𝑟𝑡𝑒𝑟({}) {
		return 0.75
	}

	ℎ𝑎𝑙𝑓({}) {
		return 0.5
	}

	𝑧𝑒𝑟𝑜𝑇ℎ𝑖𝑟𝑑({}) {
		return 0
	}

	𝑚𝑎𝑘𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥, 𝑦 }) {
		return `${𝑥} + ${𝑦}𝑖`;
	}	

	𝑎𝑑𝑑𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥, 𝑦 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		𝑦 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑦)
		return `${𝑥.𝑟𝑒𝑎𝑙 + 𝑦.𝑟𝑒𝑎𝑙} + ${𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 + 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦}𝑖`
	}
	
	𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑦𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥, 𝑦 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		𝑦 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑦)
		const 𝑟𝑒𝑎𝑙 = 𝑥.𝑟𝑒𝑎𝑙 * 𝑦.𝑟𝑒𝑎𝑙 - 𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 * 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦
		const 𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 = 𝑥.𝑟𝑒𝑎𝑙 * 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 + 𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 * 𝑦.𝑟𝑒𝑎𝑙
		return `${𝑟𝑒𝑎𝑙} + ${𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦}𝑖`
	}

	𝑚𝑜𝑑𝑢𝑙𝑢𝑠𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		return Math.sqrt(𝑥.𝑟𝑒𝑎𝑙 ** 2 + 𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 ** 2)
	}

	𝑟𝑒𝑎𝑙𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		return 𝑥.𝑟𝑒𝑎𝑙
	}

	𝑖𝑚𝑎𝑔𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		return 𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦
	}

	𝑑𝑖𝑣𝑖𝑑𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥({ 𝑥, 𝑦 }) {
		𝑥 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑥)
		𝑦 = 𝑝𝑎𝑟𝑠𝑒𝐶𝑜𝑚𝑝𝑙𝑒𝑥(𝑦)
		
		const 𝑑𝑒𝑛𝑜𝑚𝑖𝑛𝑎𝑡𝑜𝑟 = 𝑦.𝑟𝑒𝑎𝑙 ** 2 + 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 ** 2
		const 𝑟𝑒𝑎𝑙 = (𝑥.𝑟𝑒𝑎𝑙 * 𝑦.𝑟𝑒𝑎𝑙 + 𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 * 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦) / 𝑑𝑒𝑛𝑜𝑚𝑖𝑛𝑎𝑡𝑜𝑟
		const 𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 = (𝑥.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦 * 𝑦.𝑟𝑒𝑎𝑙 - 𝑥.𝑟𝑒𝑎𝑙 * 𝑦.𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦) / 𝑑𝑒𝑛𝑜𝑚𝑖𝑛𝑎𝑡𝑜𝑟

		return `${𝑟𝑒𝑎𝑙} + ${𝑖𝑚𝑎𝑔𝑖𝑛𝑎𝑟𝑦}𝑖`
	}

	𝑠𝑞𝑟𝑡({ 𝑥 }) {
		return this.𝑟𝑜𝑜𝑡({ 𝑥: 2, 𝑦: 𝑥 })
	}

	𝑐𝑏𝑟𝑡({ 𝑥 }) {
		return this.𝑟𝑜𝑜𝑡({ 𝑥: 3, 𝑦: 𝑥 })
	}

	𝑡𝑠𝑟𝑡({ 𝑥 }) {
		return this.𝑟𝑜𝑜𝑡({ 𝑥: 4, 𝑦: 𝑥 })
	}

	𝑟𝑜𝑜𝑡({ 𝑥, 𝑦 }) {
		if (𝑥 === 0) { return NaN }
		if (𝑥 === 1) { return 𝑦 }

		if (𝑦 >= 0) {
			return 𝑦 ** (1 / 𝑥)
		} else if (𝑥 % 2 === 1 || 𝑥 % 2 === -1) {
			return (-𝑦) ** (1 / 𝑥)
		} else {
			return `0 + ${((-𝑦) ** (1 / 𝑥))}𝑖`
		}
	}

	𝑖𝑐𝑜𝑠𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑛𝑜𝑛𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑜𝑐𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	ℎ𝑒𝑝𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	ℎ𝑒𝑥𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑝𝑒𝑛𝑡𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑡𝑒𝑡𝑟𝑎𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑡𝑟𝑒𝑑𝑒𝑐𝑎𝑙𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑑𝑜𝑑𝑒𝑐𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑢𝑛𝑑𝑒𝑐𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑑𝑒𝑐𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑒𝑛𝑛𝑒𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑜𝑐𝑡𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑜𝑐𝑡𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		if (𝑥 <= 1 || 𝑦 <= 1) return 𝑥
		if (𝑥 === 2 && 𝑦 === 2) return 4
		return Infinity
	}

	ℎ𝑒𝑥𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		if (𝑦 <= 1) return 𝑥
		if (𝑥 >= 3 && 𝑦 >= 3) return Infinity
		if (𝑦 >= 5) return Infinity
	
		if (𝑦 <= 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛) {
			let 𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑥
			for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 = this.𝑝𝑒𝑛𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑟𝑒𝑠𝑢𝑙𝑡 })
			}
			return 𝑟𝑒𝑠𝑢𝑙𝑡
		}
	
		let 𝑠𝑢𝑚 = Math.log(𝑥)
		for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
			𝑠𝑢𝑚 = 𝑥 * 𝑠𝑢𝑚
		}
		return Math.exp(𝑠𝑢𝑚)
	}	

	𝑝𝑒𝑛𝑡𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		if (𝑦 <= 1) return 𝑥
	
		if (𝑦 <= 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛) {
			let 𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑥
			for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 = this.𝑡𝑒𝑡𝑟𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑖 + 1 })
			}
			return 𝑟𝑒𝑠𝑢𝑙𝑡
		}

		let 𝑠𝑢𝑚 = Math.log(𝑥)
		for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
			𝑠𝑢𝑚 += 𝑥 * 𝑠𝑢𝑚
		}
		return Math.exp(𝑠𝑢𝑚)
	}

	𝑡𝑒𝑡𝑟𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		if (𝑦 <= 1) return 𝑥
		
		if (𝑦 <= 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛) {
			let 𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑥;
			for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 = Math.pow(𝑥, 𝑟𝑒𝑠𝑢𝑙𝑡)
			}
			return 𝑟𝑒𝑠𝑢𝑙𝑡
		}

		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 1; 𝑖 < 𝑦; 𝑖 ++) {
			𝑠𝑢𝑚 += Math.log(𝑥)
		}

		return Math.exp(𝑠𝑢𝑚)
	}

	𝑒𝑥𝑝𝑜𝑛𝑒𝑛𝑡𝑖𝑎𝑡𝑒({ 𝑥, 𝑦 }) {
		return 𝑥 ** 𝑦
	}

	𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑦({ 𝑥, 𝑦 }) {
		return 𝑥 * 𝑦
	}

	ℎ𝑦𝑝𝑒𝑟𝑜𝑝𝑒𝑟𝑎𝑡𝑒({ 𝑥, 𝑦, 𝑧 }) {
		if (𝑧 === 0) { return 0 }
		if (𝑧 === 1) { return 𝑥 * 𝑦 }
		if (𝑧 === 2) { return 𝑥 ** 𝑦 }
		if (𝑧 === 3) { return this.𝑡𝑒𝑡𝑟𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 }) }
		if (𝑧 === 4) { return this.𝑝𝑒𝑛𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 }) }
		if (𝑧 === 5) { return this.ℎ𝑒𝑥𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 }) }
		return this.ℎ𝑒𝑝𝑡𝑎𝑡𝑒({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥 }) {
		if (𝑥 < 0) return (𝑥 % 2 === 0 ? 1 : -1) * this.𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥: -𝑥 })

		if (𝑥 <= 1) return 1

		if (𝑥 < 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠.length) return 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠[𝑥 - 2]

		if (𝑥 <= 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠.length + 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛) {
			let 𝑟𝑒𝑠𝑢𝑙𝑡 = 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠[𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠.length - 1]
			for (let 𝑖 = 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠.length; 𝑖 <= 𝑥; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 *= 𝑖
			}
			return 𝑟𝑒𝑠𝑢𝑙𝑡
		} else {
			return Math.sqrt(2 * Math.PI * 𝑥) * Math.pow(𝑥 / Math.E, 𝑥)
		}
	}

	𝑠𝑢𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥 }) {
		if (𝑥 < 0) return (𝑥 % 2 === 0 ? 1 : -1) * this.𝑠𝑢𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥: -𝑥 })
	
		if (𝑥 <= 1) return 1
	
		if (𝑥 <= 𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙𝑠.length + 𝑜𝑝𝑡𝑖𝑚𝑖𝑧𝑎𝑡𝑖𝑜𝑛) {
			let 𝑟𝑒𝑠𝑢𝑙𝑡 = 1
			for (let 𝑖 = 1; 𝑖 <= 𝑥; 𝑖 ++) {
				𝑟𝑒𝑠𝑢𝑙𝑡 *= this.𝑓𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥: 𝑖 })
			}
			return 𝑟𝑒𝑠𝑢𝑙𝑡
		}
	
		let 𝑠𝑢𝑚 = 0
		for (let 𝑖 = 1; 𝑖 <= 𝑥; 𝑖 ++) {
			𝑠𝑢𝑚 += 𝑖 * Math.log(𝑖) - 𝑖
		}
		
		return Math.exp(𝑠𝑢𝑚)
	}
	
	ℎ𝑦𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥 }) {
		if (𝑥 < 0) return (𝑥 % 2 === 0 ? 1 : -1) * this.ℎ𝑦𝑝𝑒𝑟𝐹𝑎𝑐𝑡𝑜𝑟𝑖𝑎𝑙({ 𝑥: -𝑥 })
	
		if (𝑥 <= 1) return 1
	
		let 𝑟𝑒𝑠𝑢𝑙𝑡 = 1
		for (let 𝑖 = 1; 𝑖 <= 𝑥; 𝑖 ++) {
			𝑟𝑒𝑠𝑢𝑙𝑡 *= 𝑖 ** 𝑖
		}
		return 𝑟𝑒𝑠𝑢𝑙𝑡
	}

	𝑏𝑖𝑡𝐴𝑛𝑑({ 𝑥, 𝑦 }) {
		return 𝑥 & 𝑦
	}

	𝑏𝑖𝑡𝑂𝑟({ 𝑥, 𝑦 }) {
		return 𝑥 | 𝑦
	}

	𝑏𝑖𝑡𝑋𝑜𝑟({ 𝑥, 𝑦 }) {
		return 𝑥 ^ 𝑦
	}

	𝑏𝑖𝑡𝑁𝑜𝑡({ 𝑥 }) {
		return ~𝑥
	}

	𝑠ℎ𝑖𝑓𝑡𝐿𝑒𝑓𝑡({ 𝑥, 𝑦 }) {
		return 𝑥 << 𝑦
	}

	𝑠ℎ𝑖𝑓𝑡𝑅𝑖𝑔ℎ𝑡({ 𝑥, 𝑦 }) {
		return 𝑥 >> 𝑦
	}

	𝑟𝑜𝑡𝑎𝑡𝑒𝐿𝑒𝑓𝑡({ 𝑥, 𝑦 }) {
		return (𝑥 << 𝑦) | (𝑥 >>> (32 - 𝑦))
	}

	𝑟𝑜𝑡𝑎𝑡𝑒𝑅𝑖𝑔ℎ𝑡({ 𝑥, 𝑦 }) {
		return (𝑥 >>> 𝑦) | (𝑥 << (32 - 𝑦))
	}
}

Scratch.extensions.register(new BetterMath())
