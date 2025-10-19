export const ModalOverlay = ({ children, modalIsopen, handleClick }) => {
  if (!modalIsopen) return null;

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-start pt-24 z-20 overflow-y-auto"
    >
      <div className="w-full max-w-3xl px-6 flex justify-center items-center">{children}</div>
    </div>
  );
};
