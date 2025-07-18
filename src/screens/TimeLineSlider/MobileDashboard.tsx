import MobileTimeline from "./MobileTimeline";
import VerticalTimeline from "./Timeline";


const users = [
  { src: "/user1.png", alt: "User 1" },
  { src: "/user2.png", alt: "User 2" },
  { src: "/user3.png", alt: "User 3" },
];

interface MobileDashboardProps {
  showPromptModal: boolean;
  setShowPromptModal: (open: boolean) => void;
  showTimelineModal: boolean;
  setShowTimelineModal: (open: boolean) => void;
}

export default function MobileDashboard({  }: MobileDashboardProps) {
  return (
    <>
    <div className="md:block hidden">
<VerticalTimeline />
</div>
      <div className="block md:hidden" >
   <MobileTimeline />
      </div>
    </>
  );
}


