export const calculateReadiness = (
    matchScore,
    atsScore,
    missingSkills,
    jdSkills
) => {
    const skillCoverage = jdSkills.length === 0 
    ? 100 
    :((jdSkills.length - missingSkills.length) / jdSkills.length) * 100;
    
    const readiness =  
        matchScore * 0.4 +
        atsScore * 0.3 +
        skillCoverage * 0.3;
        
    return readiness.toFixed(1)
}