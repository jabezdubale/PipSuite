import useNavOverlayStore from "../stores/NavOverlayStore";

const NavOverlay = () => {
  const isOpen = useNavOverlayStore((s) => s.isOpen);
  const buttonIsClicked = useNavOverlayStore((s) => s.buttonIsClicked);

  return (
    <div
      onClick={buttonIsClicked}
      className={`${
        isOpen ? "" : "hidden"
      } absolute text-primary-headings bg-gray-900/50 left-0 w-full h-svh`}
    >
      <div className="w-full">Overlay</div>
    </div>
  );
};

export default NavOverlay;
