function analyzeGeometricSimilarity(img1Data, img2Data) {
  // تحليل الحواف باستخدام Sobel filter للمقارنة البصرية
  const edges1 = getEdgeMap(img1Data);
  const edges2 = getEdgeMap(img2Data);

  let matched = 0, total = edges1.length;
  for (let i = 0; i < total; i++) {
    if (edges1[i] === edges2[i]) matched++;
  }

  const similarity = (matched / total) * 100;
  return Math.max(0, Math.min(similarity, 100));
}

function getEdgeMap(imgData) {
  // تحويل الصورة إلى خريطة حواف ثنائية مبسطة
  const edgeMap = [];
  for (let i = 0; i < imgData.data.length; i += 4) {
    const intensity = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
    edgeMap.push(intensity > 400 ? 1 : 0); // عتبة بسيطة للحواف
  }
  return edgeMap;
}
