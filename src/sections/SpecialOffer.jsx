import Button from "../components/Button";
import Buttontransparent from "../components/Buttontransparent";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse">
      <div className="">
        <img
          src={offer}
          alt=""
          width={573}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>Offer
        </h2>
        <p
          className="mt-4 lg:max-w-lg info-text
        "
        >
          Embark pon a shopping journey that redefines your experience with
          unbeatable deals, From premier selections to incredible savings we
          offer unparralled value that sets us apart
        </p>
        <p
          className="mt-6 lg:max-w-lg info-text
        "
        >
          Navigate a realm of possibilities designed to fulfil your unique
          desires, surpassing your every expectations. Your jouurney with us is
          nothing short of exceptional.
        </p>
        <div className="my-9 flex flex-wrap gap-4">
          <Button label="Shop Now" />
          <Buttontransparent label="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
