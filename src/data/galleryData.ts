// Define type for gallery items
export interface GalleryCategory {
  title: "architecture" | "web" | "interactive" | "graphic" | "others";
  layout: "portrait" | "landscape";
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "architecture",
    layout: "portrait",
  },
  {
    title: "web",
    layout: "landscape",
  },
  {
    title: "interactive",
    layout: "landscape",
  },
  {
    title: "graphic",
    layout: "portrait",
  },
  {
    title: "others",
    layout: "portrait",
  },
];

export interface GalleryItem {
  title: string;
  description: string;
  src: string;
  url?: string;
  alt?: string;
  category: GalleryCategory["title"];
  type: "image" | "video";
}

export const galleryData: GalleryItem[] = [
  // Architecture Category
  {
    title: "Motel Project",
    description: "Conceptual image of the Motel Project.",
    src: "images/architecture/motel_project_02.webp",
    alt: "Motel Project Concept Image",
    category: "architecture",
    type: "image",
  },
  {
    title: "Motel Project",
    description: "Conceptual image of the Motel Project.",
    src: "images/architecture/motel_project_01.webp",
    alt: "Motel Project Concept Image",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Conceptual object of the Music School Project.",
    src: "images/architecture/music_school_project_00.webp",
    alt: "Music School Project Concept Object",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Perspective drawing of the Music School Project.",
    src: "images/architecture/music_school_project_01.webp",
    alt: "Music School Project Perspective",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Perspective drawing of the Music School Project.",
    src: "images/architecture/music_school_project_02.webp",
    alt: "Music School Project Perspective",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_03.webp",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_04.webp",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_05.webp",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_06.webp",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Image sketch of the Music School Project",
    src: "images/architecture/music_school_project_07.webp",
    alt: "Music School Project Image Sketch",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Image sketch of the Music School Project",
    src: "images/architecture/music_school_project_08.webp",
    alt: "Music School Project Image Sketch",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Image sketch of the Music School Project",
    src: "images/architecture/music_school_project_09.webp",
    alt: "Music School Project Image Sketch",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Image sketch of the Music School Project",
    src: "images/architecture/music_school_project_10.webp",
    alt: "Music School Project Image Sketch",
    category: "architecture",
    type: "image",
  },
  {
    title: "Resonate Club Kuju",
    description: "Resonate Club Kuju",
    src: "images/architecture/resonate_kuju.webp",
    alt: "Resonate Club Kuju",
    category: "architecture",
    type: "image",
  },

  // Web Category
  {
    title: "3D Wheelchair Basketball Website",
    description: "Top page of 3D Wheelchair Basketball Website",
    src: "images/web/3d-wheelchair-basketball.webp",
    url: "https://3d-wc-basketball.com/",
    alt: "3D Wheelchair Basketball Website",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Logo",
    src: "images/web/kazoku_channel/kazoku_channel_01.webp",
    alt: "Kazoku Channel Logo",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Concept",
    src: "images/web/kazoku_channel/kazoku_channel_02.webp",
    alt: "Kazoku Channel Concept",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Product Image",
    src: "images/web/kazoku_channel/kazoku_channel_03.webp",
    alt: "Kazoku Channel Product Image",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Smartphone UI",
    src: "images/web/kazoku_channel/kazoku_channel_04.webp",
    alt: "Kazoku Channel Smartphone UI",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel TV UI",
    src: "images/web/kazoku_channel/kazoku_channel_05.webp",
    alt: "Kazoku Channel TV UI",
    category: "web",
    type: "image",
  },
  {
    title: "Kyoto App Project",
    description: "Kyoto App Logo",
    src: "images/web/kyoto-app/kyoto_app_logo.webp",
    alt: "Kyoto App Logo",
    category: "web",
    type: "image",
  },
  {
    title: "Kyoto App Project",
    description: "Kyoto App Home Page",
    src: "images/web/kyoto-app/home.webp",
    alt: "Kyoto App Home Page",
    category: "web",
    type: "image",
  },
  {
    title: "Kyoto App Project",
    description: "Kyoto App Category Page",
    src: "images/web/kyoto-app/category_01.webp",
    alt: "Kyoto App Category Page",
    category: "web",
    type: "image",
  },
  {
    title: "Kyoto App Project",
    description: "Kyoto App Category Page",
    src: "images/web/kyoto-app/category_02.webp",
    alt: "Kyoto App Category Page",
    category: "web",
    type: "image",
  },
  {
    title: "Kyoto App Project",
    description: "Kyoto App Category Page",
    src: "images/web/kyoto-app/detail_03.webp",
    alt: "Kyoto App Category Page",
    category: "web",
    type: "image",
  },
  {
    title: "Fultapi Project",
    description: "Fultapi Map Page",
    src: "images/web/fultapi/map.webp",
    alt: "Fultapi Map Page",
    category: "web",
    type: "image",
  },
  {
    title: "Fultapi Project",
    description: "Fultapi Cup Page",
    src: "images/web/fultapi/cup.webp",
    alt: "Fultapi Cup Page",
    category: "web",
    type: "image",
  },
  {
    title: "Fultapi Project",
    description: "Fultapi Monster Page",
    src: "images/web/fultapi/monster.webp",
    alt: "Fultapi Monster Page",
    category: "web",
    type: "image",
  },
  {
    title: "Fultapi Project",
    description: "Fultapi Cube Page",
    src: "images/web/fultapi/cube.webp",
    alt: "Fultapi Cube Page",
    category: "web",
    type: "image",
  },
  {
    title: "Fultapi Project",
    description: "Fultapi Goal Page",
    src: "images/web/fultapi/goal.webp",
    alt: "Fultapi Goal Page",
    category: "web",
    type: "image",
  },
  {
    title: "Sign Hotel Project",
    description: "Sign Hotel Home Page",
    src: "images/web/sign-hotel/PC_01.webp",
    alt: "Sign Hotel Home Page",
    category: "web",
    type: "image",
  },
  {
    title: "Sign Hotel Project",
    description: "Sign Hotel Home Page",
    src: "images/web/sign-hotel/PC.webp",
    alt: "Sign Hotel Home Page",
    category: "web",
    type: "image",
  },

  // Interactive Category
  {
    title: "Kuwagata Digital",
    description: "Interactive digital installation",
    src: "images/interactive/kuwagata-digital-image.webp",
    alt: "Kuwagata Digital Installation Image",
    category: "interactive",
    type: "image",
  },
  {
    title: "Kuwagata Digital",
    description: "Interactive digital installation",
    src: "https://youtu.be/MLxzj9S3Ojg",
    alt: "Kuwagata Digital Installation Video",
    category: "interactive",
    type: "video",
  },
  {
    title: "Kuwagata Bender",
    description: "Interactive digital Installation",
    src: "https://youtu.be/nZKir0TjT40",
    category: "interactive",
    type: "video",
  },
  {
    title: "Spectrum / DH2019 TEAM Project",
    description: "Interactive digital Installation",
    src: "https://youtu.be/mBwYLvV7t-M",
    category: "interactive",
    type: "video",
  },
  {
    title: "Infographic MBTI",
    description: "Infographic about MBTI",
    src: "images/graphic/infographic_mbti_17b.webp",
    category: "graphic",
    type: "image",
  },
  {
    title: "Typography Centaur",
    description: "Typography poster about Centaur",
    src: "images/graphic/Typography_centaur_06.webp",
    category: "graphic",
    type: "image",
  },
  {
    title: "Metal Balance",
    description:
      "A sculpture made of metal rods and pipes that balances on a single point",
    src: "images/others/metal_balance_01.webp",
    category: "others",
    type: "image",
  },
  {
    title: "Metal Balance",
    description:
      "A sculpture made of metal rods and pipes that balances on a single point",
    src: "images/others/metal_balance_02.webp",
    category: "others",
    type: "image",
  },
  {
    title: "Tree Gate",
    description: "Tree installation at Carleton College",
    src: "images/others/tree_installation_01.webp",
    category: "others",
    type: "image",
  },
  {
    title: "Tree Gate",
    description: "Tree installation at Carleton College",
    src: "images/others/tree_installation_02.webp",
    category: "others",
    type: "image",
  },
  {
    title: "Tree Gate",
    description: "Tree installation at Carleton College",
    src: "images/others/tree_installation_03.webp",
    category: "others",
    type: "image",
  },
];
