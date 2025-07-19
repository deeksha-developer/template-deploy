export interface TimelineItem {
  date: string;
  title: string;
  tag: string;
  link: string;
  style?: string;
}

export interface PromptTemplateModalProps {
    open: boolean;
    onClose: () => void;
}

