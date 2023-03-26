import { error } from '@sveltejs/kit';
import { BaseUrl } from '$lib/vars';

export const load = async ({ params, fetch, cookies }) => {
  let noAnswerContent;
  let loadMore;
  let sortType = 'trending';
  let userChoosenTag;
  let questionId = decodeUrl(params.question);

  const loginStateCookie = cookies.get('loginState');

  if (questionId == '') {
    throw error(404, 'question url is incorrect');
  } else {
    const res = await fetch(`${BaseUrl}/question/${questionId}`);
    const question = await res.json();
    userChoosenTag = question.tag;

    let response;
    let data;

    if (loginStateCookie) {
      response = await fetch(
        `${BaseUrl}/answers/${questionId}?sort=${sortType}`
      );
      if (response.status != 204) {
        data = await response.json();
      }
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
