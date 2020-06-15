# app

## Docker Launch
```
docker run -dit --rm -p 127.0.0.1:80:8080/tcp -v ~/rapid-stack/vue_apps/vue_app:/app --name vue_dev vue_dev
```

## Docker Shell
```
docker exec -it vue_dev /bin/bash
```
