Reqs

Start Express JS API
git init (git setup, but need to git remote add to connect to repo)
npm init -y (create package.json, -y answers all questions)
npx gitignore node (ignore node_modules folder)
npm i express helmet sqlite3 : express, helmet, sqlite3
npm i nodemon -D : nodemon as dev dep
Migrations
A way to record changes to a database schema
Like Git, for the database structure. Basically just commits.

EVERY CHANGE TO DATABASE SCHEMA (STRUCTURE) MUST BE DONE WITH A NEW MIGRATION (COMMIT)

Initialize knex for our project (creates knexfile.js): knex init

Optionally install knex globally on system: npm i -g knex. If installed globally, no longer need npx

Create a migration: npx knex migrate: make namehere

Use the migration to declare changes we plan to make to the schema:

Run a migration: knex migrate:up

Go back/undo last migration. knex migrate:down

Update database to latest changes/migrations: knex migrate:latest <= multiple new migrations

Undo multiple migrations that ran together: knex migrate:rollback

Need to connect/configure our application so that it knows how to connect to database.