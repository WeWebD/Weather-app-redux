function AirPolutionTable(code) {
  let codeConversion;

  if (code > 0 && code <= 20) codeConversion = "good";
  if (code >= 21 && code <= 25) codeConversion = "moderate";
  if (code >= 26 && code <= 50) codeConversion = "poor";
  if (code >= 51 && code <= 75) codeConversion = "vpoor";
  if (code >= 76 && code <= 800) codeConversion = "severe";

  const AQIIndexTable = {
    good: [`${code} - Good`, `No cautinoary action required`],
    moderate: [
      `${code} - Moderate`,
      `Useally sensitve people should consider reducing prolonged or heavy extertion and heavy outdoor work`,
    ],
    poor: [
      `${code} - Poor`,
      `People with heart or lung diseas, older adults and children should reduce prolonged or heavy exertion and outdoor activity`,
    ],
    vpoor: [
      `${code} - Very Poor`,
      `People with heart or lung diseaes, older adults and childres should avoid prolonged or heavy exertion, everyone lese should reduce prolonged or heavy exertion`,
    ],
    severe: [
      `${code} - Severe`,
      `Everyon should avoid all physicial activity outdoors; peope with heart or lung disease, older adults and children should remain indoors and keep activity low`,
    ],
  };

  return AQIIndexTable[codeConversion];
}

export default AirPolutionTable;
