export function makeParam() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = 10;
  for (let i = 0; i < charactersLength; i++) {
    result += characters
      .charAt(Math.floor(Math.random() * charactersLength))
      .toLowerCase();
  }
  return result;
}
