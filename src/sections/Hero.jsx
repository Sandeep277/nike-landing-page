import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col 
      justify-center min-h-screen gap-10 max-containr"
    >
      <div
        className="relative 
      xl:w-2/5 flex flex-col 
      justify-center items-start 
      w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          className="mt-10 font-palanquin text-8xl 
        max:sm:text-[72px] max:sm:leading-[82]"
        >
          <span
            className="xl:bg-white 
          xl:whitespace-nowrap relative z-10 pr-10"
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 
        sm:max-w-sm"
        >
          Discver stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="show now" iconUrl={arrowRight} />
        <div
          className="flex 
        justify-start items-start flex-wrap w-full mt-20 gap-16"
        >
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center 
      xl:min-h-screen max-xl:py-14 bg-primary 
      bg-cover bg-center">
        <img
         className="object-contain relative z-10"
         src={bigShoe1} width={610} height={500} alt="shoe" />
      </div>

      <div>
        {shoes.map((shoe, index) => (
          <div key={index}>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;