import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import Emails from './components/Emails'

import initialEmails from './data/emails'

import './styles/App.css'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchQuery, setSearchQuery] = useState('')

  const unreadEmails = emails.filter(email => !email.read) //props
  const starredEmails = emails.filter(email => email.starred) //props



  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
     <Header setSearchQuery={setSearchQuery} />
      <Menu 
      currentTab={currentTab} 
      setCurrentTab={setCurrentTab} 
      unreadEmails={unreadEmails} 
      starredEmails={starredEmails} 
      setHideRead={setHideRead}/>
      <Emails 
      filteredEmails={filteredEmails} 
      setEmails={setEmails}
      searchQuery={searchQuery}
      />
    </div>
  )
}

export default App
