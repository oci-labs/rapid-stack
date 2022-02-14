# app

## Build the Docker Container
```
docker build -t vue_dev .
```

## Docker Launch
```
docker run -dit --rm -p 127.0.0.1:80:8080/tcp -v ~/Projects/rapid-stack/vue_apps:/apps --name vue_dev vue_dev
```

## Docker Shell
```
docker exec -it vue_dev /bin/bash
```
