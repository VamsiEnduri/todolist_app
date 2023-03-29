export const Add = (items) => {
  return {
    type: "ADD_DATA",
    paylaod: items,
  };
};

export const Remove = (id) => {
  return {
    type: "REMOVE_DATA",
    paylaod: id,
  };
};
