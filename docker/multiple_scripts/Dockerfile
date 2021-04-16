FROM ubuntu:18.04
        
RUN apt update
RUN apt-get install -y python3.6 python3-pip python3-dev build-essential gcc \
    libsnmp-dev snmp-mibs-downloader

RUN pip3 install --upgrade pip

COPY . /

RUN chmod a+x /start.sh
ENTRYPOINT [ "/start.sh" ]