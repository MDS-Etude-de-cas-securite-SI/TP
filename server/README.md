## Setup (Windows)

1. `npm install`
2. And install PM2 globally : `npm install pm2 -g`
3. Launch 2 apps `pm2 start ecosystem.config.js`
___
4. Launch NGinx `start nginx/nginx.exe` or go to `nginx/` and launch the .exe
___
5. Access [http://localhost/](http://localhost/) in your browser.
Or [https://localhost](https://localhost/) for ssl encryption.


## Complementary commands

* Stop the processes : `pm2 stop ecosystem.config.js`
* Delete the processes : `pm2 delete ecosystem.config.js` or `pm2 delete all`
* List processes : `pm2 list`
___
* List NGinx processes (Windows) : `tasklist /fi "imagename eq nginx.exe"`\
or : `for /l %g in () do @( tasklist /fi "imagename eq nginx.exe" & timeout /t 2 )` to refresh it every 2 secondes.
___
* Windows NGinx commands (in `nginx/`)
  * `nginx -s stop`	fast shutdown
  * `nginx -s quit`	graceful shutdown
  * `nginx -s reload`	changing configuration, starting new worker processes with a new configuration, graceful shutdown of old worker processes
  * `nginx -s reopen`	re-opening log files