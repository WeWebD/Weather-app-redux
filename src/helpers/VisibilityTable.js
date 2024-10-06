const VisibilityTable = (visibility, units) => {
  let codeConversion;

  if (visibility <= 0 && visibility <= 5000) codeConversion = "poorVisibility";
  if (visibility <= 5001 && visibility <= 10000)
    codeConversion = "moderateVisibility";
  if (visibility <= 10001 && visibility <= 20000)
    codeConversion = "goodVisibility";
  if (visibility > 20001) codeConversion = "vgoodVisibility";

  const visibilityData = {
    poorVisibility: `Visibility poor, objects not visible at ${
      units === "imperial" ? "2 mile (nautical)" : "3.6 Kilo meters"
    }.`,
    moderateVisibility: `Visibility moderate, objects not visible at  ${
      units === "imperial" ? "5 miles (nautical)" : "9.3 Kilo meters"
    }.`,
    goodVisibility: `Visibility good, objects not visible at ${
      units === "imperial" ? "10 miles (nautical)" : "18.5 Kilo meters"
    }.`,
    vgoodVisibility: `Visibility very good, objects not visible at ${
      units === "imperial" ? "30 miles (nautical)" : "55 Kilo meters"
    }.`,
  };

  return visibilityData[codeConversion];
};

export default VisibilityTable;
