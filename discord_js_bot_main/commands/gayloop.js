const Discord = require("discord.js");
const Config = require("../config_auth/Config.json");
const { randomBytes } = require("crypto");

module.exports.run = async(bot, message, args) => {
    if(message.author.id != Config.ownerID) return;
    let gayarr = [
        "big gay","biggest gay", "gee of the big", "gayest male", "homo", "gib homo", "gay + homo", "Bee Gray", "gig ay", "bigger gay", "gayer big", "gay boi", "big homo"," the homo hobo", "gay levels off the charts", "gayier than zeus", "more homo that bromancy", "homoer than Priapus", "more gay than phallus (the god)", "ur mum is not gay, but you are", "git good (at being gay)", "only thing you have to fear is fear of yourself", "the homophobic homo gay guy", "big boi bad boi homo ding dong"," bbbiiiiiiiiig gey", "geeeyyeee", "gaaaytye is u", "the gay is you"," the homo is a", "is does" + args[0] + "inst gay?", "ur gay is you"," the homo is that which transcend the gay", "free yourself from gay, become the bigggg gey", "♩seize the power of ur mum is not gay --the gay is you", "♫i know... that you know... that im not telling the truth... i know... that you know.. that the gay is you (high note)♫", "♫ur a gay guy... a gayest man... a gay male... a homo guy♫","GAYGAYGAYGAYAGAYAGAYAGAGAGAGAGRGAGBSTHSHSTHASHSRHSHSJYSSJSJSJYJ","tales of sfgfgefggesfgse, a story of you being gay", "only beyond the veil of not geey can you see yourself of the homo","the person below is gay", "the person above is gay"," your mum is acctualy not gay *wow*, but you are homo", "don't beleive in you, beleive in the me, that beleives that you posses the gift of the dragon king the eye of homo", "beleive that you are not gay, thus you are gey", "you think therefor you arn't gay, but you are in your mind as gay as you are within your heart","A man who accused a gay donkey of trying to rape his horse... (you're now from florida)", "gayer that homo", "homoest gay","gay goo gay gaa: "+ args[0] +" first words", "e = mc^gay", "like hammerpants, but gayer", "like a gorrilla, but homo.. .wait a mi---", "hell hath no fury, like a gay rabbit on cocaine", "cocaine in the vain, cocain in the brain, becouse you are gay, now you are insane", "bigger, faster, gayier, stronger", "inting in leauge, more like gay men...  am i right?", "Caleb, is also gay", "just kidding, ur mum is gay, you are also what does that make your dad? (big gggayeyeey)","within ones self, you can find, the big gay, if you are gay.... which you are...", "gayer that death", "gay men don't tell tales","pet me horse", "pet me gay", "not that gay", "[assorted animal sounds with dunkey mumbling in the background]", "your brussel sprouts are now gay", "bippity boppity, you're gay","hipputus hopppotus, your hippy is now hoppity", "TEN% off at MC DOPUNDELS (for the gays) (which you are) (if you arn't) (we will kill you) (with communism) (y"
    ]
    for(i = 0; i < args[1]; i++){
        setTimeout(() => {
            message.channel.send(args[0] + "—"+gayarr[Math.floor(Math.random() * gayarr.length)]);
        }, 1000 *i)
            
    }
}

module.exports.help = {
    name: "gayloop"
}