module.exports = {
    name: "love",
    permission: 1,
    main: function(bot, msg) {
        var lovee = msg.mentions.users.array()[0];

        if (lovee != null) {
            var arr1 = [lovee.toString() + `, trust me, you are loved. Sometimes, love can seem like such a scarce aspect of life. In actuality, love is everywhere; maybe, you just need to look in a different place, or person. Nevertheless, it's there, and there will always be enough of it to warm up your day.`,
                    `Hey, ` + lovee.toString() + `, regardless of how things are going, I just want to let you know that we love you. From the bottom of my heart, I truly do love you.`,
                    `Psst, ` + lovee.toString() + `, we all love you. Remember that sometimes, people hurt you because they care. The people that care about us are the ones prone to leave the most damage when things don't go too well - but, they're always the ones who come back to fix things.`,
                    `If you're feeling hurt, betrayed, or alone, keep in mind that these feelings are temporary! It's the sadness in these times that give such genuine meaning to the happiness in others - things will get better, if not now, then later. You are the master of your future, and you can do anything! I love you, ` + lovee.toString() + `, we all do.`,
                    `No one on Earth is like you, because you are the best at being *you!* Don't change who you are because someone else may not like it - I bet there are a hundred people out there who would tell you that they love you for who you are. Change is a consensual aspect on life, you must change only when *you* want to, because, otherwise, you risk losing yourself to someone who may not even know any better. Just keep being yourself, we all love you, ` + lovee.toString() + `!`,
                    `Hey there, ` + lovee.toString() + `, I just wanted to check in and tell you that we love you! If you're feeling unloved, remember that love is actually a constant in our lives; in other words, since so many people like me (and your good friend who triggered this command) love you to death, it's easy to grow used to it and forget the novelty of that love. It doesn't mean that love is any smaller or means anything less, it just means our love for you was, is, and will continue to be there for you. We love you so, so, so very much. Never forget that.`,
                    `You know, ` + lovee.toString() + `, you always make each day such a special day! You know how: by just your being you. There's only one person in the whole world exactly like you, and that's you yourself, and people can like you exactly as you are! Fred Rogers once said that to me and all his viewers, and I think he would give just about anything to say it to you! Chin up, ` + lovee.toString() + `, you are perfect just they way you are!`]
            msg.channel.send(arr1[Math.floor(Math.random() * arr1.length)]) 
        } else {
            var arr2 = [`I love you! Things may seem sad and lonely now, but they certainly will lighten up soon!`,
                    `hang in there! I, as well as so many others, believe in you! You gotta keep going for as long as you can, because quitting now means you quit forever.\n*"If you're walking down the right path and you're willing to keep walking, eventually you'll make progress."* -Barack Obama`]
            msg.reply(arr2[Math.floor(Math.random() * arr2.length)])
        }
    }
}