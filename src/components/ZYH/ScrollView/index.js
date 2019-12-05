import ScrollView from "./ScrollView";
import PullDownRefresh from "./PullDownRefresh";
import ReachBorder from "./ReachBorder";
import VirtualScroller from "./VirtualScroller";

import { withContext } from "components/index";
import ScrollViewContext from "./ScrollViewContext";

ScrollView.PullDownRefresh = PullDownRefresh;
ScrollView.ReachBorder = withContext(ReachBorder, ScrollViewContext);
ScrollView.VirtualScroller = VirtualScroller;

export default ScrollView;
