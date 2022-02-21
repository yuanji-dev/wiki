# Ansible

- [Running commands - Ansible Tips and Tricks](https://ansible-tips-and-tricks.readthedocs.io/en/latest/ansible/commands/)

## Run playbook using vault password file

```bash
ansible-playbook -i .git/tmp/hosts playbook.yml --vault-password-file=.git/tmp/password-file
```

## Execute commands to multiple hosts

```bash
ansible -i inventory/hosts all -m debug -a 'msg="{{ansible_ssh_host}}"'
```

## Execute commands locally

```bash
ansible all -i "localhost," -c local -m shell -a 'echo hello world'
```
