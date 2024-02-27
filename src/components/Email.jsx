import EmailContent from "./EmailContent"
function Email(props) {

    return (

        <li
    
              className={`email ${props.email.read ? 'read' : 'unread'} ${props.isSelected ? 'selected' : ''}`} onClick={props.onClick}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={props.email.read}
                  onChange={() => props.toggleRead(props.email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={props.email.starred}
                  onChange={() => props.toggleStar(props.email)}
                />
              </div>
              <div className="sender">{props.email.sender}</div>
              <div className="title">{props.email.title}</div>
              {props.isSelected && (
        <div className="additional-content">
          {/* Render additional content when email is selected */}
          <EmailContent selectedEmail={props.email} />
        </div>
      )}
            </li>
    )

}
export default Email