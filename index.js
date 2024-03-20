import p5 from 'p5';

class RetroPixelArtCanvas {
  constructor(elementId, options = {}) {
    this.options = {
      pixelSize: options.pixelSize || 10,
      artWidth: options.artWidth || 16, // Width in pixels
      artHeight: options.artHeight || 16, // Height in pixels
      ...options
    };

    this.sketch = (p) => {
      p.setup = () => this.setup(p);
      p.draw = () => this.draw(p);
    };

    new p5(this.sketch, document.getElementById(elementId));
  }

  setup(p) {
    p.createCanvas(this.options.artWidth * this.options.pixelSize, this.options.artHeight * this.options.pixelSize);
    p.noLoop(); // Stop the draw function from looping
  }

  draw(p) {
    // Example: Draw a simple smiley face
    const { pixelSize, artWidth, artHeight } = this.options;
    p.background(220); // Light gray background
    p.fill(0); // Black color

    // Calculate center
    const centerX = artWidth / 2;
    const centerY = artHeight / 2;

    // Eyes
    p.square((centerX - 3) * pixelSize, (centerY - 3) * pixelSize, pixelSize);
    p.square((centerX + 2) * pixelSize, (centerY - 3) * pixelSize, pixelSize);

    // Mouth
    for (let i = -2; i <= 2; i++) {
      p.square((centerX + i) * pixelSize, (centerY + 2) * pixelSize, pixelSize);
    }
  }
}

export default RetroPixelArtCanvas;
