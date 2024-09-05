
module.exports = {
    apps: [
      {
        name: 'phongtro',
        cwd: '/var/www/phongtro/server',
        script: 'npm',
        args: 'run dev',
        watch: true,
        env: {
          NODE_ENV: 'development',
          
        },
        env_production: {
          NODE_ENV: 'production',
          PORT: 3030,
        },
      },
      {
        name: 'travel',
        cwd: '/var/www/travel/server',
        script: 'npm',
        args: 'run dev',
        watch: true,
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
          PORT:3031,
          DB_USERNAME_PRO: 'root',
          DB_PASSWORD_PRO: 'truong911',
          DB_DATABASE_PRO:  'travel',
          DB_HOST_PRO: 'localhost',
          DB_PORT_PRO: 3306,
        },
      },
    ],