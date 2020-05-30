package com.AuthoredEntropy;

import discord4j.core.DiscordClientBuilder;
import discord4j.core.GatewayDiscordClient;
import discord4j.core.event.domain.lifecycle.ReadyEvent;
import discord4j.core.event.domain.message.MessageCreateEvent;
import discord4j.core.object.Embed;
import discord4j.core.object.entity.Message;
import discord4j.core.object.entity.User;

public class Main {
    String footercontent;
    Boolean ShouldReact;
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
        message.getEmbeds().forEach(embed -> embed.getFooter().map(this::GetFooter));
        if(ShouldReact){

        }
        return message;

    }

    public Boolean GetFooter(Embed.Footer footer){
            footercontent = footer.getText();
            if(footercontent.equalsIgnoreCase())
            ShouldReact = true;
        return ShouldReact;
    }

    public void AddReacts(Message message){
        message.addReaction();
    }
}