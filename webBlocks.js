class WebBlocks {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "WebBlocks",
            "name": "Web Blocks",
            "menuIconURI": "data:image/png;base64,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",
            "blockIconURI": "data:image/png;base64,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",
            "blocks": [{
                "opcode": "fetch",
                "blockType": "reporter",
                "text": "fetch data from url [url]",
                "arguments": {
                    "url": {
                        "type": "string",
                        "defaultValue": "https://jsonplaceholder.typicode.com/todos/1"
                    }
                }
            },
            {
                "opcode": "extract",
                "blockType": "reporter",
                "text": "extract [key] from [json]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "example"
                    },
                    "json": {
                        "type": "string",
                        "defaultValue": '{"example": 15}'
                    }
                }
            },
            {
                "opcode": "http",
                "blockType": "reporter",
                "text": "send an http request to [url] with a method of [method] and a body of [body]",
                "arguments": {
                    "url": {
                        "type": "string",
                        "defaultValue": "https://jsonplaceholder.typicode.com/todos/1"
                    },
                    "method": {
                        "type": "string",
                        "menu": "httpMethods"
                    },
                    "body": {
                        "type": "string",
                        "defaultValue": ""
                    }
                }
            },
            {
                "opcode": "makeJson",
                "blockType": "reporter",
                "text": "make json with key [key] and value [value]",
                "arguments": {
                    "key": {
                        "type": "string",
                        "defaultValue": "example"
                    },
                    "value": {
                        "type": "string",
                        "defaultValue": "15"
                    }
                }
            },
            {
                "opcode": "joinJson",
                "blockType": "reporter",
                "text": "merge json [json1] and [json2]",
                "arguments": {
                    "json1": {
                        "type": "string",
                        "defaultValue": '{"yourKey": 5}'
                    },
                    "json2": {
                        "type": "string",
                        "defaultValue": '{"myKey": 5}'
                    }
                }
            },
            {
                "opcode": "",
                "blockType": "reporter",
                "text": "merge json [json1] and [json2]",
                "arguments": {
                    "json1": {
                        "type": "string",
                        "defaultValue": '{"yourKey": 5}'
                    },
                    "json2": {
                        "type": "string",
                        "defaultValue": '{"myKey": 5}'
                    }
                }
            }
            ],
            "menus": {
                "httpMethods": {
                    "acceptReporters": true,
                    "items": ["GET", "POST", "PUT", "DELETE"]
                }
            }
        }
    }

    fetch({url}) {
        var result = ""
        
        try {
            result = fetch(url).then(response => response.text())
        } catch (error) {
            result = ""
        }

        return result
    }

    extract({key, json}) {
        var parsed = JSON.parse(json)
        if (key in parsed) {
            var out = parsed[key]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }

    async http({method, url, body}) {
        let promise = new Promise((resolve, reject) => {
            const request = new XMLHttpRequest()

            request.addEventListener("readystatechange", () => {
                if (request.readyState === 4) {
                    resolve(request.responseText)
                }
            })

            request.addEventListener("error", () => {
                resolve("error")
            })
            
            try {
                body = body === "" ? null : JSON.parse(body)
            } catch (error) {
                body = null
            }

            request.open(method, url)
            request.send(body)
        })

        let result = "error"

        await promise.then((message) => {
            result = message
        })

        return result
    }

    makeJson({key, value}) {
        try {
            return '{"' + key + '": ' + value + "}"
        } catch (error) {
            return "{}"
        }
    }

    joinJson({json1, json2}) {
        var parse1 = {}
        try {
            parse1 = JSON.parse(json1)
        } catch (error) {
            var tmpParse2 = {}
            try {
                tmpParse2 = JSON.parse(json2)
            } catch (error) {
                tmpParse2 = parse1
            }
            parse1 = Array.isArray(tmpParse2) ? [] : {}
        }
        var parse2 = {}
        try {
            parse2 = JSON.parse(json2)
        } catch (error) {
            parse2 = Array.isArray(parse1) ? [] : {}
        }

        if (((!Array.isArray(parse1)) && (Array.isArray(parse2))) || ((Array.isArray(parse1)) && (!Array.isArray(parse2)))) {
            return "error"
        }

        if ((!Array.isArray(parse1)) && (!Array.isArray(parse2))) {
            const keys = Object.keys(parse2)

            var out = parse1
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                out[key] = parse2[key]
            }
            
            return JSON.stringify(out)
        } else {
            var out = parse1
            for (let i = 0; i < parse2.length; i++) {
                out.push(parse2[i])
            }
            
            return JSON.stringify(out)
        }
    }
}

Scratch.extensions.register(new WebBlocks())
