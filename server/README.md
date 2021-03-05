# Setup

1. Pull libs `npm install`
2. And install PM2 globally : `npm install pm2 -g`
3. Launch 2 apps `pm2 start routes/index.js -i 2` or launch the most you can `pm2 start routes/index.js -i max`* 

\* : change in consequence the *upstream app_servers* property in the [NGinx configuration](nginx\conf\nginx.conf)

## Complementary commands

Stop the processes : `pm2 stop index`
Delete the processes : `pm2 delete index`