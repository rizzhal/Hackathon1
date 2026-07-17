
const skillList = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "GCP",
  "Git",
  "REST API",
  "GraphQL",
  "Python",
  "Java",
  "C++",
  "C",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Linux",
  "CI/CD",
  "Jenkins",
  "TensorFlow",
  "PyTorch",
  "Machine Learning"
]

export const extractSkills = (text) => {
    const lowerText = text.toLowerCase();

    return skillList.filter(skill => 
        lowerText.includes(skill.toLowerCase()) 
    )

}