build:
	rm -rf frontend/dist
	make -C frontend build

start:
	npx start-server -s ./frontend/dist