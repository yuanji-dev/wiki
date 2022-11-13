# Ansible

- [Running commands - Ansible Tips and Tricks](https://ansible-tips-and-tricks.readthedocs.io/en/latest/ansible/commands/)

## Run playbook using vault password file

```bash
ansible-playbook -i .git/tmp/hosts playbook.yml --vault-password-file=.git/tmp/password-file
```

## Execute commands to multiple hosts

```bash
ansible -i inventory/hosts all -m debug -a 'msg="{{ansible_ssh_host}}"' -u jiangyuanji01 --ask-pass --ask-become-pass --become --become-user=root
```

## Execute commands locally

```bash
ansible all -i "localhost," -c local -m shell -a 'echo hello world'
```

## Limit loop output with label

```yaml
- name: Create servers
  digital_ocean:
    name: "{{ item.name }}"
    state: present
  loop:
    - name: server1
      disks: 3gb
      ram: 15Gb
      network:
        nic01: 100Gb
        nic02: 10Gb
        ...
  loop_control:
    label: "{{ item.name }}"
```

Ref: [Loops — Ansible Documentation](https://docs.ansible.com/ansible/latest/user_guide/playbooks_loops.html#limiting-loop-output-with-label)
