const formatDate = (dateInput: string) => {
  const date = new Date(dateInput);
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");
  return formattedDate;
};

export default formatDate;
