FROM alpine
RUN apk update --no-cache && \
    apk add --no-cache \
    musl \
    build-base \
    python3 \
    python3-dev \
    py3-pip \
    bash \
    linux-headers \
    libffi-dev && \
    pip3 install --no-cache-dir --upgrade pip && \
    pip3 install flask && \
    pip3 install uwsgi && \
    pip3 install flask-pymongo && \
    pip3 install flask-bcrypt && \
    pip3 install PyJWT && \
    ln -sf /usr/bin/python3 /usr/bin/python && \
    ln -sf /usr/bin/pip3 /usr/bin/pip

EXPOSE 5000

ENV FLASK_APP=app.py
ENV FLASK_DEBUG=1
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

WORKDIR /app

ENTRYPOINT [ "uwsgi" ]
CMD [ "--ini", "app.ini" ]
