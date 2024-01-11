import Marquee from "react-fast-marquee";

const Images = ({ images }) => {
    return (
        <Marquee>
            {
                images.map((image, index) => (
                    <img key={index} src={image.url} alt="" />
                )
                )
            }
        </Marquee>
    );
};

export default Images;