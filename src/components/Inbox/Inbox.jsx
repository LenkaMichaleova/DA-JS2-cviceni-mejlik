export const Inbox = ({account, messages}) => {
    return (
        <div className="container">
            <div className="account">{account}</div>
            <div className={messages != 0 ? "messages unread" : "messages no-unread"}>
                {messages != 0 ? `Nepřečtených zpráv: ${messages}` : `Žádné nové zprávy`}
            </div>
        </div>
    )
}

export const Inbox2 = ({account, messages}) => {
    return (
        <div className="container">
            <div className="account">{account}</div>
            {messages !=0 ? (
                <div className="messages unread">Nepřečtených zpráv: {messages}</div> 
            ) : (
                <div className="messages no-unread">Žádné nové zprávy</div>
            )}
        </div>
    )
}