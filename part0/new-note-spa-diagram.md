```mermaid
  sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    deactivate server
    Note right of browser: Payload = {content: "new note", date: "2023-10-25T14:15:34.796Z"}
```