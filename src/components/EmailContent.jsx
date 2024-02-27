function EmailContent({ selectedEmail }) {
    return (
      <div>
        <p>Sender: {selectedEmail.sender}</p>
        <p>Title: {selectedEmail.title}</p>
      </div>
    );
  }
  
  export default EmailContent;