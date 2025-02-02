import { baseData } from "$lib/deck/base-data";

import {
  Cover,
  PhotoCollage,
  Planning,
  TextColumns,
  Quote,
} from "./slides/index.js";

export const slideContent = [
  {
    slideType: Cover,
    transition: "fade", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      classes: "large-heading", // choose large-, or medium-heading if presentation name is too long'
      sprintNr: {
        content: `Sprint ${baseData.sprintNumber}`,
      },
      presentationName: {
        content: baseData.presentationName,
      },
      type: {
        content: "workshop",
      },
      emojis: {
        content: ["🚀", "💪", "="], // max 3 emojis
      },
    },
  },
];

