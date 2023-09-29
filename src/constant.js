import DOMPurify from 'dompurify'

export const sanitizedData = (value) => ({
    __html: DOMPurify.sanitize(value)
})

export const QUES_MARKS = 10
export const NUM_OF_QUES = 10