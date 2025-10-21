import { TipsOfManage } from "./TipsOfManage";

export const SectionAbout = () => {
  return (
    <section className="flex flex-col gap-12 lg:w-full lg:flex-row lg:justify-between">
      <div className="flex flex-col gap-5 items-center lg:items-start">
        <h2 className="max-w-80 sm:max-w-lg lg:max-w-lg text-blue-950 text-[min(7vw,40px)] font-bold text-center lg:text-start">What's different about Manage?</h2>
        <p  className="text-center lg:text-start sm:max-w-xl lg:max-w-80 text-gray-500">
          Manage provides all the functionality your team needs, without the complexity. Our software is
          tailor-made for modern digital product teams.
        </p>
      </div>
      <TipsOfManage />
    </section>
  );
};
