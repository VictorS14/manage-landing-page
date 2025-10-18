import { Button } from "../ui/Button";

export const CallToAction = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-94 lg:min-h-50 px-5 lg:px-24 mt-8 bg-orange-600">
      <div className="flex flex-col lg:flex-row lg:w-full lg:justify-between items-center justify-center px-5  gap-8">
        <h1 className="text-white text-center lg:max-w-90 lg:text-start font-bold text-4xl">Simplify how your team works today.</h1>
        <Button
          text={"Get Started"}
          className={
            "bg-gray-50 h-10 w-35 rounded-full flex items-center justify-center text-orange-600 font-semibold"
          }
        />
      </div>
    </div>
  );
};
