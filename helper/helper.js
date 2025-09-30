import { decode as decodeHtmlEntities } from "html-entities";

export function formatStringEncoding(input) {
  if (!input || typeof input !== "string") return "";

  // Decode HTML entities repeatedly until no more changes occur
  let text = input;
  let previousText = "";

  // Continue decoding until no more changes happen
  while (text !== previousText) {
    previousText = text;
    text = decodeHtmlEntities(text);
  }

  return text.normalize("NFC");
}

export const replaceHTMLtags = (data) => {
  return data.replace(/<[^>]+>/g, "");
};
