import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async ({ params, fetch, cookies }) => {
  let noAnswerContent;
  let loadMore;
  let sortType = 'trending';
  let userChoosenTag;
  let questionUrl = params.question;
  let questionId = decodeUrl(questionUrl);

  const appStateCookie = cookies.get('appState');

  const res = await fetch(`${BaseUrl}/question/${questionId}`);
  const question = await res.json();
  userChoosenTag = question.tag;

  let response;
  let data;

  if (appStateCookie) {
    response = await axios.get(
      `${BaseUrl}/answers/${questionId}?sort=${sortType}`
    );
  } else {
    response = await fetch(
      `${BaseUrl}/guestAnswers/${questionId}?sort=${sortType}`
    );
    if (response.status != 204) {
      data = await response.json();
    }
  }

  if (response.status == 204) {
    loadMore = false;
    noAnswerContent = true;
    return {
      noAnswerContent,
      loadMore,
      userChoosenTag,
      sortType,
      question: question,
      answers: [],
      questionUrl,
    };
  }
  if (data.length < 10) {
    loadMore = false;
  }
  noAnswerContent = false;

  return {
    noAnswerContent,
    loadMore,
    userChoosenTag,
    sortType,
    question: question,
    answers: data,
    questionUrl,
  };
};

function decodeUrl(url) {
  let res = url.slice(-24);
  return res;
}
