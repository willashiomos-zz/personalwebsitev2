import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './skills-styles.scss'

const data = {'Python': 'text-pink', 'Javascript': 'text-light-black', 'React': 'text-light-black', 
'Java': 'text-light-black', 'Jinja': 'text-light-black', 'CSS': 'text-light-black', 'jQuery': 'text-light-black',
'Bootstrap': 'text-pink', 'HTML': 'text-light-black', 'SQL': 'text-light-black', 'Git': 'text-light-black', 
'Flask': 'text-pink', 'PHP': 'text-light-black'}


const SkillsText = () => (

    <div class="skills row">
        <div class='marquee'>
            <div>
                {Object.entries(data).map((t,k) =>
                <span class="col">
                    <span key={k} class={'mx-4 ' + t[1]}>{t[0]}</span>
                    <span class="mx-4">~</span>
                </span>
                )}
            </div>
        </div>
    </div>
)

export default SkillsText;