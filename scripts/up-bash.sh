echo "========> Starting container"
docker compose up -d

echo "========> Starting app bash"
docker-compose exec app bash

