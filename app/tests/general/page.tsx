'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from 'lucide-react'

// Sample quiz data
const quizData = [
  {
    question: "Q1. I found it hard to wind down",
    options: ["Not At All","Several Days", "More Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q2. I was aware of dryness of my mouth",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q3. I couldn’t seem to experience any positive feeling at all",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q4. I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q5. I found it difficult to work up the initiative to do things",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q6. I tended to over-react to situations",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q7. I experienced trembling (e.g. in the hands)",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q8. I felt that I was using a lot of nervous energy",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q9. I was worried about situations in which I might panic and make a fool of myself",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q10. I felt that I had nothing to look forward to",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q11. I found myself getting agitated",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q12. I found it difficult to relax",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q13. I felt down-hearted and blue",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q14. I was intolerant of anything that kept me from getting on with what I was doing",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q15. I felt I was close to panic",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q16. I was unable to become enthusiastic about anything",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q17. I felt I wasn’t worth much as a person",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q18. I felt that I was rather touchy",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q19. I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q20. I felt scared without any good reason",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
  {
    question: "Q21. I felt that life was meaningless",
    options: ["Not At All", "Several DaysMore", "Than Half The Days", "Nearly Every Day"],
    correctAnswer: "Not At All"
  },
]

export default function Component() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill("")) // Store answers for all questions
  const [quizCompleted, setQuizCompleted] = useState(false)

  const currentQuestion = quizData[currentQuestionIndex]

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1)
    }
  }

  const handleAnswerChange = (answer:any) => {
    const updatedAnswers = [...selectedAnswers]
    updatedAnswers[currentQuestionIndex] = answer
    setSelectedAnswers(updatedAnswers)
  }

  if (quizCompleted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-teal-300 p-6">
        <Card className="w-full max-w-lg mx-auto shadow-2xl rounded-xl p-8" style={{ backgroundColor: '#D6F7F4' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-extrabold" style={{ color: '#008080' }}>Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center text-lg">
            <p className="text-gray-700">Congratulations! You've completed the quiz.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg shadow-md hover:from-teal-600 hover:to-teal-800 transition-all"
              onClick={() => location.reload()}
            >
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white via-teal-100 to-teal-100 p-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-teal-800">General Test</h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Instructions:</h2>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li className="mb-1">Please attempt all statements.</li>
          <li className="mb-1">Read each statement and select the option that best describes your experience over the past week.</li>
          <li className="mb-1">There are no right or wrong answers.</li>
          <li>Your responses are completely confidential.</li>
        </ul>
      </div>

      <Card className="w-full max-w-lg mx-auto p-6 rounded-xl shadow-2xl" style={{ backgroundColor: '#D6F7F4' }}>
        <CardContent className="py-6">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#008080' }}>{currentQuestion.question}</h2>
          <RadioGroup value={selectedAnswers[currentQuestionIndex]} onValueChange={handleAnswerChange}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3 mb-4">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="text-lg text-gray-800">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button 
            onClick={handlePreviousQuestion} 
            disabled={currentQuestionIndex === 0}
            className={`flex items-center justify-center px-6 py-2 w-32 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:from-teal-600 hover:to-teal-700 transition-all ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <div className="text-center text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {quizData.length}
          </div>
          <Button 
            onClick={handleNextQuestion} 
            disabled={!selectedAnswers[currentQuestionIndex]} // Ensure an answer is selected
            className={`flex items-center justify-center px-6 py-2 w-32 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md hover:from-teal-600 hover:to-teal-700 transition-all ${!selectedAnswers[currentQuestionIndex] ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {currentQuestionIndex < quizData.length - 1 ? (
              <>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              'Finish'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}