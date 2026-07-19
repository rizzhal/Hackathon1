# ResumeAI

ResumeAI is an AI-powered resume analysis platform that helps job seekers evaluate their resumes against a job description. It analyzes uploaded resumes, generates an AI summary, calculates an ATS score, measures job-role compatibility using cosine similarity, identifies missing skills, and provides actionable recruiter-style feedback.

---

## Features

- Upload resumes in PDF format
- AI-generated resume summary using Hugging Face
- ATS compatibility score
- Resume-to-job description matching using cosine similarity
- Resume readiness score
- Resume skill extraction
- Missing skill detection
- AI-generated recruiter feedback
- Responsive and modern user interface

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Axios

### Backend

- Node.js
- Express.js
- Multer
- PDF Parse

### AI & NLP

- Hugging Face Inference API
- Cosine Similarity
- Custom Skill Extraction

---

## Project Structure

```
ResumeAI
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── middleware
│   ├── utils
│   └── uploads
│
└── README.md
```

---

## Workflow

1. Upload a resume (PDF)
2. Enter a job description
3. Resume text is extracted
4. AI generates a concise resume summary
5. Skills are extracted from both resume and job description
6. Cosine similarity is calculated
7. ATS score is generated
8. Readiness score is calculated
9. Missing skills are identified
10. AI recruiter feedback is generated
11. Results are displayed on the dashboard

---

## Screenshots

### Landing Page

> Add screenshot here

### Dashboard

> Add screenshot here

### Resume Analysis

> Add screenshot here

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/resume-ai.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the **server** folder.

```env
HF_API_KEY=your_huggingface_api_key
PORT=3001
```

---

## API Endpoint

### Analyze Resume

```
POST /resume/analyze
```

**Form Data**

| Key | Type |
|------|------|
| resume | File (PDF) |
| jobDescription | Text |

---

## Future Improvements

- Support DOCX resumes
- Multi-job comparison
- Resume history
- Authentication
- PDF report export
- AI interview preparation
- Cover letter generation

---

## Author

**Bishal Barman**

GitHub: https://github.com/rizzhal

LinkedIn: https://linkedin.com/in/bishal-barman-090227299

---

## License

This project was developed as part of a hackathon and is intended for educational and demonstration purposes.