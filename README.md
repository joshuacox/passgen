Generate Passwords Easily

## website

http://joshuacox.github.io/passgen

### Usage

`passgen` uses cryptographically secure random sources to generate strong passwords, passphrases, or tokens and automatically copies them to your clipboard (supporting Wayland, X11, and macOS). In headless/SSH environments, it gracefully prints directly to standard output without crashing.

```bash
# Generate default 16-character password and copy to clipboard
passgen

# Generate custom length password (e.g. 24 chars)
passgen 24

# Generate a 5-word Diceware passphrase (e.g. pebble-sailor-canyon-forest-dragon)
passgen -w 5

# Generate a 6-digit numeric PIN
passgen -p 6

# Generate multiple passwords without copying to clipboard
passgen -c 5 -n

# Copy over SSH using OSC 52 terminal escape sequence
passgen --osc52

# Auto-clear clipboard after 45 seconds for extra security
passgen --clear 45

# View all options and help
passgen -h
```

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

