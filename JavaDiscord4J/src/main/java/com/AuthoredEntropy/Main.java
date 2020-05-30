package com.AuthoredEntropy;

import discord4j.core.DiscordClientBuilder;
import discord4j.core.GatewayDiscordClient;


public class Main {

    public static void main(){
        GatewayDiscordClient client = DiscordClientBuilder.create("TOKEN HERE")
                .build()
                .login()
                .block();
        client.onDisconnect().block();
    }
}
