import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './maintext-styles.scss'

const MainText = () => (
    <div class='main-text'>
        <div class="row-auto">Hello,</div>
        <div class="row">
            <div class='col-auto'>I'm</div>
            <div class='col-auto text-pink'>Willa </div>
            <div class='col-auto mx-4 line'></div>
            <div class="col-auto">a student in</div>
        </div>
        <div class="row"> 
            <div class="col">computer science and design at northeastern university.</div></div>
    </div>
)

export default MainText;