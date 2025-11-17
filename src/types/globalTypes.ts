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
  interval: number;
  totalSlides: number;
  onPlay: (item: CarouselItem) => void; 
  activeIndex: number;
  reset: boolean; 
};

export type CarouselButtonsProps = {
  onPlay: () => void;
};


export type TileProps = {
  item: CarouselItem;
  layout: "portrait" | "landscape";
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
  duration?: number;
  reset?: boolean;
  totalSlides: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
  isActive?: boolean;
  paused?: boolean; 
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

export type ViewMoreItem = CarouselItem & {
  linkUrl: string;
  onNavigate?: (url: string) => void;
};

export type  ViewMorePageProps = {
  items: ViewMoreItem[]; 
  onPlay?: (item: ViewMoreItem) => void;
  onNavigate: (url: string) => void;
}
