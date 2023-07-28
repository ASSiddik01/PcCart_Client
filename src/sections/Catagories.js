import Slider from "react-slick";

const Catagories = ({ catagories }) => {
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
    <section className="featured_category_section bg-white p-[15px] rounded-xl section_gap">
      <div className="section_heading">
        <h4 className="section_title font-bold md:text-[28px] text-[24px] mb-[30px]">
          Featured Categories
        </h4>
      </div>
      <Slider {...settings}>
        {catagories?.map((catarory) => (
          <div key={catarory?._id}>
            <div className="catagory border border-[#ededed] rounded-md flex justify-between items-center gap-[10px] m-2 px-[15px] py-[10px] ">
              <div className="catagory_info">
                <h4 className="catagory_title capitalize text-lg font-bold">
                  {catarory?.title}
                </h4>
              </div>
              <img
                className="w-[120px] h-[120px] "
                src={catarory?.imgUrl}
                alt="catagory"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Catagories;
