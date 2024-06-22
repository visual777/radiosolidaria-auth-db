import * as yup from "yup";

const urlRegex = /^(https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?si=[a-zA-Z0-9_-]+)$/;

export const addVideoSchema = yup.object().shape({
  title: yup.string().required(),
  url: yup.string().required().matches(urlRegex, 'URL inválida'),
  category: yup.string().oneOf(['kids', 'radio', 'tv', 'miguel', 'ramon']).required(),
});