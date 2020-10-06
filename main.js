var download = require("download")
var fs = require("fs")
var exec = require("child_process")
var cookie = process.env.cookie
var scriptUrl = "https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js"
async function downloadScript() {
    await download(scriptUrl, "./")
}

async function modifyCookieInScript() {
    var script = fs.readFileSync(`./${scriptName()}`).toString()
    var newScript = script.replace(/var\s*Key\s*=\s*.*/,
        `var Key='${cookie}'`)
    fs.writeFileSync(`./${scriptName()}`,newScript)
}

function scriptName() {
    return scriptUrl.substring(
        scriptUrl.lastIndexOf("/")
    )
}
async function main() {
    if(!cookie){
        fs.writeFileSync("./result", "需要填写cookie")
        return
    }
    await downloadScript()

    await modifyCookieInScript()

    exec.execSync(`node ./${scriptName()} >> result`)
}

main()
