import React from 'react'

const HomePage = ({pageContext}) => {
    const {isEUPage} = pageContext;
    return (
        <div style={{backgroundColor: "#000", color: "#fff"}}>HomePage deasAS {isEUPage ? "EU": "ROW"}</div>
    )
}

export default HomePage