export const useHeight = () => {
  const totalHeight = window.innerHeight;
  const totalWidth = window.innerWidth;
  let desiredHeight = null;

  if (totalWidth < 320) {
    desiredHeight = totalHeight - 40 - 62 - 64 * 0.7; //Header Height - Footer Height - (Table Margin Top Height * font-size factor in "*")
  } else if (totalWidth >= 320 && totalWidth < 481) {
    desiredHeight = totalHeight - 50 - 60 - 64 * 0.75;
  } else if (totalWidth >= 481 && totalWidth < 769) {
    desiredHeight = totalHeight - 55 - 90 - 64 * 0.85;
  } else if (totalWidth >= 769 && totalWidth < 1025) {
    desiredHeight = totalHeight - 75 - 130 - 64;
  } else {
    desiredHeight = totalHeight - 75 - 140 - 64;
  }

  return [desiredHeight];
};
