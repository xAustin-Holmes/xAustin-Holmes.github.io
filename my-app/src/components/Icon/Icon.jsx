import './Icon.css';

export default function Icon ( {title, src, alt} ) {

    return (
        <>
            <img
                title={title}
                src={src}
                alt={alt}
            />
        </>
    );
}