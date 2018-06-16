all:
	sqlite3 ../db/mydata.db < scripts/db.sql

init:
	rm -rf ../db && mkdir ../db
	node_modules/.bin/sequelize db:migrate --env development

