const convertToTitleCase = (text: string) => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default convertToTitleCase;
