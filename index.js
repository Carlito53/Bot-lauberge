const Discord = require("discord.js");

const client = new Discord.Client({partials: ['USER', 'CHANNEL','GUILD_MEMBER', 'MESSAGE', 'REACTION']});
config = require('./config.json')
client.login(process.env.TOKEN);

const prefix = "*";

client.once("ready", () => {
    console.log("Bot près !")

    //mémoire règles
    client.guilds.cache.find(guild => guild.id === config.id.guild).channels.cache.find(channel => channel.id === config.id.salon.regle).messages.fetch(config.id.message.regle).then(message => {
        console.log("Règles ajouter à la mémoire");
    }).catch(err => {
        console.log("Impossible d'ajouter les règles en mémoire : " + err);
    })
    //mémoire choix roles
    /client.guilds.cache.find(guild => guild.id === config.id.guild).channels.cache.find(channel => channel.id === config.id.salon.role).messages.fetch(config.id.message.role).then(message => {
        console.log("Choix des rôles ajouter à la mémoire");
    }).catch(err => {
        console.log("Impossible d'ajouter le choix des rôles en mémoire : " + err);
    })
})

client.on('error', console.error);

//message d'arriver sur le serveur
client.on("guildMemberAdd", member => {
    member.send(`Bienvenue à toi ${member.displayName}, \nJe suis le géran de **${member.guild}** et avant de venire t'assoir et de prendre une bonne bière je te consseille de lire le reglement de cette éblissement. \nCela t'évitera de nombreux enuis :wink: \nBon moi je retourne m'en prendre une j'ai soif :beer:`);
    console.log(`${member.displayName} a rejoin le server`)
    member.guild.channels.cache.find(channel => channel.id === config.id.salon.arriver).send(`Un grand Bienvenue à ${member.user} qui a rejoins **${member.guild}** :tada: Buvons a sa santé !!!!! :beers:`);
})

//message d'aurevoir du serveur
client.on("guildMemberRemove", member => {
    console.log(`${member.displayName} a quitter le server`)
    member.guild.channels.cache.find(channel => channel.id === config.id.salon.depart).send(`Une minute de silence à ${member.user} qui nous a quitter :cry:... Et maintant une grosse bière !!!!! :beers:`);
})

//reaction message ajoute role
client.on("messageReactionAdd", (reaction, user) => {
    console.log("réaction ajoutée");
    if(user.bot) return;

    //Reaction regles
    if(reaction.message.id === config.id.message.regle){
        if(reaction.emoji.id === "685888621361758245"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(config.role.Vagabon).then(mbr => {
                console.log(`Rôle Vagabon attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Vagabon n'as pas été attribué " + err);
            });
        }
    }

    //Reaction roles
    if(reaction.message.id === config.id.message.role){
        //Joueur
        if(reaction.emoji.name === "🎮"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(config.role.Joueur).then(mbr => {
                console.log(`Rôle Joueur attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Joueur n'as pas été attribué " + err);
            });
        }
        //Phasmophobia
        if(reaction.emoji.id === "776085983220203540"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(config.role.Phasmophobia).then(mbr => {
                console.log(`Rôle Phasmophobia attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Phasmophobia n'as pas été attribué " + err);
            });
        }
        //Apex Legend
        if(reaction.emoji.id === "775406799770615888"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(config.role.ApexLegend).then(mbr => {
                console.log(`Rôle Apex Legend attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Apex Legend n'as pas été attribué " + err);
            });
        }
        //Rocket League
        if(reaction.emoji.id === "776083417438748713"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.add(config.role.RocketLeague).then(mbr => {
                console.log(`Rôle Rocket League attribué avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Rocket League n'as pas été attribué " + err);
            });
        }
    }
})

//reaction message retire role
client.on("messageReactionRemove", (reaction, user) => {
    console.log("réaction ajoutée");
    if(user.bot) return;

    //Reaction regles
    /*if(reaction.message.id === config.id.message.regle){
        if(reaction.emoji.id === "789810604973490186"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove(config.role.Vagabon).then(mbr => {
                console.log(`Rôle Vagabon retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Vagabon n'as pas été retiré" + err);
            });
        }
    }*/

    //Reaction roles
    if(reaction.message.id === config.id.message.role){
        //Joueur
        if(reaction.emoji.name === "🎮"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove(config.role.Joueur).then(mbr => {
                console.log(`Rôle Joueur retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Joueur n'as pas été retiré " + err);
            });
        }
        //Phasmophobia
        if(reaction.emoji.id === "776085983220203540"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove(config.role.Phasmophobia).then(mbr => {
                console.log(`Rôle Phasmophobia retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Phasmophobia n'as pas été retiré " + err);
            });
        }
        //Apex Legend
        if(reaction.emoji.id === "775406799770615888"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove(config.role.ApexLegend).then(mbr => {
                console.log(`Rôle Apex Legend retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Apex Legend n'as pas été retiré " + err);
            });
        }
        //Rocket League
        if(reaction.emoji.id === "776083417438748713"){
            var member=reaction.message.guild.members.cache.find(member => member.id === user.id);
            member.roles.remove(config.role.RocketLeague).then(mbr => {
                console.log(`Rôle Rocket League retiré avec succès pour ${mbr.displayName}`);
            }).catch(err => {
                console.log("Le rôle Rocket League n'as pas été retiré " + err);
            });
        }
    }
})

client.on("message", msg => {
    if(msg.author.bot) return;

    //*ping
    if(msg.content == prefix + "ping"){
        msg.channel.send("pong")
    }
})

