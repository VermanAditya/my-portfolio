import React from 'react';


export default function Image({ src, alt, className, style }: any) {
return <img src={src} loading='lazy' alt={alt} className={className} style={style} />;
}