# 💼 Job Portal Web Application

A full-featured Job Portal built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects job seekers with recruiters. This platform allows users to search, apply for jobs, and for recruiters to post and manage job listings efficiently.

## 🔍 Overview

This project is designed to digitize and simplify the hiring process by offering:
- Job posting and management for recruiters
- Smart job recommendations for candidates
- Application tracking and status updates
- Admin dashboard for user control

## ✨ Features

### 👤 For Job Seekers:
- Register and create/update profile
- Browse/search jobs by skill, location, or company
- Apply to jobs and track application status
- Upload resume and get matched with relevant jobs
- 📧 **Support Email**: jobseeker-support@jobportal.com

### 🏢 For Recruiters:
- Post new job vacancies
- View, edit, and delete job listings
- View applications and shortlist candidates
- 📧 **Support Email**:



# 💼 Job Portal Web Application

A full-featured Job Portal built with the MERN stack (MongoDB, Express.js, React, Node.js) that connects job seekers with recruiters. This platform allows users to search and apply for jobs, and recruiters to post and manage job listings efficiently.

## 🔍 Overview

This project is designed to digitize and simplify the hiring process by offering:
- Job posting and management for recruiters
- Smart job recommendations for candidates
- Application tracking and status updates
- OTP-based secure login system
- Admin dashboard for user control

## ✨ Features

### 👤 For Job Seekers:
- Register and create/update profile
- Browse/search jobs by skill, location, or company
- Apply to jobs and track application status
- Upload resume and get matched with relevant jobs
- OTP verification for secure login/registration
- 📧 **Support Email**: jobseeker-support@jobportal.com

### 🏢 For Recruiters:
- Post new job vacancies
- View, edit, and delete job listings
- View applications and shortlist candidates
- OTP-based login for enhanced security
- 📧 **Support Email**: recruiter-support@jobportal.com

### ⚙️ For Admin:
- Manage users (Job Seekers & Recruiters)
- Remove spam jobs or block users
- View job/application statistics and activity logs
- 📧 **Admin Contact**: admin@jobportal.com

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + Bcrypt + OTP via Email
- **File Upload**: Multer (for resumes)
- **Email Service**: Nodemailer
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

## 🔐 OTP Feature (Email-Based Verification)

- Upon login or registration, the system sends a **6-digit OTP to the user’s email**.
- OTP is valid for a short duration (e.g., 5 minutes).
- Users must enter the OTP to proceed.
- Improves security and prevents bot registrations.

## 📁 Folder Structure

job-portal/
│
├── client/ # React frontend
│ ├── src/
│ └── vite.config.js
│
├── server/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── utils/otpService.js
│ └── server.js



## 🚀 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
Setup Backend

bash
Copy
Edit
cd server
npm install
npm run dev
Setup Frontend

bash
Copy
Edit
cd client
npm install
npm run dev
Access Application

arduino
Copy
Edit
Frontend: http://localhost:5173
Backend: http://localhost:5000
📊 Future Enhancements
AI-based resume parsing and job recommendation

In-app messaging/chat between recruiters and candidates

Analytics dashboard for admin

Dark mode and multi-language support

👨‍💻 Author
Chittypolu Deepak
Full Stack Developer | CSIT @ KL University
📧 deepak.jobportal@gmail.com
🔗 LinkedIn
🔗 GitHub
