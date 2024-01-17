export const formatTime = (timeInMilliseconds: number) => {
  const hours = Math.floor(timeInMilliseconds / 3600000);
  const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor((timeInMilliseconds % 1000) / 10);

  // Add leading zeros if needed
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMilliseconds = String(milliseconds).padStart(2, "0");

  return {
    stringTime: `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`,
    formattedHours,
    formattedMinutes,
    formattedSeconds,
    formattedMilliseconds,
  };
};
