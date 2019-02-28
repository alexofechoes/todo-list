build:
	docker-compose up -d
	docker-compose exec api python manage.py migrate

