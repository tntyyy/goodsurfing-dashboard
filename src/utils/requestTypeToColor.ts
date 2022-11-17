import { RequestTypes } from "@/types/requests";

export const requestTypeToColor = (type: RequestTypes): string => {
  if (type === "принята") return "#77EB98";
  if (type === "новая") return "#79C8FF";
  if (type === "отклонена") return "#FCC3C3";

  return "#79C8FF";
};
