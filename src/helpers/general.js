export const shortenText = (text, limit = 40) => {
  if (text && text.length > limit) {
    return `${text.substring(0, limit - 1)}...`;
  }
  return text;
};
