package com.AuthoredEntropy;

import discord4j.common.util.Snowflake;
import discord4j.core.DiscordClientBuilder;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.event.domain.message.MessageCreateEvent;
import discord4j.core.object.Embed;
import discord4j.core.object.entity.Message;
import discord4j.core.object.entity.User;
import discord4j.core.object.entity.channel.Channel;
import discord4j.core.object.reaction.ReactionEmoji;


public class Main {
    String string = "no";
    String footercontent;
    Boolean ShouldReact = false;
    private GatewayDiscordClient client;
    public static void main(String[] args) {
    new Main().init();




    }
    public void init(){
        client = DiscordClientBuilder.create("NDgwMjM1MDY5ODEwNjcxNjE5.DlowLg.HsxR9VuOMVQmAtTJR0CI0Syp3Co").build().login().block();
        client.getEventDispatcher().on(ReadyEvent.class)
                .subscribe(event -> {
                    User self = event.getSelf();
                    System.out.println(String.format("Logged in as %s#%s", self.getUsername(), self.getDiscriminator()));
                });
        client.getEventDispatcher().on(MessageCreateEvent.class)
                .map(MessageCreateEvent::getMessage).map(this::ReactCheck).subscribe();
        client.onDisconnect().block();
    }

    public Message ReactCheck(Message message){
        if(message.getAuthor().map(user ->  user.isBot()).orElse(false).equals(true)){
            message.getEmbeds().forEach(embed -> embed.getFooter().map(this::GetFooter));
            if(ShouldReact){
                AddReacts(message);
            }
        };
        return message;
    }

    public Boolean GetFooter(Embed.Footer footer){
            footercontent = footer.getText();

            if(footercontent.contains("InDM")){
                ShouldReact = true;
            }

        return ShouldReact;
    }

    public void AddReacts(Message message){
        Boolean InDM = DMCheck(message);
        message.addReaction(ReactionEmoji.custom(Snowflake.of(712007147432575076L), "minecraft", false)).subscribe();
        message.addReaction(ReactionEmoji.custom(Snowflake.of(712007201320992784L), "terraria", false)).subscribe();
        if (!InDM) {
            message.addReaction(ReactionEmoji.custom(Snowflake.of(712015446441721856L), "incognito", false)).subscribe();
        } else {
        }
        ShouldReact = false;
    }
    
    public Boolean DMCheck(Message message){
        return message.getChannel().map(messageChannel -> messageChannel.getType()).map(this::GetString).map(this::DMCheck2).block();
    }

    public String GetString(Channel.Type type){
        string = type.toString();
        return type.toString();
    }
    public Boolean DMCheck2(String s){
        Boolean InDm = false;
        if(s.equalsIgnoreCase("DM"))InDm = true;
        System.out.println(s);
        return InDm;

    }
}