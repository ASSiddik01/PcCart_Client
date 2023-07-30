import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Catagories = () => {
  const catagories = useSelector((state) => state.category.data);

  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    slidesToScroll: 0.5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {catagories?.map((category) => (
        <Link key={category?._id} href={`/category/${category?._id}`}>
          <div key={category?._id}>
            <div className="catagory border border-[#ededed] rounded-md flex justify-between items-center gap-[10px] m-2 px-[15px] py-[10px] ">
              <div className="catagory_info">
                <h4 className="catagory_title capitalize text-lg font-bold">
                  {category?.title}
                </h4>
              </div>
              <img
                className="w-[120px] h-[120px] "
                src={category?.imgUrl}
                alt="catagory"
              />
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default Catagories;
