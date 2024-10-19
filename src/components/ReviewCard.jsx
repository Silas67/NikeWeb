import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full  object-cover w-[120px] h-[120px] "
      />
      <p className="text-center mt-6 max-w-sm info-text ">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="font-palanquin text-center mt-1 font-semibold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
