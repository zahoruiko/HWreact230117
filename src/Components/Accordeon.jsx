import { Component } from 'react';
import './Accordeon.css';

class Accordeon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        b0: 'none',
        b1: 'none',
        b2: 'none',
      }
      this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        let block = document.getElementsByClassName("summary");
        console.log('Количество блоков = ', block.length);
        for (let i = 0; i < block.length; i++) {
            console.log("i = " + i);
            block[i].addEventListener("click", function () {
                // Отображаем факт совершения клика
                console.log("CLICK!");
                // Переключаем цвет фона для блока краткой информации
                this.classList.toggle("active");
                // Переключаем видимость блока с полной информацией
                var details = this.nextElementSibling;
                console.log("CURRENT = ", details.style.display);
                // Сохраняем значение state в во временную переменную
                let tmp = {...this.state};
                if (details.style.display === "block") {
                    details.style.display = "none";
                } else {
                    details.style.display = "block";
                }
                tmp['b' + i] = details.style.display;
                console.log('Setted: ' + details.style.display);
                // Устанавливаем новое значение в state
                this.setState(tmp);
                console.log(" Current state: " + this.state );
                console.log("RESULT = ", details.style.display);
            });
        }
        console.log("Script for Accordeon is loaded.");
    }

    render() {
        return (
            <div>
                <h2>Accordeon:</h2>
                <button className="summary">Section 1</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>

                <button className="summary">Section 2</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>
    
                <button className="summary">Section 3</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>
                <script>{this.clickHandler()}</script>
            </div> 
        );
    }
}

export default Accordeon