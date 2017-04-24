Generate Passwords Easily 

## website 

http://joshuacox.github.io/passgen

### Usage

`passgen`  will get you a bunch of random output

`passgen 8`  will get you a bunch of random output of length 8

### Install

##### oneliner (it’s how I install myself so I’m leaving this up top)

```
curl https://raw.githubusercontent.com/joshuacox/passgen/master/bootstrappassgen.sh|sh
```

##### manual install

just copy the wanted files somewhere into your path

alternatively, if you want to install them all to `/usr/local/bin/`, then

```
sudo make install
```

##### Ansible install

or you can add hosts to a passgen list in your ansible hosts file like so

```
examplehost1 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.4 ansible_ssh_user=root
examplehost2 ansible_ssh_port=2222 ansible_ssh_host=1.2.3.5 ansible_ssh_user=root

[passgen]
exampleHost1
exampleHost2
```
and use ansible to install to those hosts

```
make play
```

