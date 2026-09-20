import React from 'react';

const TikTokIcon = ({ size = 20, className = '' }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
        <path d="M16.6 5.82c-1.12-1.08-1.67-2.64-1.75-4.17H11.6v14.72c0 1.85-1.5 3.35-3.35 3.35-1.85 0-3.35-1.5-3.35-3.35 0-1.85 1.5-3.35 3.35-3.35.31 0 .61.04.9.12v-3.66a7.05 7.05 0 0 0-.9-.06 6.94 6.94 0 0 0-6.94 6.95A6.94 6.94 0 0 0 8.25 23a6.94 6.94 0 0 0 6.94-6.95V8.87a10.6 10.6 0 0 0 5.66 1.65v-3.6c-1.5-.03-2.85-.5-3.85-.9-.15-.06-.29-.13-.4-.2z" />
    </svg>
);

export default TikTokIcon;
