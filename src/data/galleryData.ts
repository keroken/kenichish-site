// Define type for gallery items
export interface GalleryItem {
  title: string;
  description: string;
  src: string;
  alt?: string;
  category: "architecture" | "web" | "interactive" | "graphic" | "others";
  type: "image" | "video";
}

export const galleryData: GalleryItem[] = [
  // Architecture Category
  {
    title: "Motel Project",
    description: "Conceptual image of the Motel Project.",
    src: "images/architecture/motel_project_02.jpg",
    alt: "Motel Project Concept Image",
    category: "architecture",
    type: "image",
  },
  {
    title: "Motel Project",
    description: "Conceptual image of the Motel Project.",
    src: "images/architecture/motel_project_01.jpg",
    alt: "Motel Project Concept Image",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Conceptual object of the Music School Project.",
    src: "images/architecture/music_school_project_00.jpg",
    alt: "Music School Project Concept Object",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Perspective drawing of the Music School Project.",
    src: "images/architecture/music_school_project_01.jpg",
    alt: "Music School Project Perspective",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Perspective drawing of the Music School Project.",
    src: "images/architecture/music_school_project_02.jpg",
    alt: "Music School Project Perspective",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_03.jpg",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_04.jpg",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_05.jpg",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Section/Elevation drawing of the Music School Project.",
    src: "images/architecture/music_school_project_06.jpg",
    alt: "Music School Project Section/Elevation",
    category: "architecture",
    type: "image",
  },
  {
    title: "Music School Project",
    description: "Image sketch of the Music School Project",
    src: "images/architecture/music_school_project_07.jpg",
    alt: "Music School Project Image Sketch",
    category: "architecture",
    type: "image",
  },

  // Web Category
  {
    title: "3D Wheelchair Basketball Website",
    description: "Top page of 3D Wheelchair Basketball Website",
    src: "images/web/3d-wheelchair-basketball.png",
    alt: "3D Wheelchair Basketball Website",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Logo",
    src: "images/web/kazoku_channel/kazoku_channel_01.png",
    alt: "Kazoku Channel Logo",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Concept",
    src: "images/web/kazoku_channel/kazoku_channel_02.png",
    alt: "Kazoku Channel Concept",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Product Image",
    src: "images/web/kazoku_channel/kazoku_channel_03.png",
    alt: "Kazoku Channel Product Image",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel Smartphone UI",
    src: "images/web/kazoku_channel/kazoku_channel_04.png",
    alt: "Kazoku Channel Smartphone UI",
    category: "web",
    type: "image",
  },
  {
    title: "Kazoku Channel Project",
    description: "Kazoku Channel TV UI",
    src: "images/web/kazoku_channel/kazoku_channel_05.png",
    alt: "Kazoku Channel TV UI",
    category: "web",
    type: "image",
  },

  // Interactive Category
  {
    title: "Kuwagata Digital",
    description: "Interactive digital installation",
    src: "images/interactive/kuwagata-digital-image.jpg",
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
];
