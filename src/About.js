                
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
export default function About(props) {
/* 
    const [myStyle, setMyStyle] = useState(
        {
            color: 'black',
            backgroundColor: 'White',
        }
    ) */

   /*  const [BtnText, setBtnText] = useState("Enable dark mode");
    const tog=()=>
     {
        if (myStyle.color ===  'black')
         {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setBtnText("Enable light mode");
        }

        else 
        {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setBtnText("Enable dark mode");
        }
    } */

    let myStyle=
    {
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode==='dark'?'#557c9f':'white',

    }
        return (
            <>
                <div className="container">
                    <h1 style={{  color:props.mode==='dark'?'white':'black'}}>About</h1>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   <strong>Analyze your text</strong> 
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={myStyle}>
                                    <p>Textutils gives u  way to analyze ur text quickly and efficiently.
                                        Be it word count character count or 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  <strong>  Free to use</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={myStyle}>
                                    <p>Textutils are free character counter tool that provides instant character count & word count statistics for a given text.
                                        Textutils reports the no of words and characters.Thus it is suitable for writing text with words/character limit.
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                  <strong>  Browser Compatible </strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body" style={myStyle}>
                                    <p> This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer,Safari,Opera. It suits to count character in facebook, blog,books,excel document,pdf document,essays,etc</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button variant="primary" className='my-3' type="submit" onClick={tog}>{BtnText}</Button> */}

                </div>
            </>

        );
    }


