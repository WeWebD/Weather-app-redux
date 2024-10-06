import GetHour from "./GetHour";

const GetTodaysDateTime = () => {

  const hour = GetHour(); 

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();

  return `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
    -2
  )}T${hour}:00`;
};

export default GetTodaysDateTime;
