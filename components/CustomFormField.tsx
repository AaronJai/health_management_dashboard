'use client';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm";
import Image from "next/image";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js/core';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    diabled?: boolean,
    dateFormat?: string,    
    showTimeSelect?: boolean,
    children?: React.ReactNode,                             // show something inside of an input
    renderSkeleton?: (field: any) => React.ReactNode,       // show loading state for an input
}

const RenderField = ({ field, props }: {field:any; props: CustomProps}) => {
    const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                // layout around the input
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image 
                            src={iconSrc}
                            alt={iconAlt || 'icon'}
                            height={24}
                            width={24}
                            className="ml-2"
                        />
                    )}

                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
        
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput 
                        defaultCountry="AU"
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value as E164Number | undefined}
                        onChange={field.onChange}
                        className="input-phone"
                    />
                </FormControl>
            )
        
        case FormFieldType.DATE_PICKER:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    <Image
                        src="/assets/icons/calendar.svg"
                        alt="calendar"
                        height={24}
                        width={24}
                        className="ml-2"
                    />
                    <FormControl>
                        <DatePicker 
                            selected={field.value} 
                            onChange={(date) => field.onChange(date)} 
                            dateFormat={dateFormat ?? 'dd/MM/yyyy'}
                            showTimeSelect={showTimeSelect ?? false}
                            timeInputLabel="Time: "
                            wrapperClassName="date-picker"
                        />
                    </FormControl>
                </div>
            )

        case FormFieldType.SKELETON:
            return renderSkeleton ? renderSkeleton(field) : null
            
        default:
            break;
    }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props;

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {/* if not a checkbox and label exist, show it */}
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel>{label}</FormLabel>
                    )}


                    <RenderField field={field} props={props}/>

                    <FormMessage className="shad-error"/>

                </FormItem>
            )}
        />
    )
}

export default CustomFormField