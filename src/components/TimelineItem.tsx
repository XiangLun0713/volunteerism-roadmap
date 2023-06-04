import { Button, Timeline } from 'flowbite-react';
import { BsArrowRight } from 'react-icons/bs';
import { Activity } from '../models/activity';
const TimelineItem = ({ activity }: { activity: Activity }) => {
    return (
        <Timeline.Item>
            <Timeline.Point />
            <Timeline.Content>
                <Timeline.Time dangerouslySetInnerHTML={{ __html: `${activity.date}\n${activity.time}`.replace(/\n/g, "<br />") }}>
                </Timeline.Time>
                <Timeline.Title className='my-2'>
                    {activity.title}
                </Timeline.Title>
                <Timeline.Body>
                    <p className='mb-4' dangerouslySetInnerHTML={{ __html: activity.description.replace(/\n/g, "<br />") }}></p>
                    <div className='flex flex-col gap-5'>
                        {activity.images ? activity.images.map((image, index) => (
                            <div className='flex flex-col items-center gap-3 mb-4 text-center'>
                                <img className='border border-gray-500' key={index} alt={`${activity.title} image`} src={`./${image.path}`} />
                                <p>{image.label}</p>
                            </div>
                        )) : null}
                    </div>
                    <div className='mb-4'>
                        {activity.link ? (
                            <Button gradientDuoTone="redToYellow" target='_blank'
                                outline href={activity.link.url}>
                                <p className='mr-1'>{activity.link.label ? activity.link.label : "Learn More"}</p>
                                <BsArrowRight />
                            </Button>
                        ) : null}
                    </div>
                </Timeline.Body>
            </Timeline.Content>
        </Timeline.Item>
    )
}

export default TimelineItem