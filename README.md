# ChatGPT Writer  Assignment

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with command: `pnpm create plasmo --with-tailwindcss`.

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

See how to load the extension: https://docs.plasmo.com/framework/workflows/dev#loading-the-extension

For further guidance, [visit our Documentation](https://docs.plasmo.com/).

## Assignment Demonstration


https://github.com/dasariabhiram/chatgptWriter-assignment/assets/121662792/7c546a77-a84c-49c4-9b9e-5ab56bc33b0c

Overview
PlasmoOverlay is a specialized React component designed to overlay on LinkedIn web pages, enhancing messaging interactions. It incorporates the following features:

# Features

### LinkedIn Integration

Specifically designed for LinkedIn, matching URLs with the pattern "https://*.linkedin.com/*"


### Dynamic Styling

Imports external styles dynamically from "style.css".

## Icon Integration

Adds an  icon (Vector.png) to the message box for visual cues.

## Popup Interaction

Triggered by clicking the emoji icon, providing options for response generation.

## Response Generation

Users can generate responses and insert them into the message box.

## Message Box Enhancements

Dynamically adds/removes an emoji element based on focus.
Updates the message box placeholder dynamically.

## Message Insertion

Allows inserting pre-defined responses into the message box.

## Styling and Layout

Utilizes Tailwind CSS for clean and responsive design.
## Event Handling

Listens for various events, such as clicking outside the popup to close it.

## Cleanup

Utilizes useEffect for proper cleanup, preventing memory leaks.





# Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
