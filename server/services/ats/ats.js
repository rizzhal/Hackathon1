

export function calculateATSScore(resumeText, matchScore) {
  let score = 0;

  const checks = [
    { keyword: "education", points: 10 },
    { keyword: "experience", points: 20 },
    { keyword: "project", points: 20 },
    { keyword: "skill", points: 20 },
    { keyword: "certification", points: 10 },
    { keyword: "contact", points: 10 },
  ];

  const lowerResume = resumeText.toLowerCase();

  checks.forEach(({ keyword, points }) => {
    if (lowerResume.includes(keyword)) {
      score += points;
    }
  });

  // Job match bonus (max 10)
  score += Math.round(Number(matchScore) / 10);

  return Math.min(score, 100);
}