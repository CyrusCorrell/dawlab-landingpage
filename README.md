# DAWLab Landing Page

A standalone HTML landing page for DAWLab - Digital Audio Workstation Laboratory.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Platform Detection**: Automatically highlights the download button for the user's operating system
- **Download Tracking**: Built-in functions for tracking downloads (integrate with analytics)
- **Smooth Scrolling**: Seamless navigation between sections
- **Toast Notifications**: User-friendly download confirmation messages

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and download functionality

## Usage

### Local Development

Simply open `index.html` in any web browser:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Or just open the file
open index.html
```

Then visit `http://localhost:8000` in your browser.

### Deployment

This is a static site and can be deployed to any web hosting service:

- **GitHub Pages**: Push to a `gh-pages` branch
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy with `vercel`
- **AWS S3**: Upload files to an S3 bucket with static hosting enabled
- **Any web server**: Upload files to your server's public directory

### Customization

#### Update Download Links

Edit the download URLs in `script.js`:

```javascript
function downloadForWindows() {
    const downloadUrl = 'YOUR_WINDOWS_DOWNLOAD_URL';
    // ...
}

function downloadForMac() {
    const downloadUrl = 'YOUR_MAC_DOWNLOAD_URL';
    // ...
}

function downloadForLinux() {
    const downloadUrl = 'YOUR_LINUX_DOWNLOAD_URL';
    // ...
}
```

#### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... other variables */
}
```

#### Add Analytics

Uncomment and configure the analytics tracking in `script.js`:

```javascript
function trackDownload(platform) {
    gtag('event', 'download', {
        'event_category': 'Downloads',
        'event_label': platform,
        'value': 1
    });
}
```

## Sections

1. **Hero**: Eye-catching intro with CTA buttons
2. **Features**: Showcase key features with icons
3. **Download**: Platform-specific download buttons (Windows, macOS, Linux)
4. **About**: Information about DAWLab
5. **Contact**: Ways to get in touch
6. **Footer**: Links and copyright information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This landing page is part of the DAWLab project.
