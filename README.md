# Portfolio Website

My personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer.

🌐 **Live Site:** [dharsan-devaraj.github.io/your-portfolio-builder](https://dharsan-devaraj.github.io/your-portfolio-builder)

> ✅ **Fully Responsive** - Works perfectly on **PC, Mobile, and Tablet** devices!

## About

This is my personal portfolio website built to showcase my work and skills. It features a modern, minimalist design with smooth animations and a fully responsive layout that adapts to any screen size.

## Access the Website

### 🌍 View Online (Any Device)

Simply open this link on **any device** (PC, mobile phone, or tablet):
- **URL:** https://dharsan-devaraj.github.io/your-portfolio-builder

The website is fully optimized and will automatically adjust to your device's screen size. No installation required!

### 💻 Run Locally on Your PC

If you want to run the website on your computer for development:

#### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

#### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dharsan-devaraj/your-portfolio-builder.git
   cd your-portfolio-builder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   - The server will start at `http://localhost:8080`
   - Open this URL in any browser (Chrome, Firefox, Safari, Edge, etc.)
   - The website will work on your PC and you can test it by resizing the browser window

### 📱 Access on Mobile Devices

#### Option 1: View the Live Site
- Open your mobile browser (Chrome, Safari, Firefox, etc.)
- Visit: **https://dharsan-devaraj.github.io/your-portfolio-builder**
- The site will automatically adapt to your mobile screen

#### Option 2: Run Locally on Mobile (Advanced)

If you're running the dev server on your PC and want to access it from your phone:

1. **Find your PC's IP address:**
   - **Windows:** Open Command Prompt and type `ipconfig`, look for "IPv4 Address"
   - **Mac/Linux:** Open Terminal and type `ifconfig` or `ip addr`, look for your local IP (usually starts with 192.168.x.x)

2. **Make sure your PC and phone are on the same Wi-Fi network**

3. **Start the dev server** (as shown above)

4. **On your mobile device:**
   - Open your mobile browser
   - Go to: `http://YOUR_PC_IP:8080` (replace YOUR_PC_IP with your actual IP address)
   - Example: `http://192.168.1.100:8080`

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Routing:** React Router
- **Backend Integration:** Supabase

## Features

- ✅ **Fully Responsive** - Works on all devices (PC, mobile, tablet)
- ✅ **Mobile Optimized** - Smooth experience on phones and tablets
- ✅ **Desktop Optimized** - Beautiful layout on large screens
- ✅ Smooth scroll animations and transitions
- ✅ Dark theme with custom color palette
- ✅ Contact form with email integration
- ✅ Skills showcase with interactive elements
- ✅ Projects section (coming soon)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Deployment

This portfolio is configured for automatic deployment to GitHub Pages. 

### ⚠️ Important: Fix 404 Error

If you see a 404 error when visiting the site, follow these steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **Save**

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Check deployment:**
   - Go to **Actions** tab in your repository
   - Wait for "Deploy to GitHub Pages" workflow to complete
   - Wait 1-2 minutes for DNS to propagate
   - Visit: https://dharsan-devaraj.github.io/your-portfolio-builder

### Automatic Deployment (Recommended)

The site will automatically deploy when you push to the `main` branch. Make sure:

- ✅ Repository is named: `portfolio`
- ✅ GitHub username is: `dharsan-devaraj`
- ✅ GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
- ✅ Repository is **public** (or you have GitHub Pro)

The site will be available at: `https://dharsan-devaraj.github.io/your-portfolio-builder`

### Troubleshooting 404 Error

**If you still see 404 after following the steps above:**

1. **Check repository name:** Must be exactly `your-portfolio-builder` (case-sensitive)
2. **Check GitHub Actions:** Go to Actions tab, ensure workflow completed successfully
3. **Clear browser cache:** Hard refresh with `Ctrl+Shift+R` or `Cmd+Shift+R`
4. **Wait a few minutes:** GitHub Pages can take 1-5 minutes to update
5. **Verify workflow file:** Ensure `.github/workflows/deploy.yml` exists in your repo

For detailed troubleshooting, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Browser Compatibility

The website works on all modern browsers:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge
- ✅ Opera
- ✅ Samsung Internet
- ✅ Any modern mobile browser

## Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── integrations/  # Third-party integrations
├── public/            # Static assets
└── supabase/         # Supabase functions
```

## Contact

Feel free to reach out if you'd like to collaborate or have any questions!

- **Email:** dharsand2006@gmail.com
- **LinkedIn:** [dharsand0678](https://www.linkedin.com/in/dharsand0678)
- **GitHub:** [dharsan678](https://github.com/dharsan678)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by DHARSAN D
