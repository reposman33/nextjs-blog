import { parseISO, format } from "date-fns";

const Date = ({ dateString }) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}> {format(date, "eeee LLLL d, yyyy")} </time>;
};

export default Date;
