import { getRandomArrayItem } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { topics } from "@/data";
import { useMemo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function HomeLink() {
  const location = useLocation().pathname;

  const funnyTooltips = useMemo(
    () => ["Roulette!", "Brave?", "Don't Click"],
    []
  );
  const randomTopic = useMemo(() => getRandomArrayItem(topics), [location]);

  const tooltipContent = useMemo(
    () => (location === "/" ? getRandomArrayItem(funnyTooltips) : "Home"),
    [location, funnyTooltips]
  );

  const target = location === "/" ? `/quiz/?topic=${randomTopic}` : "/";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className="fixed z-10 left-9 bottom-9"
            aria-label={`${
              location === "/" ? "Random Quiz Link" : "Link to home"
            }`}
            to={target}
          >
            <img
              className="h-10 border-black hover:animate-jelly animate-spin-slow"
              src="\question4-Photoroom.png"
              alt=""
            />
          </Link>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          className="mb-2 text-lightPurple bg-veryLightPurple "
        >
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default HomeLink;