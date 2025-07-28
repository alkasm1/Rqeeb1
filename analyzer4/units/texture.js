function analyzeTextureSimilarity(img1Data, img2Data) {
  // تحليل histogram بسيط للتكرار النسيجي
  const hist1 = getGrayHistogram(img1Data);
  const hist2 = getGrayHistogram(img2Data);

  let diff = 0;
  for (let i = 0; i < 256; i++) {
    diff += Math.abs(hist1[i] - hist2[i]);
  }

  const maxDiff = img1Data.data.length / 4;
  const similarity = 100 - (diff / maxDiff) * 100;
  return Math.max(0, Math.min(similarity, 100));
}

function getGrayHistogram(imgData) {
  const hist = Array(256).fill(0);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const gray = Math.round(
      0.299 * imgData.data[i] +
      0.587 * imgData.data[i + 1] +
      0.114 * imgData.data[i + 2]
    );
    hist[gray]++;
  }
  return hist;
}
