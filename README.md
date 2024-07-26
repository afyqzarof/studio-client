# studio

Front End github repository

### Links:

- [website](https://ideation-studio.dev/)
- [Back End GitHub Repository](https://github.com/afyqzarof/studio-server)
- [Youtube intro video](https://www.youtube.com/watch?v=Zglq145sEw0)

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

## To test

```bash
npm test
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

<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png" alt="css3" width="40" height="40"/> </a>
<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/d/d5/20230715030041%21Tailwind_CSS_Logo.svg/120px-Tailwind_CSS_Logo.svg.png" alt="css3" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react" width="50" height="40"/> </a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png" alt="react" width="40" /></a>

### Third Party Libraries

- [sass](https://sass-lang.com/)
- [react-route](https://reactrouter.com/en/main)
- [nanoid](https://www.npmjs.com/package/nanoid)
- [reactflow](https://reactflow.dev/)
- [react-popup](https://react-popup.elazizi.com/react-tooltip/)
- [react-type-animation](https://www.npmjs.com/package/react-type-animation)


### Sitemap

![architecture](https://github.com/afyqzarof/studio-client/assets/83950596/3816177c-5632-4bd3-96e4-20810457fa27)

![user flow](https://github.com/afyqzarof/linked-list/assets/83950596/73877b19-ede9-4f41-bfdf-9b23394e9042)

### Mockups

https://github.com/afyqzarof/capstone-proposal/assets/83950596/62170701-9ea5-46cf-94c7-ef987aaecfc6

https://github.com/afyqzarof/capstone-proposal/assets/83950596/f51e77c2-09c8-4148-b73d-dc760437b031

https://github.com/afyqzarof/capstone-proposal/assets/83950596/1d96122c-522f-4939-9ebe-d1d7e7034902

https://github.com/afyqzarof/capstone-proposal/assets/83950596/46ce49c4-df9e-4e64-b125-c7a33a26983e



<!-- ### Auth

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
- Collaboration between users and sharing inspirations boards to be publicly viewed -->
