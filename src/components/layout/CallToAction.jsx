import { Button } from "../ui/Button";

export const CallToAction = () => {
  return (
    <div className="flex items-center justify-center min-h-94 px-5 mt-8 bg-orange-600">
      <div className="min-h-94 flex flex-col items-center justify-center px-5  gap-8">
        <h1 className="text-white text-center font-bold text-4xl">Simplify how your team works today</h1>
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
