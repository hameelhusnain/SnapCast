# SnapCast

> **Created by: whoami**

SnapCast is a modern, full-featured video recording and sharing web application built with [Next.js](https://nextjs.org). It empowers users to record, upload, and view videos in both public and private libraries, making it easy to share knowledge, updates, or memorable moments with others—whether for personal, educational, or professional purposes.

---

## 🚀 Technologies Used

| Technology | Description |
|------------|-------------|
| ![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white) | React framework for server-side rendering and static site generation |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) | Strongly typed programming language for scalable code |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) | Utility-first CSS framework for rapid UI development |
| ![Drizzle ORM](https://img.shields.io/badge/Drizzle-3B82F6?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjM0I4MkY2IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAyYy0yLjIxIDAtNC4wNSAxLjg0LTQuMDUgNC4wNXMxLjg0IDQuMDUgNC4wNSA0LjA1IDQuMDUtMS44NCA0LjA1LTQuMDUtMS44NC00LjA1LTQuMDUtNC4wNXptMCA3LjA1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz48L3N2Zz4=) | Type-safe ORM for SQL databases |
| ![Xata](https://img.shields.io/badge/Xata-FF6B81?logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY6Ojk4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAyYy0yLjIxIDAtNC4wNSAxLjg0LTQuMDUgNC4wNXMxLjg0IDQuMDUgNC4wNSA0LjA1IDQuMDUtMS44NCA0LjA1LTQuMDUtMS44NC00LjA1LTQuMDUtNC4wNXptMCA3LjA1Yy0xLjY2IDAtMy0xLjM0LTMtM3MxLjM0LTMgMy0zIDMgMS4zNCAzIDMtMS4zNCAzLTMgM3oiLz48L3N2Zz4=) | Serverless database for modern apps |
| ![BunnyCDN](https://img.shields.io/badge/BunnyCDN-FF9800?logo=rabbitmq&logoColor=white) | Fast and reliable CDN for video delivery |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black) | UI library for building interactive interfaces |
| ![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white) | Deployment and hosting platform for Next.js apps |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) | JavaScript runtime for server-side logic |

---

## ✨ Key Features

- 🎥 **Record Videos:** Capture video directly from your browser, including screen and webcam recording.
- ⬆️ **Upload Videos:** Upload video files and custom thumbnails with ease.
- 📚 **Video Library:** Browse all public and private videos, organized by tags and folders.
- 👤 **User Profiles:** View user details, their uploaded videos, and follow other users.
- 🔍 **Search & Filter:** Find videos by tags, folders, popularity, or user.
- 👁️ **View Counts:** See how many times a video has been watched.
- 🔒 **Visibility Control:** Set videos as public, private, or shared with specific users.
- ⚡ **Fast Streaming:** Videos are delivered via BunnyCDN for smooth, global playback.
- 🗄️ **Database:** Powered by **Drizzle ORM** and **Xata** for robust, scalable data management.
- 🏷️ **Tags & Folders:** Organize your videos for easy retrieval and management.
- 📈 **Trending & Popular:** Discover trending videos and popular creators in the community.
- 💬 **Comments & Likes:** Engage with content through comments and likes.
- 🛡️ **Privacy & Security:** Advanced privacy settings for every upload.
- 🔔 **Notifications:** Get notified about new uploads, comments, and follows.
- 🖼️ **Custom Thumbnails:** Add personalized thumbnails to your videos.
- 🧩 **Extensible:** Built with modular components for easy feature expansion.

---

## 🔐 Authentication & Sign-In Options

SnapCast offers secure and flexible authentication options to ensure a safe user experience. Users can sign in using:

- **Email and Password:** Traditional sign-up and login with email verification.
- **OAuth Providers:** Sign in with Google, GitHub, or other supported OAuth providers for quick and secure access.
- **Session Management:** Secure session handling with JWT or cookies, ensuring user data privacy and protection.
- **Role-Based Access:** Differentiate between regular users, creators, and admins for tailored access and permissions.

Authentication is implemented using modern best practices, leveraging NextAuth.js or a similar authentication library, and integrates seamlessly with the Drizzle ORM and Xata database for user management and authorization.

---

## 📝 About SnapCast

SnapCast is designed to make video content creation and sharing accessible to everyone, directly from the browser. The platform eliminates the need for external software, allowing users to record high-quality videos on any device, organize them with tags and folders, and control their visibility with robust privacy settings.

Whether you're a teacher sharing lessons, a developer explaining code, or a team member updating your colleagues, SnapCast makes it effortless to capture and distribute video content. The platform is built to scale, supporting everything from quick screen recordings to large video libraries, and is optimized for performance, security, and ease of use.

---

## 📦 Project Structure

- `app/` – Next.js app directory (pages, layouts, routes)
- `components/` – Reusable React components (Navbar, Header, VideoCard, etc.)
- `constants/` – Static data and configuration
- `public/` – Static assets (icons, images, thumbnails)
- `styles/` – CSS and styling files
- `drizzle/` – Database schema and ORM configuration
- `lib/` – Utility functions and helpers

---

## 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Visit [http://localhost:3000](http://localhost:3000) in your browser.**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

**Enjoy recording and sharing with SnapCast!**
