import React from 'react';

import cardStyles from './about-card.module.scss';

const AboutCard = () => (
    <aside className={cardStyles.cardContainer} >
        <dl>
            <dt>Personal attitudes</dt>
            <dd>Methodical</dd>
            <dd>Analytical</dd>
            <dd>Organized</dd>
            <dt>Based in</dt>
            <dd>Italy</dd>
            <dt>Interests</dt>
            <dd>Coding</dd>
            <dd>Environment</dd>
        </dl>
    </aside>
);

export default AboutCard;