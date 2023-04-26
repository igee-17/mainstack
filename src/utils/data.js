import dashboard from "../assets/images/dashboard.png";
import edit from "../assets/images/edit.png";
import group from "../assets/images/group.png";
import hourglass from "../assets/images/hourglass_empty.png";
import addAPhoto from "../assets/images/add_a_photo.png";
// import delete from '../assets/images/delete.png';
import deleteIcon from "../assets/images/delete.png";
import subscriptions from "../assets/images/subscriptions.png";
import filePresent from "../assets/images/file_present.png";
import alarm from "../assets/images/alarm.png";

export const groupOne = [
  {
    text: "dashboard",
    icon: dashboard,
    active: true,
  },
  {
    text: "Item 1",
    icon: edit,
  },
  {
    text: "Item 2",
    icon: group,
    active: false,
  },
  {
    text: "Item 3",
    icon: hourglass,
    active: false,
  },
];

export const groupTwo = [
  {
    text: "item 4",
    icon: addAPhoto,
  },
  {
    text: "item 5",
    icon: deleteIcon,
  },
];

export const groupThree = [
  {
    text: "item 6",
    icon: subscriptions,
  },
  {
    text: "item 7",
    icon: filePresent,
  },
  {
    text: "item 8",
    icon: alarm,
  },
];

export const graphData = {
  graph_data: {
    views: {
      "2022-07-31": 1,
      "2022-08-01": 3,
      "2022-08-02": 3,
      "2022-08-03": 7,
      "2022-08-04": 8,
      "2022-08-05": 5,
      "2022-08-06": 20,
      "2022-08-07": 50,
      "2022-08-08": 100,
      "2022-08-09": 2,
    },
  },
  top_locations: [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ],
  top_sources: [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
    {
      source: "facebook",
      count: 40,
      percent: 20,
    },
    {
      source: "linkedin",
      count: 41,
      percent: 21,
    },
  ],
};
