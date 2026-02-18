## AI-Powered Job Portal "HireHeaven"

## Scope
HireHeaven is a modern job portal designed to bridge the gap between job seekers and recruiters. It goes beyond simple job listings by integrating AI-based resume analysis, real-time notifications, for enhanced visibility and features. The platform is built for scalability using Next.js for the frontend and a suite of Node.js/Express services (Auth, Job, User, Payment) backed by a PostgreSQL database.

## Key Features

### 1. User Management & Authentication
- **Dual Role System**: Distinct workflows for "Job Seekers" and "Recruiters".
- **Secure Authentication**: JWT-based stateless authentication with secure password hashing (Bcrypt).
- **Profile Management**: Comprehensive profiles including bio, skills, resume uploads, and profile pictures.

### 2. Job Seeker Features
- **Smart Job Search**: Filter jobs by title, location, salary, and type.
- **One-Click Apply**: Streamlined application process using stored profiles and resumes.
- **Resume Management**: Upload and manage resumes; integrating AI analysis for ATS score optimization (inferred from frontend types).
- **Application Tracking**: Real-time status updates on applied jobs (Submitted, Rejected, Hired).
- **Skill Showcasing**: Add and manage professional skills to match with job requirements.

### 3. Recruiter Features
- **Company Branding**: Create and manage company profiles with logos and descriptions.
- **Job Posting**: Detailed job creation with specific requirements, salary ranges, and operation modes (Remote/Hybrid/On-site).
- **Application Management**: View applicants for specific jobs, access their resumes, and update application statuses.

### 4. Technical Highlights
- **Modern Tech Stack**: Next.js 14+ (App Router), Tailwind CSS, PostgreSQL (@neondatabase/serverless), Redis for caching/session management.
