const initialState = {
    question: "",
    points: "",
    difficulty: "",
    category: "",
    answerTitle1: "",
    answerTitle2: "",
    answerTitle3: "",
    answerTitle4: "",
    isCorrect1: false,
    isCorrect2: false,
    isCorrect3: false,
    isCorrect4: false
  }
  
  export default function addCardReducer(state = initialState, action) {
    const { payload, type } = action;
  
    switch (type) {
      case 'ADDCARD_FULFILLED': {
        return {
                question: "",
                points: "",
                difficulty: "",
                category: "",
                answerTitle1: "",
                answerTitle2: "",
                answerTitle3: "",
                answerTitle4: "",
                isCorrect1: false,
                isCorrect2: false,
                isCorrect3: false,
                isCorrect4: false
         }
      }

      case 'ADDCARD_INPUT': {
        return {
          ...state,
          ...payload
        }
      }

      default: {
        return state
      }
    }
  }
  