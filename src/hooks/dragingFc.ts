const dragStart = (
  e: React.DragEvent<HTMLElement>,
  setauxCard: any,
  border: any
) => {
  e.dataTransfer.setDragImage(new Image(), e.screenX, e.screenY);
  e.dataTransfer.effectAllowed = "all";
  setauxCard((last: any) => {
    return {
      ...last,
      position: [e.screenX, e.screenY],
      exist: true,
      pose: "fixed",
    };
  });
  return false;
};
const dragOn = (
  e: React.DragEvent<HTMLElement>,
  setauxCard: any,
  border: any
) => {
  let opacity = 0.3;
  if (
    e.pageY > border.current.offsetTop &&
    e.pageY < border.current.offsetTop + border.current.clientHeight &&
    e.pageX > border.current.offsetLeft &&
    e.pageX < border.current.offsetLeft + border.current.clientWidth
  ) {
    opacity = 1;
  }
  if (e.pageY && e.pageX) {
    setauxCard((last: any) => {
      return { ...last, position: [e.pageX, e.pageY], opacity: opacity };
    });
  }
};
const dragEnd = async (
  e: React.DragEvent<HTMLElement>,
  setauxCard: any,
  border: any,
  setcards: any,
  auxCard: any
) => {
  if (
    e.pageY > border.current.offsetTop &&
    e.pageY < border.current.offsetTop + border.current.clientHeight &&
    e.pageX > border.current.offsetLeft &&
    e.pageX < border.current.offsetLeft + border.current.clientWidth
  ) {
    console.log(auxCard);
    setcards((old: any) => {
      return [
        ...old,
        {
          ...auxCard,
          pose: "absolute",
          position: [
            auxCard.position[0] - border.current.offsetLeft,
            auxCard.position[1] - border.current.offsetTop,
          ],
        },
      ];
    });
  }
  setauxCard((last: any) => {
    return { ...last, exist: false, opacity: 0.3 };
  });
};

export { dragEnd, dragStart, dragOn };
