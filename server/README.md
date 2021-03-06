## Setup

1. Pull libs `npm install`
2. And install PM2 globally : `npm install pm2 -g`
3. Launch 2 apps `pm2 start ecosystem.config.js`

4. Launch NGinx `start nginx/nginx.exe`
5.

## Complementary commands

* Stop the processes : `pm2 stop ecosystem.config.js`
* Delete the processes : `pm2 delete ecosystem.config.js`
* List processes : `pm2 list`

___
* List NGinx processes : `tasklist /fi "imagename eq nginx.exe"`\
or : `for /l %g in () do @( tasklist /fi "imagename eq nginx.exe" & timeout /t 2 )` to refresh it every 2 secondes.
