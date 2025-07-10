export type SeriesItem = {
  id: string;
  title: string;
};

export type CarouselItem = {
  id: string;
  title: string;
  poster: string;
  spotlight: string;
  thumbnail: string;
  portrait: string;
  action: string;
  videoUrl: string;
  description: string;
  series: { id: string; title: string }[];
};

// export type CarouselItem = {
//   id: string;
//   title: string;
//   poster: string;
//   spotlight: string;
//   thumbnail: string;
//   portrait: string;
//   action: string;
//   videoUrl: string;
//   description: string;
//   series: SeriesItem[];
// };
  
  export type CarouselData = {
    content: CarouselItem[];
  };
  
  export type CarouselProps = {
    data: CarouselData;
    onPlay: (item: CarouselItem) => void;
    interval?: number;
  };
  
  
  export type CarouselSlideProps = {
    item: CarouselItem;
    index: number;
    //focusedIndex: number;
    interval: number;
    //resetTimer: boolean;
    totalSlides: number;
    onPlay: (item: CarouselItem) => void; 
    //onDotClick: (index: number) => void;
    //isActive: boolean;
    activeIndex: number;
    reset: boolean; 
  };
  
  
  export type CarouselButtonsProps = {
    //isFocused: boolean;
    onPlay: () => void;
  };
  
  //export type PlayButtonProps = { };
  
  export type TileProps = {
    item: CarouselItem;
    layout: "portrait" | "landscape";
    //isFocused: boolean;
    onPlay: (item: CarouselItem) => void;
    autoFocus?: boolean; 
    rowIndex: number;
    tileIndex: number;
  };
  
  export type TileImageProps = {
    item: CarouselItem;
    layout: "portrait" | "landscape";
  };
  
  export type TimerOverlayProps = {

    interval: number;
    //resetTimer: boolean;
    duration?: number;
    reset?: boolean;
    totalSlides: number;
    activeIndex: number;
    onDotClick?: (index: number) => void;
    isActive?: boolean;
  };

  export type TrayProps = {
    title: string;
    items: CarouselItem[];
    layout: "portrait" | "landscape";
    rowIndex: number;
    focusedRow: number;
    focusedIndexes: number[];
    onPlay: (item: CarouselItem) => void;
    onFocus?: () => void; 
  };

  export type TrayContentProps = {
    items: CarouselItem[];
    layout: "portrait" | "landscape";
    rowIndex: number;
    focusedRow: number;
    focusedIndexes: number[];
    onPlay: (item: CarouselItem) => void;
    onViewMore: () => void; 
  };

  export type TrayTitleProps = {
    title: string;
  }



  export type VideoPlayerProps = {
    videoUrl: string;
  };

  export type LayoutType = {
    type: "spotlight" | "tray";
    name?: string;
    layout: "landscape" | "portrait";
    content: CarouselItem[]; 
  };


  //FOR TILES OF VIEWMORE

  export type ViewMoreProps =  {
    rowIndex: number;
    onClick: () => void;
    id: string;
    title: string;
    imageUrl: string;
    linkUrl: string; 
    additionalInfo?: string; 
  }


  //FOR PAGES OF VIEWMORE

  //export type ViewMoreItem = CarouselItem; // Use the same type **FOR VIDEO TYPE

  export type ViewMoreItem = CarouselItem & {
    linkUrl: string;
    onNavigate?: (url: string) => void;
  };

  // export type ViewMoreItem = {
  //   id: string;
  //   title: string;
  //   imageUrl: string;
  // linkUrl: string;
  // }
  
  export type  ViewMorePageProps = {
    items: ViewMoreItem[]; // Array of ViewMoreItem objects
    onPlay?: (item: ViewMoreItem) => void;
    onNavigate: (url: string) => void;
  }
  