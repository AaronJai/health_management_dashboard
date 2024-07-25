import { Button } from '@/components/ui/button';
import { Doctors } from '@/constants';
import { getAppointment } from '@/lib/actions/appointment.actions';
import { formatDateTime } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// first extract patient id from the url (in params)
const Success = async ({ params: { userId }, searchParams }: SearchParamProps) => {
    // then get appointment id
    const appointmentId = (searchParams?.appointmentId as string) || '';
    const appointment = await getAppointment(appointmentId);

    // get the doctor's details
    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician);

    return (
        <div className='flex h-screen max-h-screen px-[5%]'>
            <div className='success-img'>
                <Link href='/'>
                    <Image
                        src="/assets/icons/logo-full.svg"
                        alt="logo"
                        height={1000}
                        width={1000}
                        className='h-10 w-fit'
                    />
                </Link>

                <section className='flex flex-col items-center'>
                    <Image
                        src="/assets/gifs/success.gif"
                        height={300}
                        width={280}
                        alt='success'
                    />
                    <h2 className='header mb-6 max-w-[600px] text-center'>
                        Your <span className='text-green-500'>appointment request</span> has been successfully submitted!
                    </h2>
                    <p>We will be in touch shortly to confirm.</p>
                </section>

                <section className='request-details'>
                    <p>Requested appointment details:</p>
                    <div className='flex items-center gap-3'>
                        <Image
                            src={doctor?.image!}
                            height={100}
                            width={100}
                            alt='doctor'
                            className='size-6'
                        />
                        <p className='whitespace-nowrap'>Dr. {doctor?.name}</p>
                    </div>

                    <div className='flex gap-2'>
                        <Image
                            src="/assets/icons/calendar.svg"
                            height={24}
                            width={24}
                            alt='calendar'
                        />
                        <p>{formatDateTime(appointment.schedule).dateTime}</p>
                    </div>
                </section>

                <Button variant="outline" className='shad-primary-btn' asChild>
                    <Link href={`/patients/${userId}/new-appointment`}>
                        Book a New Appointment
                    </Link>
                </Button>

                <p className='copyright'>© 2024 CarePulse</p>

            </div>
        </div>
    )
}

export default Success