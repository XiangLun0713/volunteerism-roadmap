import { Timeline } from 'flowbite-react';
import { Activity } from "../models/activity";
import TimelineItem from "./TimelineItem";

const Roadmap = ({ activities }: { activities: Activity[] }) => {
    return (
        <section className="flex flex-col mb-12">
            <h3 className="text-2xl underline mb-5">Roadmap</h3>
            <Timeline>
                {activities.map((activity, index) => (
                    <TimelineItem key={index} activity={activity} />
                ))}
            </Timeline>
        </section>
    )
}

export default Roadmap