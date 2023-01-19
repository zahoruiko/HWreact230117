import './Accordeon.css';

function Accordeon() {

    function clickHandler() {
        let block = document.getElementsByClassName("summary");
        console.log('Количество блоков = ', block.length);  
        for (let i = 0; i < block.length; i++) {
            console.log("i=" + i);
            block[i].addEventListener("click", function () { 
                // Отображаем факт совершения клика
                console.log("CLICK!");
                // Переключаем цвет фона для блока краткой информации
                this.classList.toggle("active");
                // Переключаем видимость блока с полной информацией
                var details = this.nextElementSibling;
                // console.log("details = ", details );
                console.log("CURRENT: details.style.display = ", details.style.display);
                if (details.style.display === "block") {
                    console.log('Set NONE'); 
                    details.style.display = "none"; 
                } else {
                    details.style.display = "block";
                    console.log('Set BLOCK');
                }
                console.log("SETTED: details.style.display = ", details.style.display);
            });
        }
        console.log("Script for Accordeon is loaded");
    }

    return (
        <div onLoad={clickHandler()}>
            <h2>Accordeon:</h2>

            <button className="summary">Section 1</button>
            <div id='1' className="details">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
            </div>

            <button className="summary">Section 2</button>
            <div id='2' className="details">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
            </div>

            <button className="summary">Section 3</button>
            <div id='3' className="details">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
            </div>

        </div> 
    );
}

export default Accordeon