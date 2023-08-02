import {create} from "zustand";
import {QuizTypeOption} from "@/modules/Quiz/interfaces/QuizTypeOption";

interface CreateQuizState {
    quizType?: number,
    quizTypes: QuizTypeOption[],
    setQuizTypes: (quizTypes: QuizTypeOption[]) => void,
}
export const useCreateQuizStore = create<CreateQuizState>((set) => ({
    quizTypes: [],
    setQuizTypes: (quizTypes: QuizTypeOption[]) => {
        set((state) => ({ quizTypes }))
    },
    setQuizType: (quizType: number) => {
        set((state) => ({ quizType }))
    }
}));