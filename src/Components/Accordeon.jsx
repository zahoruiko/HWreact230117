import { Component } from 'react';
import './Accordeon.css';

class Accordeon extends Component {
    constructor(props) {
      super(props);
      this.state = {
        block: -1,
        mode: 'none'
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
                console.log("CURRENT: details.style.display = ", details.style.display);
                if (details.style.display === "block") {
                    details.style.display = "none"; 
                    console.log('Set NONE'); 
                    this.setState({block: i, mode:'none'});
                } else {
                    details.style.display = "block"; 
                    console.log('Set BLOCK');
                    this.setState({block: i, mode:'block'});
                }
                console.log("SETTED: details.style.display = ", details.style.display);
                console.log(" >> " + this.state.block, this.state.mode);
            });
        }
        console.log("Script2 for Accordeon is loaded");
    }

    render() {
        return (
            <div>
                <h2>Accordeon:</h2>
                <button id='1' className="summary">Section 1</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>
    
                <button id='2' className="summary">Section 2</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>
    
                <button id='3' className="summary">Section 3</button>
                <div className="details">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet earum consequatur maiores distinctio deleniti, magni suscipit quisquam nemo sunt modi iure quo vitae quaerat veniam facere hic. Quae, impedit eligendi.</p>
                </div>
                <script>{this.clickHandler()}</script>
            </div> 
        );
    }
}

export default Accordeon