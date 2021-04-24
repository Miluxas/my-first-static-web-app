module.exports = {
    apps: [
        {
            cwd: './gateway',
            name: 'Gateway_KOA_NMS',
            script: 'src/Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            // instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            // node_args: '-r dotenv/config',
            env: {
                PORT: 7000,
                NODE_ENV: 'development'
            }
        },
        {
            cwd: './product',
            name: 'Product_GRPC_NMS',
            script: 'src/Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            // instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            // node_args: '-r dotenv/config',
            env: {
                PORT: 7001,
                NODE_ENV: 'development'
            }
        },
        {
            cwd: './user',
            name: 'User_GRPC_NMS',
            script: 'src/Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            // instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            // node_args: '-r dotenv/config',
            env: {
                PORT: 7002,
                NODE_ENV: 'development'
            }
        },
        {
            cwd: './inventory',
            name: 'Inventory_GRPC_NMS',
            script: 'src/Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            // instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            // node_args: '-r dotenv/config',
            env: {
                PORT: 7003,
                NODE_ENV: 'development'
            }
        },
        {
            cwd: './order',
            name: 'Order_GRPC_NMS',
            script: 'src/Server.ts',
            // instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            max_memory_restart: '1G',
            // instance_var: 'INSTANCE_ID',
            min_uptime: 5000,
            restart_delay: 3000,
            max_restarts: 7,
            // node_args: '-r dotenv/config',
            env: {
                PORT: 7004,
                NODE_ENV: 'development'
            }
        },
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
