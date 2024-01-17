import React from 'react';

function TabContent({ content }) {
    return (
    <div>
        <textarea style={{padding:"50px 50px", border:"5px solid blue", fontSize:"2rem"}} rows="4" cols="50" value={content} readOnly>
        
        </textarea>
    </div>
    );
}

export default TabContent;
