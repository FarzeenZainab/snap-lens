# SnapLens
SnapLens is an interactive JavaScript project built with Next.js that allows users to upload and manipulate images by zooming in and out, as well as creating tags on specific areas of the image. The project provides an intuitive interface for users to explore and annotate images with ease.

**Demo: https://snaplens.netlify.app/**

## Features

- Image Upload: Users can upload images from their local machine. (Coming Soon)
- Tag Creation: Users can create tags on specific areas of the image using their mouse.
- Visual Highlighting: When the user releases the mouse, the application highlights the tagged area and creates a box on the screen where the user dragged the mouse.
- Zoom Functionality: Users can zoom in or zoom out on the uploaded image to view details or get an overview.
  
### Installation

Clone the repository

```bash
git clone https://github.com/FarzeenZainab/snaplens.git
```

### Navigate the project

```
cd snaplens
```

### Install the dependencies

```
npm install
```

### Start the development server

```
npm run dev
```

Open your web browser and visit http://localhost:3000 to access SnapLens.

## Usage
1. You will see an interface upon opening SnapLens in a web browser. The left side of the interface has an image on which you can create tags. On the right side of the interface you can view all the tags created.
2. To create a tag, click and drag the mouse on the image to define the area of interest.
3. Release the mouse to highlight and create a box around the tagged area.
4. You can then add the tag's description in the box appearing in the right column of the page. 
5. Repeat the process to create additional tags as needed.
6. You can edit and delete tags.
7. To zoom in or out, use the provided zoom controls

## Coming in next version:

1. User can upload their own images
2. Zoom in and out using keyboard shortcuts.
3. The user can create a sharable link
4. UI improvements for better UX
