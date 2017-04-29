Generate Passwords Easily

## website

http://joshuacox.github.io/passgen

### Usage


`passgen` use a pretty good random generator to make a randomized password and copy to it your clipboard, primary and
secondary.

i.e. ctrl-shift-v, shift-insert, and middle click all ought to
work in linux and paste you out a decent password.  Or if you like you
can copy any section of the resulting out of `passgen -v`

`passgen -v`  will get you a bunch of random output on the terminal

`passgen 8`  will get you a random password of length 8 and copy to the
clipboards

`passgen 32`  will get you a random password of length 32 and copy to the
clipboards

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

