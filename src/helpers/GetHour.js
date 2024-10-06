const GetHour = (timeZone) => {
  const date = new Date();
  const hour = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    timeZone,
  });
  return hour;
};

export default GetHour;
