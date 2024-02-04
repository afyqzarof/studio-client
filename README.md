<!-- # Project Title -->

# studio

## To run

1. ensure .env file is filled out with the backend url. See .env.sample
2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

## Overview

An inspiration board where the user can add pictures, videos and text from various different sources e.g. Youtube, Instagram, TikTok, Pinterest, Spotify

### Problem

- To aid with ideations in various creative industries
- Not enough practical tools available to navigate complex creative ideas
- It is difficult to communicate creative ideas only with text and inspiration may be on different platforms.
- To aid with 'writer's block' by enabling users to view public inspiration boards

### User Profile

People who work in the creative industry which would include:

- Artist
- Musicians
- Marketing Agencies
- Editors
- Creative Directors
- Graphic Designers
- Interior Designers
- Copy Writer
- Creative Writers

People that need space for articulating ideas

### Features

- Add videos from video platforms e.g. Youtube, TikTok
- Add pictures from picture platforms e.g Instagram, Pinterest
- Resize elements on the board
- Drag and drop elements around the board freely
- Add text to inspiration board
- Add colors with hex code on board
- Users are able to share inspiration boards with other users
- Built-in ideation help e.g. rhyme/synonym generation, color palette generation

## Implementation

### Tech Stack

<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width="50" height="40"/> </a>
<a href="https://nodejs.org/en/about" target="_blank" rel="noreferrer"> <img src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png" alt="node.js" width="40" height="40"/> </a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png" alt="express.js" width="90" /> </a>
<a href="https://nodejs.org/en/about" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.png" alt="node.js" width="90" > </a>

### Third Party Libraries

- [sass](https://sass-lang.com/)
- [react-route](https://reactrouter.com/en/main)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [reactflow](https://reactflow.dev/)
- [react-popup](https://react-popup.elazizi.com/react-tooltip/)
- [react-type-animation](https://www.npmjs.com/package/react-type-animation)

### APIs

- [rhyme API](https://rhymebrain.com/api.html)
- [dictionary API](https://dictionaryapi.dev/)

### Sitemap

![architecture](https://github.com/afyqzarof/studio-client/assets/83950596/3816177c-5632-4bd3-96e4-20810457fa27)

![user flow](https://github.com/afyqzarof/linked-list/assets/83950596/73877b19-ede9-4f41-bfdf-9b23394e9042)

### Mockups

https://github.com/afyqzarof/capstone-proposal/assets/83950596/62170701-9ea5-46cf-94c7-ef987aaecfc6

https://github.com/afyqzarof/capstone-proposal/assets/83950596/f51e77c2-09c8-4148-b73d-dc760437b031

https://github.com/afyqzarof/capstone-proposal/assets/83950596/1d96122c-522f-4939-9ebe-d1d7e7034902

https://github.com/afyqzarof/capstone-proposal/assets/83950596/46ce49c4-df9e-4e64-b125-c7a33a26983e

### Data

![image](https://github.com/afyqzarof/linked-list/assets/83950596/5bd95460-1ce6-488b-91a8-679608ec59cb)

### Endpoints

`GET` `/api/users/:user-id`

- Fetch use details for a given user
- Example Response:

```json
{
  "id": 1,
  "username": "nuclear.instruments",
  "email": "user@example.com"
}
```

`GET` `/api/users/:user-id/boards`

- Fetch board details for a specific user
- Example response:

```json
[
  {
    "id": 1,
    "board_name": "My First Board",
    "is_public": false
  },
  {
    "id": 2,
    "board_name": "Example Board",
    "is_public": false
  },
  {
    "id": 3,
    "board_name": "music video inspo",
    "is_public": true
  }
]
```

`GET` `/api/boards/:board-id/pins`

- Fetch pins for a specific board
- Example response:

```json
[
  {
    "id": "xFLA-XMirt",
    "type": "YoutubeVidNode",
    "data": { "youtube_id": "sDENI1Zx7Wc" },
    "position": { "x": 300, "y": 200 }
  },
  {
    "id": "mB_6kTKt3Y",
    "type": "TextNode",
    "data": { "text": "this is a text box" },
    "position": { "x": 250, "y": 100 }
  },
  {
    "id": "WVQoDv6ewX",
    "type": "ColorSelectorNode",
    "data": { "color": "#4c4cff" },
    "position": { "x": 0, "y": 0 }
  }
]
```

`PUT` `/api/boards/:board-id/pins`

- Update pins on a specific board when a user saves

`post` `/api/users`

- Initialize a new user upon registration

`post` `/api/users/:user-id/boards`

- Initialize a new board for a given user upon creation

`get` `/api/boards/public`

- get all boards that are set to "public"

### Auth

Yes, depending on how difficult the implementation of authorization is.

## Roadmap

- Front-end

  - Build all pages defined above
  - add drag and drop functionality
  - implement adding pin functionality for text, colors, pictures and videos
  - implement custom iframe for external sites i.e. youtube, tiktok, pinterest

- Back-end
  - Build end points specified above
  - implement authorization if not too difficult

## Nice-to-haves

- Organize elements on the board by relevance/concept/media type
- Create a repository of references that are interlinked
- Draw lines and arrows on inspiration board
- Draw free-hand on board
- Collaboration between users and sharing inspirations boards to be publicly viewed
