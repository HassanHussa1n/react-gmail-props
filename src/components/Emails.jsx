import { useState } from "react"
import Email from "./Email"

function Emails(props) {

    const [clickedEmail, setClickedEmail] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const toggleStar = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
        props.setEmails(updatedEmails)
      }
    
      const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        props.setEmails(updatedEmails)
      }

      const handleEmailClick = (targetEmail) => {
        setClickedEmail((prevClickedEmail) => (prevClickedEmail === targetEmail ? null : targetEmail));
      };
      
    
      const filterEmails = (email) => {
        const { searchQuery } = props;
        return (
          email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
          email.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      };
    
      const filteredEmails = props.filteredEmails.filter(filterEmails);

    return (

        <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <Email 
            key={index} 
            email={email}
             toggleRead={toggleRead} 
             toggleStar={toggleStar} onClick={() => handleEmailClick(email)} isSelected={clickedEmail === email}/>
          ))}
        </ul>
      </main>

    )
}
export default Emails