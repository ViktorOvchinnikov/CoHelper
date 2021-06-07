import React from "react";
import '../Styles/FAQ.css'

function FAQ(){
    return(
        <div id="FAQ" className='faq'>
            <h1>FAQ</h1>
            <details open>
                <summary>FAQ 1</summary>
                <div>
                    <p className="faq_content">Answer 1</p>
                </div>
            </details>
            <details>
                <summary>FAQ 2</summary>
                <div>
                    <p className="faq_content">Answer 2</p>
                </div>
            </details>
            <details>
                <summary>FAQ 3</summary>
                <div>
                    <p className="faq_content">Answer 3</p>
                </div>
            </details>
        </div>
    )
}

export default FAQ;