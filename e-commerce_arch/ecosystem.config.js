module.exports = {
    apps: [
        {
            cwd: './gateway/src',
            name: 'Gateway_NMS',
            script: 'Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        {
            cwd: './user/src',
            name: 'User_NMS',
            script: 'Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        },
        // {
        //     cwd: './Report_NMS',
        //     name: 'Report_NMS',
        //     script: 'app.js',
        //     // instances: 1,
        //     autorestart: true,
        //     watch: true,
        //     ignore_watch: ["node_modules"],
        //     max_memory_restart: '1G',
        //     instance_var: 'INSTANCE_ID',
        //     min_uptime: 5000,
        //     restart_delay: 3000,
        //     max_restarts: 7,
        //     // exec_mode: 'fork',
        //     env: {
        //         NODE_ENV: 'development'
        //     },
        //     env_production: {
        //         NODE_ENV: 'production'
        //     }
        // }
    ],

    deploy: {
        production: {
            user: 'node',
            host: '0.0.0.0',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'yarn && pm2 reload ecosystem.config.js --env production'
        }
    }
};
