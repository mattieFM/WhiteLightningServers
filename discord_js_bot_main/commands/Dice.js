const Discord = require("discord.js");
function rollDice(max, amount) {
    console.log("reunning rolldice with amount"+amount);
    var arrayofnums = [];
    var num = 0;
    var randnum = 0
    for(i=0; i < amount; i++){
        console.log("reunning in loop with max: "+max);
    randnum = 1+ Math.floor(Math.random()*(max-1 +1));
    num += randnum;
    arrayofnums.push(randnum);
    }
    return [num, arrayofnums];
  }

module.exports.run = async(bot, message, args) => {
    console.log(args[0] + "arg zero" + args[1]);
    
    if(!args[1])args[1]=1;
    let die = args[0].replace('d', ' ');
    var array = die.split(" ");
    console.log(args.length);
    if(args.length > 2){
        console.log(array[0]);
        var num = array[0];
        var dienum = array[1];
        
        var amount = array[0];
        
        if(typeof die == 'number') {message.channel.send("please use the syntax \"XdY +z \" note that \"+z\" may be ignored example \"1d6 +1\"");}
        var randdice = rollDice(dienum, amount);
      console.log(args[2])
      if(args.length > 1){
          var title = args[0] + "+"+args[2];
    var result =  parseFloat(randdice[0]) +parseFloat(args[2]);

}else{
    var title = args[0];
    var result =  parseFloat(randdice[0])
    args[2] = 0;
}


        console.log(randdice);
        args[1] = args[1].substr(1);
        message.channel.send({embed: {
            color: 3447003,
            title: title,
            fields: [{ name: "Result:", value: '('+ result +')\n', inline: true},
            { name: "Details", value: '['+randdice[1].toString()+',+'+ args[2]+']\n', inline: true}
          ]
        }
      });
        
    }else{
        
    console.log(array[0]);
    var num = array[0];
    var dienum = array[1];
    
    var amount = array[0];
    
    if(typeof die == 'number') {message.channel.send("please use the syntax \"XdY +z \" note that \"+z\" may be ignored example \"1d6 +1\"");}
    var randdice = rollDice(dienum, amount);
    console.log(args.length);
    if(args[1].toString().includes("+")){
        console.log("args 1 : "+args[1]);
        console.log('here' + args.length);
        var title = args[0] + "+"+args[1];
  var result =  parseFloat(randdice[0]) +parseFloat(args[1]);
  args[1] = args[1].substr(1)
}else{
    console.log("args 0 : "+args[0]);
    console.log("args 1 : "+args[1]);
    console.log("args 2 : "+args[2]);
  var title = args[0];
  var result =  parseFloat(randdice[0])
  args[1] = 0;
}
    
    console.log(randdice);
    ;
    message.channel.send({embed: {
        color: 3447003,
        title: args[0] + "+"+args[1],
        fields: [{ name: "Result:", value: '('+ result +')\n', inline: true},
        { name: "Details", value: '['+randdice[1].toString()+',+'+ args[1]+']\n', inline: true}
      ]
    }
  });
    
    }
    

}

module.exports.help = {
    name: "roll"
}