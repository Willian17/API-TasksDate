"use strict";
console.log('process.env.DATABASE_URL >> ' + process.env.DATABASE_URL);
module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [process.env.DIRECTORY_MODELS],
    "migrations": [process.env.DIRECTORY_MIGRATIONS],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
};
