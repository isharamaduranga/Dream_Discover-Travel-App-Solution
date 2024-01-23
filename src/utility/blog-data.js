// Images Imports

import banner1 from "../assets/images/home/category/water_sport.jpg"
import banner2 from "../assets/images/home/category/nature.jpg"
import banner3 from "../assets/images/home/category/camping.jpg"
import banner4 from "../assets/images/home/category/wild_life.jpg"

export const BlogData = {
  // blog list


  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        img: banner1,
        title: "Lorem ipsum dolor sit amet.",
        id: 7,
        createdTime: "Jan 14 2020"
      },
      {
        img: banner2,
        title: "Lorem ipsum dolor sit amet.",
        id: 8,
        createdTime: "Mar 04 2020"
      },
      {
        img: banner3,
        title: "Lorem ipsum dolor sit amet.",
        id: 9,
        createdTime: "Feb 18 2020"
      },
      {
        img: banner4,
        title: "Lorem ipsum dolor sit amet.",
        id: 10,
        createdTime: "Oct 08 2020"
      }
    ],
    categories: [
      { category: "Adventure", icon: "AlertOctagon" },
      { category: "WildLife", icon: "Gitlab" },
      { category: "WaterSport", icon: "Wind" },
      { category: "Nature", icon: "CloudRain" },
      { category: "Camping", icon: "Moon" },
      { category: "Ancient", icon: "Command" },
      { category: "Festive", icon: "Star" }
    ]
  }

}
