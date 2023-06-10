import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async () => {
  // const feed = await axios.get(`${BaseUrl}/feed`);
  // const tags = await axios.get(`${BaseUrl}/tags`);
  // let loadMore;

  // const tmpTags = new Set();

  // feed.data.topTags.forEach((tag) => {
  //   tmpTags.add(tag);
  // });

  // feed.data.topTags = [...tmpTags];

  // if (tags.data.length < 10) {
  //   loadMore = false;
  // }

  // return { feed, tags, loadMore };

  let loadMore;
  const questions = await axios.get(`${BaseUrl}/allQuestions`);

  if (questions.data.length < 10) {
    loadMore = false;
  }
  return { questions, loadMore };
};
