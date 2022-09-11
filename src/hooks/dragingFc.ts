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
          id: old.length,
        },
      ];
    });
  }
  setauxCard((last: any) => {
    return { ...last, exist: false, opacity: 0.3 };
  });
};
const dragingExisting = (
  e: React.DragEvent<HTMLElement>,
  id: any,
  setcards: any,
  border: any,
  elem: any
) => {
  if (e.pageX && e.pageY) {
    setcards((old: any) => {
      return old.map((word: any) => {
        if (word.id === id) {
          return {
            ...word,
            position: [
              e.pageX -
                border.current.offsetLeft -
                elem.current.offsetWidth / 2,
              e.pageY -
                border.current.offsetTop -
                elem.current.offsetHeight / 2,
            ],
          };
        }
        return word;
      });
    });
  }
};
export { dragEnd, dragStart, dragOn, dragingExisting };
