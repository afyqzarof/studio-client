const formatDate = (dateInput) => {
  const date = new Date(dateInput);
  const formattedDate = date.toLocaleDateString().replace(/\//g, ".");
  return formattedDate;
};

export default formatDate;
