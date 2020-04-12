import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './exp-styles.scss'

const ExpText = () => (
    <div class='exp'>
        <div class="row-auto title">What's Good?</div>
        <div class="info-block">
            <div class="row mt-5 mb-2">
                <div class='col-5 info text-pink text-right'>Catalant Technologies</div>
                <div class='col-auto line-sm mx-4'></div>
                <div class='col-5 info text-overflow'>Software Engineering Co-op</div>
            </div>
            <div class="row mt-5 mb-2">
                <div class='col-5 info text-pink text-right'>HackBeanpot</div>
                <div class='col-auto line-sm mx-4'></div>
                <div class='col-5 info text-overflow'>Design & Social Media Teams</div>
            </div>
            <div class="row mt-5 mb-2">
                <div class='col-5 info text-pink text-right'>Tastemakers</div>
                <div class='col-auto line-sm mx-4'></div>
                <div class='col-5 info text-overflow'>Staff Writer</div>
            </div>
        </div>
    </div>
)

export default ExpText;