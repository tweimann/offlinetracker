# offlinetracker
#### A Discord Bot that tracks the Online Status of two other Bots and sends you a Message if they are offline

## Requirements:
```
-NodeJS v11 (or higher), NPM, ShellJS and DiscordJS v12 (or higher)
-something to Host the Bot on (e.g. a Raspberry Pi 3 or 4)
-basic Linux Terminal or Windows CMD knowledge
```

## Quick-Start:
#### MAKE SURE YOU ENABLED "PRESENCE UPDATES" IN YOUR BOT'S SETTINGS. [Click Here to learn more.](https://stackoverflow.com/questions/61914382/how-can-i-check-if-a-person-has-went-online-offline-etc-in-discord-js/65476091#65476091)
```
-Copy the Files into a single directory
-Copy your Bot-Token into the "settings.json" File
-Enter the Channel-Name the Bot should send the Updates in
-Enter the ID's of your 2 Bots
-Use the Terminal to CD into the Directory the Files are in
-Install the bot with "npm install discord.js shelljs"
-Start the bot with "node bot.js"
```

## Additional Stuff and Hints (mostly for Linux)
```
[W: works for Windows | L: Works for Linux | Haven't tested it with TempleOS, ReactOS and FreeBSD YET :)]
-You can get Every ID by enabling the Dev-Mode in Discord and then Right-Clicking the Profile/Server (W/L)
-Use the @REBOOT function of crontab to auto-start your Bot on Startup (L)
-Use "screen -d -m -S panicbot /path/to/nodejs /path/to/your/bot.js" to run the Bot in the Background (L)
  -You can find the path to NodeJS with "which node" (L)
  -If it doesn't work, try just "node" instead of "/path/to/node"
-You don't need a good Internet Connection for this, but you should have a Ping <1000ms (W/L)
```

## Commands (Prefix: "P" or "p"):
```
ping : responds with your Ping to the Bot in ms
pkall : kills every screen session on your host
pkill : kills a specific screen session on your host
pstart : executes a file that can start your bots
```

## Updates
```
02/27/2021: The Bot Works!
02/27/2021: The Bot starts, but the DiscordJS Library on my test-server is kinda broken.
02/26/2021: The Bot doesn't Work, im looking forward to Fix it. Contributions are welcome.
```
