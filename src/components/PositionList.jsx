import FadeIn, { FadeInStagger } from "./FadeIn";
import Border from "./Border";
import clsx from "clsx";
import dayjs from "dayjs";

const PositionList = ({ className, children }) => {
  return (
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
  );
};

export const PositionListItem = ({ title, children, footer, id }) => {
  return (
    <li className="group mt-10 first:mt-0">
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-neutral-950">{`${title}. `}</strong>
          )}
          {children}
          {footer && (
            <>
            <br></br>
            <strong className="text-sm font-normal text-neutral-500">{`Closes ${dayjs(footer).format("DD MMMM YYYY")}. `}</strong>
            </>
          )}
          <br></br>
          <a href={`/apply/${id}`}>Apply Now</a>
        </Border>
    </li>
  );
};

export default PositionList;
