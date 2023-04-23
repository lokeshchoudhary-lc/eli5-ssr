import axios from 'axios';
import { BaseUrl } from '$lib/vars';

export const load = async ({ params }) => {
  let noAnswerContent;
  let loadMore;
  let sortType = 'trending';
  let userChoosenTag;
  let questionUrl = params.question;

  let logedIn = false;

  const res = await axios.get(`${BaseUrl}/authCheck`, {
    withCredentials: true,
  });
  const auth = res.data.auth;

  if (auth == true) {
    logedIn = true;
    const userResponse = await axios.get(`${BaseUrl}/userDetails`, {
      withCredentials: true,
    });

    if (questionUrl) {
      let questionId = decodeUrl(questionUrl);
      const questionResponse = await axios.get(
        `${BaseUrl}/question/${questionId}`
      );
      userChoosenTag = questionResponse.data.tag;

      const answerResponse = await axios.get(
        `${BaseUrl}/answers/${questionId}?sort=${sortType}`,
        {
          withCredentials: true,
        }
      );

      if (answerResponse.status == 204) {
        loadMore = false;
        noAnswerContent = true;
        return {
          logedIn,
          userDetails: userResponse.data,
          noAnswerContent,
          loadMore,
          userChoosenTag,
          sortType,
          question: questionResponse.data,
          answers: [],
          questionUrl,
        };
      }

      if (answerResponse.data.length < 10) {
        loadMore = false;
      }
      noAnswerContent = false;

      return {
        logedIn,
        userDetails: userResponse.data,
        noAnswerContent,
        loadMore,
        userChoosenTag,
        sortType,
        question: questionResponse.data,
        answers: answerResponse.data,
        questionUrl,
      };
    }

    return { logedIn, userDetails: userResponse.data };
  } else {
    if (questionUrl) {
      let questionId = decodeUrl(questionUrl);
      const questionResponse = await axios.get(
        `${BaseUrl}/question/${questionId}`
      );
      userChoosenTag = questionResponse.data.tag;

      const answerResponse = await axios.get(
        `${BaseUrl}/guestAnswers/${questionId}?sort=${sortType}`
      );

      if (answerResponse.status == 204) {
        loadMore = false;
        noAnswerContent = true;
        return {
          logedIn,
          noAnswerContent,
          loadMore,
          userChoosenTag,
          sortType,
          question: questionResponse.data,
          answers: [],
          questionUrl,
        };
      }

      if (answerResponse.data.length < 10) {
        loadMore = false;
      }
      noAnswerContent = false;

      return {
        logedIn,
        noAnswerContent,
        loadMore,
        userChoosenTag,
        sortType,
        question: questionResponse.data,
        answers: answerResponse.data,
        questionUrl,
      };
    }

    return { logedIn };
  }
};

function decodeUrl(url) {
  let res = url.slice(-24);
  return res;
}
