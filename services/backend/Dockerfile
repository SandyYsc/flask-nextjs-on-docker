FROM python:3.8.1-slim-buster

WORKDIR /var/www

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /var/www/requirements.txt
RUN pip install -r requirements.txt

COPY . /var/www/