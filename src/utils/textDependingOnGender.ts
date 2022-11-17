export const textDependingOnGender = (sex: string) => {
  if (sex === "female") {
    return "оставила отзыв на ваш проект.";
  }
  if (sex === "male") {
    return "оставил отзыв на ваш проект.";
  }
};
