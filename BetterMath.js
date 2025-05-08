const 𝑡𝑒𝑟𝑚𝑠𝐻𝑖 = 10000000
const 𝑡𝑒𝑟𝑚𝑠𝐿𝑜 = 1000000

const 𝜀 = 0.0001

class BetterMath {
    constructor() {}
    
    getInfo() {
        return {
            "id": "BetterMath",
            "name": "Better Math",
            "blocks": [{
                "opcode": "𝑎𝑝𝑝𝑟𝑜𝑥𝐸𝑞𝑢𝑎𝑙",
                "blockType": Scratch.BlockType.BOOLEAN,
                "text": "[𝑥] ≈ [𝑦]",
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
				"opcode": "𝑖𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≡ [𝑦]",
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
			"---",
			{
				"opcode": "𝑛𝑜𝑡𝐸𝑞𝑢𝑎𝑙",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≶ [𝑦]",
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
				"text": "[𝑥] ≸ [𝑦]",
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
				"text": "[𝑥] ≤ [𝑦]",
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
				"text": "[𝑥] ≥ [𝑦]",
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
				"text": "[𝑥] ≰ [𝑦]",
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
				"text": "[𝑥] ≱ [𝑦]",
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
				"text": "[𝑥] ≮ [𝑦]",
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
				"text": "[𝑥] ≯ [𝑦]",
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
				"text": "[𝑥] ≲ [𝑦]",
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
				"text": "[𝑥] ≳ [𝑦]",
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
				"text": "[𝑥] ≺ [𝑦]",
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
				"text": "[𝑥] ≻ [𝑦]",
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
				"text": "[𝑥] ⪻ [𝑦]",
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
				"text": "[𝑥] ⪼ [𝑦]",
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
				"text": "[𝑥] ⊀ [𝑦]",
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
				"text": "[𝑥] ⊁ [𝑦]",
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
				"text": "[𝑥] ≼ [𝑦]",
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
				"text": "[𝑥] ≽ [𝑦]",
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
				"text": "[𝑥] ≾ [𝑦]",
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
				"text": "[𝑥] ≿ [𝑦]",
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
				"opcode": "𝑑𝑒𝑔",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]𝑟𝑎𝑑 → °",
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
				"text": "[𝑥]° → 𝑟𝑎𝑑",
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
				"text": "Σ([𝑢𝑝], x=[𝑑𝑜𝑤𝑛], [𝑒𝑥𝑝𝑟])",
				"arguments": {
                    "𝑢𝑝": {
                        "type": Scratch.ArgumentType.NUMBER,
                        "defaultValue": 1
                    },
					"𝑒𝑥𝑝𝑟": {
                        "type": Scratch.ArgumentType.STRING,
                        "defaultValue": "x * 2"
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
				"text": "𝑙𝑖𝑚(𝑥→[𝑥], [𝑒𝑥𝑝𝑟])",
				"arguments": {
					"𝑥": {
						"type": Scratch.ArgumentType.NUMBER,
						"defaultValue": 2
					},
					"𝑒𝑥𝑝𝑟": {
						"type": Scratch.ArgumentType.STRING,
						"defaultValue": "(x - 1) / (x * x - 1)"
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
				"opcode": "sqrt2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√2"
			},
			{
				"opcode": "sqrt3",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "√3"
			},
			{
				"opcode": "cbrt2",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "∛2"
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
				"opcode": "𝑝𝑜𝑤𝑒𝑟",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "[𝑥]^[𝑦]",
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
			}],
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

	𝑖𝑑𝑒𝑛𝑡𝑖𝑡𝑦𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦
	}

	𝑛𝑜𝑡𝐸𝑞𝑢𝑎𝑙({ 𝑥, 𝑦 }) {
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
		let result = 0

		if (/[^x+-\/*0-9 ()]/g.test(𝑒𝑥𝑝𝑟)) { return NaN }
		const 𝑓 = new Function("x", `return ${𝑒𝑥𝑝𝑟}`)

		if (𝑑𝑜𝑤𝑛 < 𝑢𝑝) {
			for (let 𝑖 = 𝑑𝑜𝑤𝑛; 𝑖 <= 𝑢𝑝; 𝑖 ++) {
				result += 𝑓(𝑖)
			}
		}
		else {
			for (let 𝑖 = 𝑢𝑝; 𝑖 <= 𝑑𝑜𝑤𝑛; 𝑖 ++) {
				result += 𝑓(𝑖)
			}
		}

		return result
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
		if (/[^x+-\/*0-9 ()]/g.test(𝑒𝑥𝑝𝑟)) { return NaN }
		const 𝑓 = new Function("x", `return ${𝑒𝑥𝑝𝑟}`)

		let 𝑙𝑒𝑓𝑡 = 𝑓(𝑥 - 𝜀)
		let 𝑟𝑖𝑔𝐻𝑡 = 𝑓(𝑥 + 𝜀)
		
		if (Math.abs(𝑙𝑒𝑓𝑡 - 𝑟𝑖𝑔𝐻𝑡) < 𝜀) {
			return (𝑙𝑒𝑓𝑡 + 𝑟𝑖𝑔𝐻𝑡) / 2
		} else {
			return NaN
		}
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

	Φ({}) {
		return (1 + Math.sqrt(5)) / 2
	}

	𝑒({}) {
		return Math.E
	}

	sqrt2({}) {
		return Math.SQRT2
	}

	sqrt3({}) {
		return Math.sqrt(3)
	}

	cbrt2({}) {
		return Math.cbrt(2)
	}

	ln2({}) {
		return Math.LN2
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

	𝑠𝑞𝑟𝑡({ 𝑥 }) {
		return Math.sqrt(𝑥)
	}

	𝑐𝑏𝑟𝑡({ 𝑥 }) {
		return Math.cbrt(𝑥)
	}

	𝑡𝑠𝑟𝑡({ 𝑥 }) {
		return 𝑥 ** 0.25
	}

	𝑟𝑜𝑜𝑡({ 𝑥, 𝑦 }) {
		if (𝑦 === 1) { return 𝑥 }
		return 𝑥 ** (1 / 𝑦)
	}

	power({ 𝑥, 𝑦 }) {
		return 𝑥 ** 𝑦
	}

	𝑚𝑢𝑙𝑡𝑖𝑝𝑙𝑦({ 𝑥, 𝑦 }) {
		return 𝑥 * 𝑦
	}
}

Scratch.extensions.register(new BetterMath())
