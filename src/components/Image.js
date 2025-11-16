import { jsx as _jsx } from "react/jsx-runtime";
export default function Image({ src, alt, className, style }) {
    return _jsx("img", { src: src, loading: 'lazy', alt: alt, className: className, style: style });
}
