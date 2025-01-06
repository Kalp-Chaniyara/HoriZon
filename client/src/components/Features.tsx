import { FC } from 'react';
import {
     ChatBubbleBottomCenterTextIcon,
     ShieldCheckIcon,
     UserGroupIcon,
     CalendarIcon,
     AcademicCapIcon,
     ChartBarIcon,
     HeartIcon,
     LightBulbIcon
} from '@heroicons/react/24/outline';

type Feature = {
     title: string;
     description: string;
     icon: FC<React.ComponentProps<'svg'>>;
};

const features: Feature[] = [
     {
          title: 'Anonymous Discussions',
          description: 'Share your experiences and seek advice without fear of judgment.',
          icon: ChatBubbleBottomCenterTextIcon,
     },
     {
          title: 'Safe Environment',
          description: 'Our platform is moderated to ensure a supportive and respectful community.',
          icon: ShieldCheckIcon,
     },
     {
          title: 'Peer Support',
          description: 'Connect with others who understand your journey and offer mutual support.',
          icon: UserGroupIcon,
     },
     {
          title: 'Milestone Tracking',
          description: 'Set goals and celebrate your progress on your recovery journey.',
          icon: CalendarIcon,
     },
     {
          title: 'Educational Resources',
          description: 'Access a wealth of information about addiction and recovery strategies.',
          icon: AcademicCapIcon,
     },
     {
          title: 'Progress Analytics',
          description: 'Visualize your recovery journey with personalized analytics and insights.',
          icon: ChartBarIcon,
     },
     {
          title: 'Wellness Activities',
          description: 'Discover and engage in activities that promote overall well-being and recovery.',
          icon: HeartIcon,
     },
     {
          title: 'Coping Strategies',
          description: 'Learn and share effective techniques for managing cravings and triggers.',
          icon: LightBulbIcon,
     },
];

const Features = () => {
     return (
          <section className="bg-gray-50 py-16 sm:py-24">
               <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">How HoriZon Helps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {features.map((feature) => (
                              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                                   <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                                   <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                   <p className="text-gray-600">{feature.description}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
};

export default Features;

