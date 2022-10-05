const dragStart = (
  e: React.DragEvent<HTMLElement>,
  setauxCard: any,
  schema: { OutputPort: string[]; connection: any[]; functionality: string },
  cards: any,
  Name: string
) => {
  e.dataTransfer.setDragImage(new Image(), e.pageX, e.pageY);
  setauxCard((prev: any) => {
    return {
      ...prev,
      ...schema,
      exist: true,
      Name,
      position: [0, 0],
      id: Number(cards[cards.length - 1].id) + 1 + "",
      opacity: 0,

    };
  });
};
const dragOn = (
  e: React.DragEvent<HTMLElement>,
  setauxCard: any,
  border: any
) => {
  let opacity = 0.7;
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
const dragEnd =(
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
    setcards((old: any) => {
      return [
        ...old,
        {
          ...auxCard,
          Message:auxCard.Name,
          position: [
            auxCard.position[0] -
              border.current.offsetLeft +
              border?.current.scrollLeft,
            auxCard.position[1] -
              border.current.offsetTop +
              border?.current.scrollTop,
          ],
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
  id: string,
  setcards: any,
  borderTop: number,
  borderLeft: number,
  width: number,
  height: number,
  border?: any
) => {
  e.stopPropagation();
  if (e.pageX && e.pageY) {
    setcards((old: any) => {
      return old.map((itm: any) => {
        if (itm.id === id) {
          return {
            ...itm,
            position: [
              e.pageX - borderLeft - width / 2 + border?.current.scrollLeft,
              e.pageY - borderTop - height / 2 + border?.current.scrollTop,
            ],
          };
        }
        return itm;
      });
    });
  }
};
const TouchingExisting = (
  e: React.TouchEvent<HTMLDivElement>,
  id: string,
  setcards: any,
  borderTop: number,
  borderLeft: number,
  width: number,
  height: number,
  border?: any
) => {
  e.stopPropagation();
  setcards((old: any) => {
    return old.map((itm: any) => {
      if (itm.id === id) {
        return {
          ...itm,
          position: [
            e.targetTouches[0].pageX -
              borderLeft -
              width / 2 +
              border?.current.scrollLeft,
            e.targetTouches[0].pageY -
              borderTop -
              height / 2 +
              border?.current.scrollTop,
          ],
        };
      }
      return itm;
    });
  });
};

export { dragEnd, dragStart, dragOn, dragingExisting, TouchingExisting };
