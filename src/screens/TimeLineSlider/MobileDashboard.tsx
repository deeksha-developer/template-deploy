import MobileTimeline from "./MobileTimeline";
import VerticalTimeline from "./Timeline";

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


