import React from 'react'
import clsx from 'clsx';
import Image from 'next/image';

interface StatCardProps {
    count: number;
    label: string;
    icon: string;
    type: 'appointments' | 'pending' | 'cancelled';
}

const StatCard = ( { count = 0, label, icon, type }: StatCardProps) => {
    return (
        // clsx makes the style dynamic based on type
        <div className={clsx('stat-card', {
            // bg details in tailwind.config.js
            'bg-appointments': type === 'appointments',
            'bg-pending': type === 'pending',
            'bg-cancelled': type === 'cancelled',
        })}>
            <div className='flex items-center gap-4'>
                <Image
                    src={icon}
                    height={32}
                    width={32}
                    alt={label}
                    className='size-8 w-fit'
                />
                <h2 className='text-32-bold text-white'>{count}</h2>
            </div>

            <p className='text-14-regular'>{label}</p>
        </div>
    )
}

export default StatCard