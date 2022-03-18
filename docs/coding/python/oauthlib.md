# OAuthLib

> OAuthLib - Python Framework for OAuth1 & OAuth2
>
> A generic, spec-compliant, thorough implementation of the OAuth request-signing logic
>
> -- <cite>[oauthlib/oauthlib](https://github.com/oauthlib/oauthlib)</cite>

## Code snippets

You might be more interested in using [requests](https://github.com/psf/requests) which has OAuthLib powered OAuth support provided by the [requests-oauthlib](https://github.com/requests/requests-oauthlib) library.

===! "Client Credentials Grant"

    ```python
    from oauthlib.oauth2 import BackendApplicationClient
    from requests_oauthlib import OAuth2Session

    session = OAuth2Session(
        client=BackendApplicationClient(client_id=CLIENT_ID),
        auto_refresh_url=TOKEN_URL,
        auto_refresh_kwargs={
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
        },
        token_updater=lambda t: t,
    )
    session.fetch_token(
        token_url=TOKEN_URL,
        client_secret=CLIENT_SECRET,
        include_client_id=True,
    )
    ```

=== "Password Credentials Grant"

    ```python
    from oauthlib.oauth2 import LegacyApplicationClient
    from requests_oauthlib import OAuth2Session

    session = OAuth2Session(
        client=LegacyApplicationClient(client_id=CLIENT_ID),
        auto_refresh_url=TOKEN_URL,
        auto_refresh_kwargs={
            "client_id": CLIENT_ID,
            "username": USERNAME,
            "password": PASSWORD,
        },
        token_updater=lambda t: t,
    )
    session.fetch_token(
        token_url=TOKEN_URL,
        username=USERNAME,
        password=PASSWORD,
        include_client_id=True,
    )
    ```

## Links

- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)
