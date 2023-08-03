import {create} from "zustand";
import {QuizTypeOption} from "@/modules/Quiz/interfaces/QuizTypeOption";
import {QuizType} from "@/modules/Quiz/interfaces/QuizType";

interface CreateQuizState {
    quizType?: QuizTypeOption,
    quizTypes: QuizTypeOption[],
    setQuizTypes: (quizTypes: QuizType[], enabledKeys: string[]) => void,
    setQuizType: (quizType: QuizType) => void
}
export const useCreateQuizStore = create<CreateQuizState>((set) => ({
    quizTypes: [],
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
                return { quizType: type }
            }

            throw new Error("Invalid QuizType");
        })
    },
}));