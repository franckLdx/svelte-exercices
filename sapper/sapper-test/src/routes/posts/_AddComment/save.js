import { AddComment } from '@Services';
import {
  SAVING,
  SAVED,
  ERROR,
} from "./store";

export const save = async store => {
  store.setState(SAVING);
  try {
    await AddComment({
      name: store.name,
      title: store.title,
      body: store.body
    });
    store.setState(SAVED);
  } catch (err) {
    store.setState(ERROR);
    console.log(err);
  }
}