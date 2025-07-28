function displayMatchSummary({ colorSimilarity, textureSimilarity, shapeSimilarity, threshold = 85 }) {
  const matchScore = (colorSimilarity + textureSimilarity + shapeSimilarity) / 3;
  const isMatch = matchScore >= threshold;
  return {
    decision: isMatch ? '✔️ تطابق مؤكد' : '⚠️ محتمل تزوير',
    score: matchScore.toFixed(1),
    components: {
      color: colorSimilarity.toFixed(1),
      texture: textureSimilarity.toFixed(1),
      shape: shapeSimilarity.toFixed(1)
    }
  };
}
