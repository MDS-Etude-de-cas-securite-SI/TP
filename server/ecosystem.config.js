/**
 * @see https://pm2.keymetrics.io/docs/usage/application-declaration/
 */
module.exports = {
  apps: [{
    // name: "index-app-1",
    script: 'routes/index.js',
    watch: 'routes/',

    // to manually load-balance with custom port
    instances: "1",
    exec_mode: "fork",

    // to use npm2 as a load-balancer
    // instances : "2",
    // exec_mode : "cluster",

    env: {
      NODE_ENV: "development",
      PORT: 8000,
    }
    // env_production: {
    //   NODE_ENV: "production",
    // }
  },
  {
    // name: "index-app-2",
    script: "routes/index.js",
    watch: 'routes/',

    // to manually load-balance with custom port
    instances: "1",
    exec_mode: "fork",

    env: {
      NODE_ENV: "development",
      PORT: 9000
    },
    // env_production: {
    //   NODE_ENV: "production",
    // }
  }],



  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }

};
