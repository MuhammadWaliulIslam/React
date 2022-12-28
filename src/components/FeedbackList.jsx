
import { useContext } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
  const {feedback} =useContext(FeedbackContext)

    if(!feedback || feedback.length ===0){
        return <div>No feedback yet</div>
    }


    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item)=>{
            return <FeedbackItem key={item.id} item={item} />
          })}
        </AnimatePresence>
      </div>
    )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item)=>{
  //      return <FeedbackItem 
  //      key={item.id} 
  //      item={item} 
  //      handleDelete={handleDelete}/>
  //     })}
  //   </div>
  // )
}



export default FeedbackList
