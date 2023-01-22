export default function About(props) {
    return (
        <div className='container py-3'>
            <h1 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(39, 43, 51)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Anaylazer</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(10, 12, 16)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }}>
                            This textUtility provides you tools to analyaze your text quickly and effectively. Be it a word or a whole article, you've got covered. It reports the number of words or character your text has or the minutes it'll take you to read it all.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(39, 43, 51)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(10, 12, 16)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }}>
                            The best part...... IT'S FREE!
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(39, 43, 51)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible + Mobile Friendly</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ border: '1px solid black', backgroundColor: props.mode === 'light' ? 'rgb(235, 235, 235)' : 'rgb(10, 12, 16)', color: props.mode === 'light' ? 'rgb(10, 12, 16)' : 'white' }}>
                            This utility works in almost any browser whether it's chrome, brave, firefox, Safari, Opera, Edge Etc. If you open it in your mobile phone, it looks and works as perfect as on your Laptop or PC.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
