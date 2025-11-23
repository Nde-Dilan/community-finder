# Community Finder

Find and connect with tech communities in Cameroon.

## What is This?

Community Finder is a website that helps people discover tech communities across Cameroon. Whether you are a developer, designer, or tech enthusiast, you can use this platform to find groups that match your interests and connect with like-minded people.

## What Can You Do?

- Browse tech communities in different cities
- Filter communities by technology (Python, JavaScript, Design, etc.)
- See upcoming tech events
- Read news about the tech community in Cameroon
- Submit your own community to be listed

## Technologies Used

This project is built with:

- **React**: A tool for building user interfaces
- **Vite**: A fast way to run and build web projects
- **Firebase**: A service that stores our data (communities, events)
- **Cloudinary**: A service for storing and managing images

You do not need to know all these technologies to contribute! Most people just add their community information.

## How to Run This Project on Your Computer

Follow these steps to run the website on your own computer:

### Step 1: Install Node.js

You need Node.js installed on your computer. Download it from [nodejs.org](https://nodejs.org/) and install it.

To check if you have Node.js installed, open your terminal (or command prompt) and type:

```bash
node --version
```

If you see a version number like `v18.0.0` or higher, you are good to go!

### Step 2: Get the Code

Download this project to your computer. If you have Git installed, run:

```bash
git clone https://github.com/Nde-Dilan/community-finder.git
cd community-finder
```

If you do not have Git, you can download the code as a ZIP file from GitHub and unzip it.

### Step 3: Install Dependencies

Dependencies are tools and packages that this project needs to work. Install them by running:

```bash
npm install
```

This might take a few minutes. Wait for it to finish.

### Step 4: Set Up Environment Variables

Create a file called `.env` in the main folder. Copy the contents from `.env.example`:

```bash
cp .env.example .env
```

For now, you can use the default settings. The project will use mock data (fake data for testing).

### Step 5: Start the Project

Run this command to start the website:

```bash
npm run dev
```

You will see a message like:

```
Local: http://localhost:5173/
```

Open your web browser and go to `http://localhost:5173/`. You should see the Community Finder website!

## How to Add Your Community

The easiest way to add your community is to use GitHub Issues. Check out our [CONTRIBUTING.md](./CONTRIBUTING.md) file for step-by-step instructions.

Quick summary:
1. Go to the Issues tab on GitHub
2. Click "New Issue"
3. Choose "Community Submission"
4. Fill in the form with your community details
5. Submit!

We will review your submission and add it to the website.

## Project Structure

Here is what the main folders contain:

```
community-finder/
├── src/                    # All the code lives here
│   ├── components/         # Reusable parts of the website
│   ├── pages/              # Different pages (Home, Events, News)
│   ├── services/           # Code that talks to Firebase
│   ├── utils/              # Helper functions and constants
│   └── scripts/            # Tools to manage data
├── public/                 # Images and static files
├── .env                    # Your settings (do not share this file)
├── package.json            # Lists all dependencies
└── README.md               # This file!
```

## Available Commands

- `npm run dev` - Start the website on your computer
- `npm run build` - Create a production version
- `npm run preview` - Preview the production version
- `npm run lint` - Check code for errors

## Getting Help

Need help? Here are some options:

1. **Check the [CONTRIBUTING.md](./CONTRIBUTING.md)** - Step-by-step guides for common tasks
2. **Open an Issue** - Ask questions on GitHub Issues
3. **Read the Code** - The code has comments to help you understand it

## License

This project is open source. You can use it, change it, and share it!

## Thank You!

Thank you for being interested in Community Finder! Your contributions help grow the tech community in Cameroon.
