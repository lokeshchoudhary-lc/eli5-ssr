import { error } from '@sveltejs/kit';
import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async ({ params }) => {
  let noAnswerContent;
  let loadMore;
  let sortType = 'trending';
  let userChoosenTag;
  let questionId = decodeUrl(params.question);
  if (questionId == '') {
    throw error(404, 'question url is incorrect');
  } else {
    const question = await axios.get(`${BaseUrl}/question/${questionId}`);
    userChoosenTag = question.data.tag;

    const response = await axios.get(
      `${BaseUrl}/answers/${questionId}?sort=${sortType}`
    );

    if (response.status == 204) {
      loadMore = false;
      noAnswerContent = true;
      return {
        noAnswerContent,
        loadMore,
        userChoosenTag,
        sortType,
        question: question.data,
        answers: [],
      };
    }
    if (response.data.length < 10) {
      loadMore = false;
    }
    noAnswerContent = false;
    return {
      noAnswerContent,
      loadMore,
      userChoosenTag,
      sortType,
      question: question.data,
      answers: response.data,
    };
  }
};

function decodeUrl(url) {
  let res = url.split('--');
  if (res.length > 1) {
    return res[1];
  }
  return '';
}
