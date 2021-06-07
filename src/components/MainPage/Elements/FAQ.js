import React from "react";
import '../Styles/FAQ.css'

function FAQ(){
    return(
        <div id="FAQ" className='faq'>
            <h1>FAQ</h1>
            <details open>
                <summary>Чем может помочь платформа "СoHelper"?</summary>
                <div>
                    <p className="faq_content">Платформа CoHelper может помочь найти заказчиков для вашей продукции, поставщиков или компаньонов для ведения совместного бизнеса.</p>
                </div>
            </details>
            <details>
                <summary>Как зарегестрироваться на платформе?</summary>
                <div>
                    <p className="faq_content">Для регистрации на платформе нажмите кнопку "Присоединиться" на экране с видео. Нажав на кнопку, вы перейдете на форму с регистрацией.</p>
                </div>
            </details>
            <details>
                <summary>Как найти партнера на CoHelper?</summary>
                <div>
                    <p className="faq_content">Для того чтобы найти партнера на нашей платформе необходимо пройти простую регистрацию от лица вашей компании, заполнив все необходимые данные. Далее найти понравившуюся компанию и нажать кнопку "Сотрудничать". Как только компания подтвердит сотрудничество, поступит уведомление и появится возможность написать в чате на нашем сайте :)</p>
                </div>
            </details>
        </div>
    )
}

export default FAQ;