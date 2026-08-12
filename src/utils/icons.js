import {
  Activity,
  Briefcase,
  CalendarRange,
  CircleHelp,
  ClipboardList,
  Database,
  FileCheck,
  Headphones,
  Lock,
  Network,
  ScanSearch,
  ShieldCheck,
  Shuffle,
  Smartphone,
  Stethoscope,
  Timer,
  Workflow,
} from 'lucide-react'

const icons = {
  activity: Activity,
  briefcase: Briefcase,
  calendarRange: CalendarRange,
  clipboardList: ClipboardList,
  database: Database,
  fileCheck: FileCheck,
  headphones: Headphones,
  lock: Lock,
  network: Network,
  scanSearch: ScanSearch,
  shieldCheck: ShieldCheck,
  shuffle: Shuffle,
  smartphone: Smartphone,
  stethoscope: Stethoscope,
  timer: Timer,
  workflow: Workflow,
}

export function getIcon(name) {
  return icons[name] ?? CircleHelp
}
