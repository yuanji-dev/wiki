# Markdown

## Playground

### Formatting

===! "Formatting"

    - ==This was marked==
    - ^^This was inserted^^
    - ~~This was deleted~~
    - :smile: :material-github: Search Icons: [Icons + Emojis - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)
    - The `#!python range()` function is used to generate a sequence of numbers.
    - Line numbers & highlighting
    ```py linenums="1" hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```
    - Code annotation

        ```yaml
        theme:
          features:
            - content.code.annotate #(1)
        ```

        1. :man_raising_hand: I'm a code annotation! I can contain `code`, **formatted
           text**, images, ... basically anything that can be written in Markdown.

    - Nested Lists
      - The first item
        - No. 1
        - No. 2
      - The second item
      - The third item

    1. Nested Ordered Lists
      1. The first item
        1. No. 1
        1. No. 2
      1. The second item
      1. The third item

=== "Markdown"

    ````
    - ==This was marked==
    - ^^This was inserted^^
    - ~~This was deleted~~
    - :smile: :material-github: Search Icons: [Icons + Emojis - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)
    - The `#!python range()` function is used to generate a sequence of numbers.
    - Line numbers & highlighting
    ```py linenums="1" hl_lines="2 3"
    def bubble_sort(items):
        for i in range(len(items)):
            for j in range(len(items) - 1 - i):
                if items[j] > items[j + 1]:
                    items[j], items[j + 1] = items[j + 1], items[j]
    ```

    - Code annotation

        ```yaml
        theme:
          features:
            - content.code.annotate #(1)
        ```

        1. :man_raising_hand: I'm a code annotation! I can contain `code`, **formatted
           text**, images, ... basically anything that can be written in Markdown.

    - Nested Lists
      - The first item
        - No. 1
        - No. 2
      - The second item
      - The third item

    1. Nested Ordered Lists
      1. The first item
        1. No. 1
        1. No. 2
      1. The second item
      1. The third item
    ````

### Admonition

=== "Admonition"

    !!! note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ???+ note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ??? note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    !!! summary "abstract, summary, tldr"
    !!! info "info, todo"
    !!! tip "tip, hint, important"
    !!! success "success, check, done"
    !!! question "question, help, faq"
    !!! warning "warning, caution, attention"
    !!! failure "failure, fail, missing"
    !!! danger "danger, error"
    !!! bug "bug"
    !!! example "example"
    !!! quote "quote, cite"

=== "Markdown"

    ```
    !!! note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ???+ note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    ??? note "Phasellus posuere in sem ut cursus"

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
        nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
        massa, nec semper lorem quam in massa.

    !!! summary "abstract, summary, tldr"
    !!! info "info, todo"
    !!! tip "tip, hint, important"
    !!! success "success, check, done"
    !!! question "question, help, faq"
    !!! warning "warning, caution, attention"
    !!! failure "failure, fail, missing"
    !!! danger "danger, error"
    !!! bug "bug"
    !!! example "example"
    !!! quote "quote, cite"
    ```

### Table

===! "Table"

    | Method      | Description                          |
    | :---------- | :----------------------------------- |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |

=== "Markdown"

    ```
    | Method      | Description                          |
    | :---------- | :----------------------------------- |
    | `GET`       | :material-check:     Fetch resource  |
    | `PUT`       | :material-check-all: Update resource |
    | `DELETE`    | :material-close:     Delete resource |
    ```

### Keyboard

===! "Keyboard"

    ++ctrl+alt+del++

=== "Markdown"

    ```
    ++ctrl+alt+del++
    ```

### Embedding external files

===! "External file"

    ```yaml title="mkdocs.yml" linenums="1"
    --8<-- "mkdocs.yml"
    ```

=== "Markdown"

    ````
    ```yaml title="mkdocs.yml" linenums="1"
    --8<--​ "mkdocs.yml"
    ```
    ````

## Issues

- Nested list: [Incorrect rendering of nested lists · Issue #545 · mkdocs/mkdocs](https://github.com/mkdocs/mkdocs/issues/545)
  - I'm using prettier to format Markdown and it uses 2 spaces for nested lists, so that i have to install `mdx_truly_sane_lists` extension to bypass this issue

## Linters

I'm using [textlint](https://github.com/textlint/textlint) along with some rules to lint Markdown files. Below is my configurations.

```json title=".textlintrc.json"
--8<-- ".textlintrc.json"
```

Other linters:

- [Linting Markdown And Documentation - Earthly Blog](https://earthly.dev/blog/markdown-lint/)
- [DavidAnson/markdownlint: A Node.js style checker and lint tool for Markdown/CommonMark files.](https://github.com/DavidAnson/markdownlint)
- [btford/write-good: Naive linter for English prose](https://github.com/btford/write-good)
- [amperser/proselint: A linter for prose.](https://github.com/amperser/proselint)
- [errata-ai/vale: A syntax-aware linter for prose built with speed and extensibility in mind.](https://github.com/errata-ai/vale)
- [textlint/textlint: The pluggable natural language linter for text and markdown.](https://github.com/textlint/textlint)

## Links

- GitHub supported languages: [linguist/README.md at master · github/linguist](https://github.com/github/linguist/blob/master/vendor/README.md)
- GitHub Flavored Markdown(GFM): [Basic writing and formatting syntax - GitHub Docs](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [mermaid-js/mermaid: Generation of diagram and flowchart from text in a similar manner as markdown](https://github.com/mermaid-js/mermaid)
- [Syntax Highlighting | Hugo](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages)
- [Rentry.co - Markdown Pastebin](https://rentry.co/)
- [Extensions - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/setup/extensions/)
