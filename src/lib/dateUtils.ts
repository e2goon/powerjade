export function formatDate(date: Date) {
  const options = {
    dateStyle: "long",
  } as Intl.DateTimeFormatOptions;
  const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(date);
  return formattedDate;
}
