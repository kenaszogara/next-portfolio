---
title: "Flask Setup Using uWSGI"
subtitle: "A Step-By-Step Guide to start using Flask application with uWSGI"
date: "2020-01-01"
---

### start application:

[flask installation reference](https://flask.palletsprojects.com/en/1.1.x/installation/#installation)

- `python3 -m venv venv` -> create venv
- `source venv/Scripts/activate` -> activate venv (in Windows)
- `source venv/bin/activate` -> activate venv (in Linux)
  [if there is an error in venv creation](https://stackoverflow.com/questions/24123150/pyvenv-3-4-returned-non-zero-exit-status-1/41430732re)
- (venv) `pip install -r requirements` -> install requirements

### uWSGI installation:

- (venv) `pip install wheel uwsgi flask` -> install wheel, uwsgi, and flask
- (venv) `vim uwsgi.py` -> create uwsgi.py as entrypoint in root

```python
from app import app


```

- (venv) `uwsgi --socket 0.0.0.0:5000 --protocol=http -w wsgi:app` -> run uwsgi in localhost:5000

### create uWSGI service

- deactivate from venv and create uWSGI configuratin file: `app.ini`

```ini
[uwsgi]
module = wsgi:app
master true
processes = 5

socket = app.sock
chmod-socket = 660
vacuum = true

die-on-term = true

```

- create a .service to run app using uwsgi in systemd

```service
[Unit]
Description=uWSGI instance to serve unio ml app
After=network.target
Conflicts=getty@tty1.service

[Service]
Group=www-data
ExecStart=/home/unio-ml/venv/bin/uwsgi --ini app.ini
WorkingDirectory=/home/unio-ml
Environment="PATH=/home/unio-ml/venv/bin"

[Install]
WantedBy=multi-user.target

```

### Connect uwsgi to NGINX proxy request

- create an nginx proxy request to the uwsgi service and save it to /etc/nginx/sites-availbale

```
server {
    listen 5700;
    unio_ml_server unio_ml_domain  www.unio_ml_domain;

    location / {
        include uwsgi_params;
        uwsgi_pass unix:/path/to/app/app.sock;
    }
}
```

- check if script is working `nginx -t` then restart nginx `systemctl restart nginx`

[reference](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uswgi-and-nginx-on-ubuntu-18-04)
