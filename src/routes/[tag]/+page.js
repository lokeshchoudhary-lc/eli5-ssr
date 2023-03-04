import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async ({ params }) => {
  let userChoosenTag = params.tag;
  const questions = await axios.get(`${BaseUrl}/questions/${userChoosenTag}`);
  let loadMore;

  if (questions.status == 204) {
    loadMore = false;
    return { questions: [], loadMore, userChoosenTag };
  }

  if (questions.data.length < 10) {
    loadMore = false;
  }

  questions.data.forEach((data, i) => {
    questions.data[i].slug = makeUrl(data.question, data.id);
  });

  return { questions: questions.data, loadMore, userChoosenTag };
};

function makeUrl(q, i) {
  let res = q.trim().replace(/\s/g, '-');
  return res + '--' + i;
}
