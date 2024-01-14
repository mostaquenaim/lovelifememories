import { useState } from 'react';
import { useEffect } from 'react';

const FAQ = () => {
    const [faq, setFaq] = useState([])

    useEffect(() => {
        fetch('/faq.json')
            .then(res => res.json())
            .then(data => setFaq(data))
    }, [])

    return (
        <>
            <div className='mt-20 mb-10 mx-10'>
                <p className='pb-10 text-3xl font-semibold text-primary text-center'>FAQ</p>
                {
                    faq.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base md:text-xl font-medium">
                                {item.question}
                            </div>
                            <div className="collapse-content">
                                {
                                    Array.isArray(item.answer) ?
                                        <div>
                                            {item.answer.map((ans, index) => (
                                                <p key={index}>- {ans}</p>
                                            ))}
                                        </div>
                                        :
                                        <p>
                                            {item.answer}
                                        </p>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default FAQ;