import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NUM_OF_QUES, QUES_MARKS } from '../constant'

const QuizContext = createContext()

export function useQuizContext() {
    return useContext(QuizContext)
}

export function QuizProvider({ children }) {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const [availableQuestions, setAvailableQuestions] = useState([])
    const [questionCounter, setQuestionCounter] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState()
    const [selectedAnswer, setSelectedAnswer] = useState()
    const [isCorrectAnswer, setIsCorrectAnswer] = useState()
    const [isProcessing, setIsProcessing] = useState(false)
    const [score, setScore] = useState(0)

    const getQuestions = async () => {
        setLoading(true)
        try {
            const url = `https://opentdb.com/api.php?amount=${NUM_OF_QUES}&category=9&difficulty=hard&type=multiple`
            const questions = await fetch(url)
            const quesJson = await questions.json()
            setLoading(false)
            return quesJson?.results ?? []
        } catch (err) {
            console.error(err.message)
            setLoading(false)
        }
    }

    const generateRandomQuestion = (maxIndex) => {
        if (maxIndex <= 0) {
            return 0 // Return 0 if the array is empty or has only one element
        }
        return Math.floor(Math.random() * maxIndex)
    }

    const startQuiz = async () => {
        getNewQuestion()
        navigate('/quiz')
    }

    const getQuizData = async () => {
        const questions = await getQuestions()
        const questionsArray = []
        // to change question and answer in desired way
        questions.forEach((ques) => {
            // for question
            const formattedQues = {
                question: ques.question,
            }
            // for choices
            const ansChoices = [...ques.incorrect_answers]
            formattedQues.answer = Math.floor(Math.random() * 3) + 1 //this will make any random index as undefined & we can place answer at that location
            ansChoices.splice(formattedQues.answer - 1, 0, ques.correct_answer) // this will place correct answer at that undefined index
            formattedQues['choices'] = ansChoices
            questionsArray.push(formattedQues)
        })
        setQuestions(questionsArray)
        setAvailableQuestions(questionsArray)
    }

    useEffect(() => {
        // Load the initial question when the component mounts
        getQuizData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getNewQuestion = () => {
        setSelectedAnswer()
        setIsCorrectAnswer()
        if (availableQuestions.length === 0 || questionCounter >= NUM_OF_QUES) {
            navigate('/score')
            return // Exit if the user has already attempted all questions
        }
        const tempAvailableQuestions = [...availableQuestions]
        // Generate a random index within the valid range of available questions
        const quesIndex = generateRandomQuestion(tempAvailableQuestions.length)
        // Select the new question
        const newCurrentQuestion = tempAvailableQuestions[quesIndex]
        // Remove the selected question from availableQuestions.
        tempAvailableQuestions.splice(quesIndex, 1)
        // Update state with the new question and the updated availableQuestions.
        setCurrentQuestion(newCurrentQuestion)
        setAvailableQuestions(tempAvailableQuestions)
    }

    const incrementScore = () => {
        setScore(prev => prev + QUES_MARKS)
    }

    const onOptionClick = (clickedIndex) => {
        if (isProcessing) {
            // Do nothing if the function is already processing
            return
        }
        setIsProcessing(true)
        setQuestionCounter((prev) => prev + 1)
        setSelectedAnswer(clickedIndex + 1)
        setIsCorrectAnswer(clickedIndex + 1 === currentQuestion.answer)
        if (clickedIndex + 1 === currentQuestion.answer) {
            incrementScore()
        }
        setTimeout(() => {
            getNewQuestion()
            setIsProcessing(false) // Set isProcessing to false when done
        }, 1000)
    }


    const playAgain = () => {
        setScore(0)
        setQuestionCounter(0)
        setAvailableQuestions([])
        setCurrentQuestion()
        setQuestions([])
        getQuizData()
        navigate('/')
    }

    const contextValue = {
        questions,
        loading,
        availableQuestions,
        questionCounter,
        currentQuestion,
        score,
        getNewQuestion,
        incrementScore,
        onOptionClick,
        playAgain,
        startQuiz,
        isCorrectAnswer,
        selectedAnswer
    }
    return <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
}
