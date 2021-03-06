FROM debian:jessie
MAINTAINER "josh at the http://webhosting.coop/"

RUN DEBIAN_FRONTEND=noninteractive \
apt-get -qq update && apt-get -qqy dist-upgrade && \
apt-get -qqy --no-install-recommends install \
binutils bc ent rng-tools openssl make && \
apt-get -y autoremove && \
apt-get clean && \
rm -Rf /var/lib/apt/lists/*

COPY . /assets
WORKDIR /assets

#ENTRYPOINT ["./passgen"]
#CMD ["-v"]
CMD ["./passgen", "-v"]
