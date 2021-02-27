# panicbot
A Discord Bot that tracks the Online Status of two other Bots and sends you a Message if they are offline

## Requirements:
```
-NodeJS and NPM
-something to Host the Bot on (e.g. a Raspberry Pi)
-basic Linux Terminal or Windows CMD knowledge
```

## Quick-Start:
```
-Copy the Files into a single directory
-Copy your Bot-Token into the "settings.json" File
-Enter the Interval the Bot should be looking for presence Updates
-Enter the Channel-Name the Bot should send the Updates in
-Enter the ID's of your 2 Bots
-Use the Terminal to CD into the Directory the Files are in
-Install the bot with "npm install"
-Start the bot with "node bot.js"
```

## Additional Stuff and Hints (mostly for Linux)
```
-Use the @REBOOT function of crontab to auto-start your Bot on Startup
-Use "screen -d -m -S panicbot /path/to/nodejs /path/to/your/bot.js" to run the Bot in the Background
-You can find the path to NodeJS with "which node"
```

## Commands (Prefix: ">"):
```
ping : responds with your Ping to the Bot in ms
```

## Updates
```
02/27/2021: The Bot starts, but the DiscordJS Library on my test-server is kinda broken.
02/26/2021: The Bot doesn't Work, im looking forward to Fix it. Contributions are welcome.
```
