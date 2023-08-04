import {create} from "zustand";
import {QuizTypeOption} from "@/modules/Quiz/types/QuizTypeOption";
import {QuizType} from "@/modules/Quiz/types/QuizType";
import {QuizParams} from "@/modules/Quiz/types/QuizParams";
import {Quiz} from "@/modules/Quiz/types/Quiz";

interface CreateQuizState {
    quizType?: QuizTypeOption,
    quizTypes: QuizTypeOption[],
    quiz: QuizParams,

    setQuiz: (quiz: QuizParams) => void,
    setQuizTypes: (quizTypes: QuizType[], enabledKeys: string[]) => void,
    setQuizType: (quizType: QuizType) => void
}
export const useCreateQuizStore = create<CreateQuizState>((set) => ({
    quizTypes: [],
    quiz: {},

    setQuiz: (quiz: QuizParams) => {
        set((state) => ({ quiz }))
    },

    setQuizTypes: (quizTypes: QuizType[], enabledKeys: string[]) => {
        const types = quizTypes.map((quizType) => {
            return { ...quizType, disabled: !enabledKeys.includes(quizType.type) }
        })

        set((state) => ({ quizTypes: types }))
    },

    setQuizType: (quizType: QuizType) => {
        set((state) => {
            const type = state.quizTypes.find((type) => type.id === quizType.id);

            if(type) {
                return { quizType: type, quiz: { ...state.quiz, type_id: type.id } }
            }

            throw new Error("Invalid QuizType");
        })
    },
}));