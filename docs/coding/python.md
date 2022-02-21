# Python

## Testing

- [Python Mock Gotchas - Alex Marandon](https://alexmarandon.com/articles/python_mock_gotchas/)
- [unit testing - Can I patch a Python decorator before it wraps a function? - Stack Overflow](https://stackoverflow.com/questions/7667567/can-i-patch-a-python-decorator-before-it-wraps-a-function/43213188#43213188)

```python
@pytest.mark.parametrize("hostname,expected", [('localhost', True), ('no-such-hostname.omnia', False)])
def test_hostname_resolvable(hostname, expected):
    assert hostname_resolvable(hostname) == expected
```

- [https://stackoverflow.com/a/51890193](https://stackoverflow.com/a/51890193)

```python
@pytest.mark.parametrize("tenant_id,http_status", [('abc', '201 Created'), ('def', '409 Conflict')])
@patch('app.views.deployments.get_cluster_metadata')
@patch('app.views.deployments.get_existing_deployment_names')
def test_create_deployment_with_conflicting_deleted_deployment_name(mock_get_existing_deployment_names, mock_get_cluster_metadata, tenant_id, http_status, client, monkeypatch):
```

## Resouces

- [The Python Standard Library](https://docs.python.org/3/library/index.html)
- [Ship better Python software, faster](https://pythonspeed.com/)
