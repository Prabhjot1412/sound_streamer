## Sound Streamer
This application utilizes React for the front-end and a Rails API for the back-end. It enables users to store and manage photos and music files. Users can review stored images and annotate them with notes. Music files can be organized using playlists accompanied by thumbnails. File storage is managed using Rails Active Storage. Images are stored by creating groups and can be opened via their group's carousel.

## First Time Setup
### Setup database

```
cd backend
rails db:reset
```

### run the servers
backend: `rails -p 3001`
frontend: `npm start`