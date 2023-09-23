## Generate volumes command

```bash
docker-compose -f tools/docker-atman/dev.docker-compose.yml up -d --no-recreate --remove-orphans
```

## Delete volumes command

```bash
docker-compose -f tools/docker-atman/dev.docker-compose.yml down --rmi all --volumes --remove-orphans
```

> Reference url : https://qiita.com/suin/items/19d65e191b96a0079417
