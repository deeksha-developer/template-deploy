import MobileTimeline from "./MobileTimeline";
import VerticalTimeline from "./Timeline";


interface MobileDashboardProps {
  showPromptModal: boolean;
  setShowPromptModal: (open: boolean) => void;
  showTimelineModal: boolean;
  setShowTimelineModal: (open: boolean) => void;
  onClose?: () => void;
}

export default function MobileDashboard(props: MobileDashboardProps) {
  const { showPromptModal, setShowPromptModal, showTimelineModal, setShowTimelineModal, onClose } = props;
  return (
    <>
    
      <div className="md:block hidden">
        <VerticalTimeline onClose={onClose} />
      </div>
      <div className="block md:hidden" >
        <MobileTimeline />
      </div>
    </>
  );
}


