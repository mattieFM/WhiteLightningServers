package com.AuthoredEntropy;

import discord4j.common.util.Snowflake;
import discord4j.core.DiscordClientBuilder;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.event.domain.message.MessageCreateEvent;
import discord4j.core.event.domain.message.MessageUpdateEvent;
import discord4j.core.object.Embed;
import discord4j.core.object.entity.Message;
import discord4j.core.object.entity.User;
import discord4j.core.object.entity.channel.Channel;
import discord4j.core.object.reaction.ReactionEmoji;

import java.util.EventObject;
import java.util.List;


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
        //on message check reacts
        client.getEventDispatcher().on(MessageCreateEvent.class)
                .map(MessageCreateEvent::getMessage).map(this::ReactCheck).subscribe();
        //on edit
        client.getEventDispatcher().on(MessageUpdateEvent.class).filter(MessageUpdateEvent::isEmbedsChanged)
                .map(MessageUpdateEvent::getMessage).subscribe(m -> {
            EditReactCheck(m.block());
        });
        client.onDisconnect().block();

    }

    public Message ReactCheck(Message message){
        if(message.getAuthor().map(user ->  user.isBot()).orElse(false).equals(true)){
            if(message.getEmbeds().size() > 0) if(message.getEmbeds().get(0).getFooter().map(footer -> footer.getText().contains("InDM")).orElse(false).equals(true)){
                AddReacts(message);
            };
        };
        return message;
    }
    public Message EditReactCheck(Message message){
        if(message.getAuthor().map(user ->  user.isBot()).orElse(false).equals(true)){
            //System.out.println("edit react check");
            if(message.getEmbeds().size() > 0) if(message.getEmbeds().get(0).getFooter().map(footer -> footer.getText().contains("#1")).orElse(false).equals(true)){
                EditAddReacts(message);
            };
        };
        return message;
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
    public void EditAddReacts(Message message){
        Boolean InDM = DMCheck(message);
        message.removeAllReactions().subscribe();
        message.addReaction(ReactionEmoji.custom(Snowflake.of(742938631412514849L), "OfflineMode", false)).subscribe();
        message.addReaction(ReactionEmoji.custom(Snowflake.of(742938267569356822L), "BonusChest", false)).subscribe();
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