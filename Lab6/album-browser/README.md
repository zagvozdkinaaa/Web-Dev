# Lab 6 — Album Browser (Routing, HTTP & Services)

Angular SPA that browses albums and photos using the public JSONPlaceholder REST API.

## Features (per lab requirements)
- **Routing**: `/home`, `/about`, `/albums`, `/albums/:id`, `/albums/:id/photos`
- **HTTP**: all API calls are in `AlbumService` using `HttpClient`
- **CRUD**:
  - Read: albums list + album detail
  - Update: edit album title (PUT)
  - Delete: delete album (DELETE) and update UI locally

## How to run

```bash
cd Lab6/album-browser
npm install
npm start
```

Open `http://localhost:4200/`.

## API
Base URL: `http://jsonplaceholder.typicode.com`
