export const checkPhoneNumber = (_string) => {
  let str = _string;
  for (let index = 0; index < _string.length; index++) {
    if (!/^[a-zA-Z]+$/.test(_string[index])) {
      if (_string[0] == 0) str = _string.slice(1);
      else str = _string;
    } else {
      return "";
    }
  }
  return str;
};

export const calcDays = (_contactDate) => {
  let timeUnix = Date.parse(new Date()) - Date.parse(_contactDate);
  let timeDays = timeUnix / (1000 * 60 * 60 * 24);
  let numDay = Math.floor(timeDays);
  let ans = "";
  if (numDay === 0) ans = `Created today`;
  else if (numDay === 1) ans = `Created yesterday`;
  else ans = `Created ${numDay} days ago`;
  return ans;
};
