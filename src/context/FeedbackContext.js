import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
 const [isLoading, setIsLoading] = useState(true)
 const [feedback, setFeedback] = useState([])
 const [feedbackEdit] = useState({
   item: {},
   edit: false,
 })

 useEffect(() => {
   fetchFeedback()
 }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
   const response = await fetch(`/feedback?_sort=id&_order=desc`)
   const data = await response.json()

   setFeedback(data)
   setIsLoading(false)
 }

 return (
  <FeedbackContext.Provider
    value={{
      feedback,
      feedbackEdit,
      isLoading
    }}
  >
    {children}
  </FeedbackContext.Provider>
)

}
 export default FeedbackContext