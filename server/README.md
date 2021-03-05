# Setup

1. Pull libs `npm install`
2. And install PM2 globally : `npm install pm2 -g`
3. Launch 2 apps `pm2 start ecosystem.config.js`


## Complementary commands

Stop the processes : `pm2 stop ecosystem.config.js`
Delete the processes : `pm2 delete ecosystem.config.js`
List processes : `pm2 list`