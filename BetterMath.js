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
                "opcode": "approxEqual",
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
				"opcode": "notEqual",
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
				"opcode": "equal",
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
				"opcode": "lessThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≤ [𝑦]",
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
				"opcode": "moreThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≥ [𝑦]",
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
				"opcode": "notLessThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≰ [𝑦]",
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
				"opcode": "notMoreThanOrEqual",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≱ [𝑦]",
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
				"opcode": "notLessThan",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≮ [𝑦]",
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
				"opcode": "notMoreThan",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ≯ [𝑦]",
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
				"opcode": "lessOrApproxEqual",
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
				"opcode": "moreOrApproxEqual",
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
			{
				"opcode": "precedes",
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
				"opcode": "succeeds",
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
				"opcode": "doublePrecedes",
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
				"opcode": "doubleSucceeds",
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
				"opcode": "notPrecedes",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ⊀ [𝑦]",
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
				"opcode": "notSucceeds",
				"blockType": Scratch.BlockType.BOOLEAN,
				"text": "[𝑥] ⊁ [𝑦]",
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
				"opcode": "precedesOrEqual",
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
				"opcode": "succeedsOrEqual",
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
				"opcode": "precedesOrApproxEqual",
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
				"opcode": "succeedsOrApproxEqual",
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
				"opcode": "oneSeventh",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅐"
			},
			{
				"opcode": "oneNinth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅑"
			},
			{
				"opcode": "oneTenth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅒"
			},
			{
				"opcode": "oneThird",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅓"
			},
			{
				"opcode": "twoThird",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅔"
			},
			{
				"opcode": "oneFifth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅕"
			},
			{
				"opcode": "twoFifth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅖"
			},
			{
				"opcode": "threeFifth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅗"
			},
			{
				"opcode": "fourFifth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅘"
			},
			{
				"opcode": "oneSixth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅙"
			},
			{
				"opcode": "fiveSixth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅚"
			},
			{
				"opcode": "oneEighth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅛"
			},
			{
				"opcode": "threeEighth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅜"
			},
			{
				"opcode": "fiveEighth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅝"
			},
			{
				"opcode": "sevenEighth",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "⅞"
			},
			{
				"opcode": "quarter",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "¼"
			},
			{
				"opcode": "threeQuarter",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "¾"
			},
			{
				"opcode": "half",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "½"
			},
			{
				"opcode": "zero",
				"blockType": Scratch.BlockType.REPORTER,
				"text": "↉"
			},
			"---",
			{
				"opcode": "sqrt",
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
				"opcode": "cbrt",
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
				"opcode": "ftrt",
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
				"opcode": "root",
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
				"opcode": "power",
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
				"opcode": "multiply",
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
				"opcode": "deg",
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

	𝑑𝑒𝑔({ 𝑥 }) {
		return 𝑥 * (180 / Math.PI)
	}

	𝑟𝑎𝑑({ 𝑥 }) {
		return 𝑥 * (Math.PI / 180)
	}

    approxEqual({ 𝑥, 𝑦 }) {
		return Math.round(𝑥) === Math.round(𝑦)
	}

	notEqual({ 𝑥, 𝑦 }) {
		return 𝑥 !== 𝑦
	}

	equal({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦
	}

	lessThanOrEqual({ 𝑥, 𝑦 }) {
		return 𝑥 <= 𝑦
	}
	moreThanOrEqual({ 𝑥, 𝑦 }) {
		return 𝑥 >= 𝑦
	}

	notLessThanOrEqual({ 𝑥, 𝑦 }) {
		return 𝑥 > 𝑦
	}
	notMoreThanOrEqual({ 𝑥, 𝑦 }) {
		return 𝑥 < 𝑦
	}

	notLessThan({ 𝑥, 𝑦 }) {
		return 𝑥 >= 𝑦
	}
	notMoreThan({ 𝑥, 𝑦 }) {
		return 𝑥 <= 𝑦
	}

	lessOrApproxEqual({ 𝑥, 𝑦 }) {
		return (𝑥 < 𝑦) || this.approxEqual({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	moreOrApproxEqual({ 𝑥, 𝑦 }) {
		return (𝑥 > 𝑦) || this.approxEqual({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	precedes({ 𝑥, 𝑦 }) {
		return 𝑥 + 1 === 𝑦
	}
	succeeds({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦 + 1
	}

	doublePrecedes({ 𝑥, 𝑦 }) {
		return 𝑥 + 2 === 𝑦
	}
	doubleSucceeds({ 𝑥, 𝑦 }) {
		return 𝑥 === 𝑦 + 2
	}

	notPrecedes({ 𝑥, 𝑦 }) {
		return !this.precedes({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	notSucceeds({ 𝑥, 𝑦 }) {
		return !this.succeeds({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}

	precedesOrEqual({ 𝑥, 𝑦 }) {
		return (𝑥 + 1 === 𝑦) || 𝑥 === 𝑦
	}
	succeedsOrEqual({ 𝑥, 𝑦 }) {
		return (𝑥 === 𝑦 + 1) || 𝑥 === 𝑦
	}

	precedesOrApproxEqual({ 𝑥, 𝑦 }) {
		return (𝑥 + 1 === 𝑦) || this.approxEqual({ 𝑥: 𝑥, 𝑦: 𝑦 })
	}
	succeedsOrApproxEqual({ 𝑥, 𝑦 }) {
		return (𝑥 === 𝑦 + 1) || this.approxEqual({ 𝑥: 𝑥, 𝑦: 𝑦 })
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

	oneSeventh({}) {
		return 1 / 7
	}

	oneNinth({}) {
		return 1 / 9
	}

	oneTenth({}) {
		return 0.1
	}

	oneThird({}) {
		return 1 / 3
	}
	twoThird({}) {
		return 2 / 3
	}

	oneFifth({}) {
		return 0.2
	}
	twoFifth({}) {
		return 0.4
	}
	threeFifth({}) {
		return 0.6
	}
	fourFifth({}) {
		return 0.8
	}

	oneSixth({}) {
		return 1 / 6
	}
	fiveSixth({}) {
		return 5 / 6
	}

	oneEighth({}) {
		return 0.125
	}
	threeEighth({}) {
		return 0.375
	}
	fiveEighth({}) {
		return 0.625
	}
	sevenEighth({}) {
		return 0.875
	}

	quarter({}) {
		return 0.25
	}
	threeQuarter({}) {
		return 0.75
	}

	half({}) {
		return 0.5
	}

	zero({}) {
		return 0
	}

	sqrt({ 𝑥 }) {
		return Math.sqrt(𝑥)
	}

	cbrt({ 𝑥 }) {
		return Math.cbrt(𝑥)
	}

	ftrt({ 𝑥 }) {
		return 𝑥 ** 0.25
	}

	root({ 𝑥, 𝑦 }) {
		if (𝑦 === 1) { return 𝑥 }
		return 𝑥 ** (1 / 𝑦)
	}

	power({ 𝑥, 𝑦 }) {
		return 𝑥 ** 𝑦
	}

	multiply({ 𝑥, 𝑦 }) {
		return 𝑥 * 𝑦
	}
}

Scratch.extensions.register(new BetterMath())
