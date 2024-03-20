# retro-pixel-art-canvas

A lightweight JavaScript library for creating retro-style pixel art using the p5.js library. Perfect for adding a touch of nostalgia to your web projects with easy-to-draw pixelated graphics.

## Installation

First, make sure you have p5.js included in your project. You can add it via a CDN in your HTML:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
```

Then, install `retro-pixel-art-canvas` using npm:

```bash
npm install retro-pixel-art-canvas
```

Or, if you prefer using yarn:

```bash
yarn add retro-pixel-art-canvas
```

## Usage

Here's a simple example to get you started with `retro-pixel-art-canvas`:

```javascript
import RetroPixelArtCanvas from 'retro-pixel-art-canvas';

// Create a new pixel art canvas
const myPixelArt = new RetroPixelArtCanvas('myCanvasId', {
pixelSize: 10, // Size of each pixel
artWidth: 16, // Width of the art in pixels
artHeight: 16, // Height of the art in pixels
});

// That's it! Your canvas is now set up and displaying a simple smiley face.
```

### Options

When creating a new instance of RetroPixelArtCanvas, you can provide the following options:

- `pixelSize`: The size of each pixel (default: 10).
- `artWidth`: The width of the art in pixels (default: 16).
- `artHeight`: The height of the art in pixels (default: 16).

Feel free to experiment with these options to create various pixel art styles.

## Contributing

Contributions are always welcome! If you have a feature request, bug report, or want to improve the library, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
