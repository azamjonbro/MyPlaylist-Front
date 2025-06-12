# 🎵 Music Upload Frontend

A beautiful and minimal frontend interface for uploading and managing songs, designed to work with a custom Node.js + Express backend. Built for simplicity and music streaming projects.

## 🚀 Features

- 🎧 Upload MP3/WAV audio files
- 🖼 Add song metadata (title, artist, cover image)
- ⏱ Shows audio duration (extracted automatically by backend)
- 📦 Works seamlessly with the `/uploads` folder from backend
- ✅ Clean UI for quick testing and demos

## 🌐 Technologies Used

- HTML5 + CSS3
- Vanilla JavaScript (Fetch API)
- Bootstrap (optional, customizable)
- Works with Node.js + Express backend (with Multer & ffmpeg)

## 📸 Screenshot

![screenshot](https://picsum.photos/id/300/800/300)

## 📂 How to Use

1. Clone the repository or copy the frontend folder
2. Make sure the backend server (Node.js API) is running
3. Open `index.html` in your browser
4. Fill in the form and upload a song

## 🧩 API Requirements

This frontend expects the following backend:

### `POST /songs`

- **Form-Data Params:**
  - `audio` - (File) Required MP3/WAV file
  - `title` - (String) Required
  - `artist` - (String) Optional
  - `cover` - (String) Optional image URL

**Response:**
```json
{
  "id": "1749758531934",
  "title": "Yana San",
  "artist": "Ummon",
  "duration": 213,
  "cover": "https://example.com/cover.jpg",
  "audioUrl": "http://localhost:5000/uploads/audio.mp3"
}
```

## 🛠 Setup

No build tools required. Just open in your browser.

Make sure backend is hosted at the correct URL (edit `script.js` if needed):

```js
fetch('http://localhost:5000/songs', {
  method: 'POST',
  ...
})
```

## 📁 File Structure

```
frontend/
├── index.html
├── style.css
└── script.js
```

## 📝 License

MIT – free to use and customize!

---

Created with ❤️ by @azamjonbro
