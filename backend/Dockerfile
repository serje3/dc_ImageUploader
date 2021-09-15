FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /usr/src/app/

COPY requirements.txt .
COPY entrypoint.sh .



RUN pip install -r requirements.txt


RUN chmod +x entrypoint.sh
RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]

COPY . .

ENTRYPOINT ["sh", "/usr/src/app/entrypoint.sh"]
