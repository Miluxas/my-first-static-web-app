import { config } from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = config();
if (envFound.error) {
	// This error should crash whole process
	throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
	/**
	 * Your favorite port
	 */
	port: Number(process.env.PORT),

	/**
	 * That long string from mlab
	 */
	databaseURL: process.env.MONGODB_URI,

	/**
	 * Your secret sauce
	 */
	jwtSecret: process.env.JWT_SECRET,

	/**
	 * Used by winston logger
	 */
	logs: {
		level: process.env.LOG_LEVEL || 'silly',
	},

	/**
	 * Agenda.js stuff
	 */
	agenda: {
		dbCollection: process.env.AGENDA_DB_COLLECTION,
		pooltime: process.env.AGENDA_POOL_TIME,
		concurrency: Number(process.env.AGENDA_CONCURRENCY),
	},

	/**
	 * Agendash config
	 */
	agendash: {
		user: 'agendash',
		password: '123456',
	},
	/**
	 * API configs
	 */
	api: {
		prefix: '/api',
	},
	/**
	 * Mailgun email credentials
	 */
	emails: {
		apiKey: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN,
	},
};
