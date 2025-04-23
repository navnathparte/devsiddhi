import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from "../components/PageTransition";

const posts = [
  {
    category: "DESIGN",
    title: "How To Publish Content That Ranks On Google",
    date: "9 Apr 2022",
    comments: 17,
    excerpt: "Ncididunt ut labore et dolore magna aliqua. Ut enim veniam...",
    image: "assets/green.jpg",
  },
  {
    category: "DEVELOPMENT",
    title: "How Efficient Site Structure Can Boost SEO",
    date: "21 Feb 2022",
    comments: 34,
    excerpt: "Ncididunt ut labore et dolore magna aliqua. Ut enim veniam...",
    image: "assets/fable.jpg",
  },
  {
    category: "ESSENTIALS",
    title: "Change Management for Customer Success",
    date: "1 Jan 2022",
    comments: 10,
    excerpt: "Ncididunt ut labore et dolore magna aliqua. Ut enim veniam...",
    image: "assets/felicia.jpg",
  },
  {
    category: "MARKETING",
    title: "Why Social Proof Matters in UX",
    date: "15 Dec 2021",
    comments: 23,
    excerpt: "Ncididunt ut labore et dolore magna aliqua. Ut enim veniam...",
    image: "assets/Fabula.jpg",
  },
];

// Custom arrows
const PrevArrow = (props: any) => (
  <button
    className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
    onClick={props.onClick}
  >
    <ArrowLeft />
  </button>
);

const NextArrow = (props: any) => (
  <button
    className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
    onClick={props.onClick}
  >
    <ArrowRight />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const Post = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center scale-110 pointer-events-none z-0"
        style={{ backgroundImage: "url('/city.jpg')" }}
      />

      <div className="flex justify-center items-center text-center mb-6">
        <h2 className="text-4xl text-[#B68842] font-extrabold">Latest Posts</h2>
      </div>

      <div className="flex items-center justify-center p-12">
        {/* Centered title above the slider */}

        <div className="w-full max-w-[900px] relative">
          <Slider {...settings}>
            {posts.map((post, index) => (
              <div key={index} className="px-6">
                <div className="bg-[#3a3535] text-[#B68900] rounded-3xl overflow-hidden shadow-lg h-[500px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <span className="inline-block bg-[#B68842] text-black text-xs px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold py-4">{post.title}</h3>
                    <p className="text-md text-[#B68842] mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex text-xs text-[#B68842] gap-4 py-4">
                      <span>📅 {post.date}</span>
                      <span>💬 {post.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Post;
