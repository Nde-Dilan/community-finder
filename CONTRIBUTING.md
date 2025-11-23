# Contributing to Community Finder

Thank you for wanting to help! This guide will show you how to contribute to Community Finder.

## Table of Contents

1. [How to Add Your Community](#how-to-add-your-community)
2. [How to Report Problems](#how-to-report-problems)
3. [How to Suggest New Features](#how-to-suggest-new-features)
4. [How to Contribute Code](#how-to-contribute-code)
5. [Getting Help](#getting-help)
6. [Code of Conduct](#code-of-conduct)

## How to Add Your Community

This is the most common way people contribute! Adding your community is easy and you do not need to know how to code.

### Method 1: Using GitHub Issues (Easiest)

This is the recommended way for most people.

1. **Go to the Issues page**
   - Visit: https://github.com/Nde-Dilan/community-finder/issues
   - Click the green "New Issue" button

2. **Choose Community Submission**
   - You will see different issue types
   - Click "Get started" next to "Community Submission"

3. **Fill in the Form**
   - **Community Name**: The name of your community (example: "Python Douala")
   - **Location**: City and region (example: "Douala, Littoral")
   - **Description**: What your community does in 1-2 sentences
   - **Focus Areas**: Check the boxes that match your community
   - **Contact Person**: Your name
   - **Email**: Your email address
   - **Social Media Links**: WhatsApp, Telegram, LinkedIn, etc.
   - **Members Count**: How many people are in your community (approximate)
   - **Meeting Frequency**: How often you meet
   - **Logo**: Link to your community logo image (if you have one)

4. **Submit**
   - Click "Submit new issue"
   - We will review your submission within a few days
   - We might ask questions or request changes
   - Once approved, your community will appear on the website!

### Method 2: Direct Code Contribution (For Developers)

If you know how to code and want to add your community directly:

1. **Fork the Repository**
   - Click the "Fork" button at the top of the GitHub page
   - This creates your own copy of the project

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/community-finder.git
   cd community-finder
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b add-my-community
   ```

4. **Add Your Community Data**
   
   Open the file `src/scripts/seedFirebase.js` and find the `communities` array. Add your community following this format:

   ```javascript
   {
     id: 5, // Use the next available number
     name: "Your Community Name",
     location: "City, Region",
     members: 100, // Approximate number of members
     description: "A short description of what your community does.",
     logo: "/communities/your-logo.png", // Path to your logo
     tags: ["Technology1", "Technology2", "Technology3"],
     created_at: serverTimestamp(),
     updated_at: serverTimestamp(),
     links: "https://your-community-website.com",
   }
   ```

5. **Add Your Logo (Optional)**
   - Place your logo image in the `public/communities/` folder
   - Name it something simple like `your-community.png`
   - Make sure the file is not too large (under 500KB)

6. **Test Your Changes**
   ```bash
   npm install
   npm run dev
   ```
   - Open http://localhost:5173 in your browser
   - Check that your community appears correctly

7. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add [Your Community Name] to communities list"
   ```

8. **Push to GitHub**
   ```bash
   git push origin add-my-community
   ```

9. **Create a Pull Request**
   - Go to your fork on GitHub
   - Click "Compare & pull request"
   - Write a clear description of what you added
   - Click "Create pull request"

We will review your pull request and may ask for changes before merging.

## How to Report Problems

Found a bug or something not working? Let us know!

1. **Go to Issues**
   - Visit: https://github.com/Nde-Dilan/community-finder/issues
   - Click "New Issue"

2. **Choose Bug Report**
   - Click "Get started" next to "Bug Report"

3. **Describe the Problem**
   - What did you try to do?
   - What happened instead?
   - What did you expect to happen?
   - Include screenshots if possible

4. **Submit**
   - Click "Submit new issue"

## How to Suggest New Features

Have an idea for making Community Finder better?

1. **Check Existing Issues First**
   - Search the issues to see if someone already suggested it
   - If yes, add a comment to that issue instead

2. **Create a New Issue**
   - Go to Issues and click "New Issue"
   - Choose a general issue or feature request template

3. **Describe Your Idea**
   - What feature do you want?
   - Why would it be useful?
   - How should it work?

## How to Contribute Code

Want to fix bugs or add features? Here is how:

### Before You Start

1. **Check the Issues**
   - Look for issues labeled "good first issue" for beginners
   - Comment on the issue to let us know you are working on it

2. **Set Up Your Development Environment**
   - Follow the steps in the [README.md](./README.md) to run the project locally

### Making Changes

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/community-finder.git
   cd community-finder
   ```

2. **Create a Branch**
   ```bash
   git checkout -b fix-something
   ```
   Use a clear branch name like `fix-search-bug` or `add-dark-mode`

3. **Make Your Changes**
   - Keep changes small and focused
   - Write clear, simple code
   - Add comments if something is complex

4. **Test Your Changes**
   ```bash
   npm run dev
   ```
   - Make sure everything still works
   - Test the specific thing you changed

5. **Check for Errors**
   ```bash
   npm run lint
   ```
   - Fix any errors that appear

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Brief description of what you changed"
   ```
   
   Write clear commit messages:
   - Good: "Fix search not working on mobile"
   - Bad: "Fixed stuff"

7. **Push to Your Fork**
   ```bash
   git push origin fix-something
   ```

8. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Choose your branch
   - Fill in the description:
     - What did you change?
     - Why did you change it?
     - How did you test it?
   - Click "Create Pull Request"

### Code Style Guidelines

Keep it simple and consistent:

- Use clear variable names (`communityName` not `cn`)
- Add comments for complex logic
- Use spaces, not tabs
- Keep functions short and focused
- Follow the existing code style

### What We Look For in Pull Requests

- **Small Changes**: One thing at a time is better than many things at once
- **Clear Description**: Explain what and why
- **Tests Done**: Show that you tested your changes
- **Clean Code**: No unnecessary changes or commented-out code

## Getting Help

Stuck? Here is how to get help:

### For Beginners

If you are new to:
- **Git and GitHub**: Check out [GitHub's Hello World guide](https://guides.github.com/activities/hello-world/)
- **React**: Visit [React's official tutorial](https://react.dev/learn)
- **JavaScript**: Try [MDN's JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### For This Project

- **Read the README**: Most common questions are answered there
- **Check Existing Issues**: Someone might have asked the same question
- **Ask a Question**: Open a new issue with your question
- **Be Patient**: We are volunteers and will respond when we can

## Code of Conduct

### Our Promise

We want everyone to feel welcome. We promise to:

- Be friendly and patient
- Be respectful of different viewpoints
- Accept constructive criticism
- Focus on what is best for the community

### Expected Behavior

Please:

- Use welcoming and inclusive language
- Be respectful of differing opinions
- Accept feedback gracefully
- Show empathy towards others

### Unacceptable Behavior

Do not:

- Use inappropriate language or imagery
- Make personal attacks or insults
- Harass others publicly or privately
- Share others' private information

### Reporting Issues

If someone is not following the code of conduct:

1. Contact the project maintainers
2. We will review the situation
3. We will take appropriate action

## Questions?

If anything in this guide is unclear, please open an issue and ask! We want to make contributing as easy as possible.

## Thank You!

Your contributions, whether big or small, help make the tech community in Cameroon stronger. We appreciate your time and effort!

---

**Remember**: There are no dumb questions. Everyone was a beginner once. We are here to help!
