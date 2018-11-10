const goods = [
  {
    label: "Soundmax SM-CF502",
    img: {
      url: "https://img.mvideo.ru/Pdb/10007683b.jpg"
    },
    rating: 0.8
  },
  {
    label: "Soundmsdfdsfsdf adsa ax SM-CF502",
    img: {
      url: "https://img.mvideo.ru/Pdb/10007683b.jpg"
    },
    rating: 0.8
  },
  {
    label: "Sound_soc_max SM-CF502",
    img: {
      url: "https://img.mvideo.ru/Pdb/10007683b.jpg"
    },
    rating: 0.2
  }
];

const RequestHandler = {
  "shop.getPopular": function shopGetPopular(query) {
    let count = query.count
      ? query.count > goods.length
        ? goods.length
        : query.count
      : 1;
    let response = [];
    for (let i = 0; i < count; i++) {
      response.push(goods[i]);
    }
    return response;
  }
};
module.exports = RequestHandler;
