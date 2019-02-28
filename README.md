# todo-list

### Run for develop
`make build`  

or  

`docker-compose up`  
`docker-compose exec api python manage.py migrate`  

### run migrate
`docker-compose exec api python manage.py migrate`

### create admin for backend
`docker-compose exec api python manage.py createsuperuser`

### endpoints 
`localhost:8080` - frontend app  
`localhost:8888` - backend api  
`localhost:8888/admin/` - django admin  