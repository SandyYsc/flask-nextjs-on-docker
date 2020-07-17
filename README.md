# flask-next-on-docker
To start app
1. cd [path of flask-nextjs-on-docker]
2. cp services/next-app/.env.example services/next-app/.env.local
3. docker-compose up -d --build
4. docker-compose exec backend python manage.py create_db
