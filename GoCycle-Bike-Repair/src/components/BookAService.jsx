import React, { useState } from 'react';
import './BookAService.css';

import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

function BookAService({ setActiveTab }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState('');

  if (currentStep === 1) {
    return (
      <div className="booking-selection"> 
        <div className="booking-header">Select a service tier:</div>
        <div className="gear-options-container">
          <div className="gear-one-container">
            <div className="tier-header">Gear 1</div>
            <div className="tier-description">Quick adjustments to brakes and shifting<br />Chain clean and lubrication (on bike)<br />Tire inflation and pressure check<br />Light wipe down of the bike’s frame, fork and wheels<br />Minor wheel truing (on bike)<br />Headset adjustment<br />Post service test ride<br />Full safety inspection*</div>
            <div className="tier-price">$99.99</div>
            <button className="button" onClick={() => { setSelectedTier('Gear 1'); setCurrentStep(2); }}>Book Now</button>
          </div>
          <div className="gear-two-container">
            <div className="tier-header">Gear 2</div>
            <div className="tier-description">Includes Service Package 1 PLUS:<br />Removal and deep cleaning of the entire drivetrain<br />Drivetrain components removed, lubed/greased, reinstalled<br />Frame and fork clean and polish<br />Major wheel truing<br />Installation of any replacement drivetrain components removed for cleaning included</div>
            <div className="tier-price">$149.99</div>
            <button className="button" onClick={() => { setSelectedTier('Gear 2'); setCurrentStep(2); }}>Book Now</button>
          </div>
          <div className="gear-three-container">
            <div className="tier-header">Gear 3</div>
            <div className="tier-description">Includes Service Package 2 PLUS:<br />Thorough disassembly / cleaning / re-greasing of all bearing systems (Headset/Hubs/BB)<br />Labour for any additional parts installed included</div>
            <div className="tier-price">$249.99</div>
            <button className="button" onClick={() => { setSelectedTier('Gear 3'); setCurrentStep(2); }}>Book Now</button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="booking-confirmation">
        <h1>Select your date and time for: {selectedTier}</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
            components={[
            'DateTimePicker',
            'MobileDateTimePicker',
            'DesktopDateTimePicker',
            'StaticDateTimePicker',
            ]}
        >
            <DemoItem>
            <StaticDateTimePicker defaultValue={dayjs('2026-06-05T15:30')} />
            </DemoItem>
        </DemoContainer>
        </LocalizationProvider>
            <button className="button" onClick={() => setCurrentStep(3)}>Book Now</button>
        </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="booking-success">
        <h1>Thank you for your booking!</h1>
        <p>Your {selectedTier} service has been successfully booked. Please arrive at your scheduled time with your bicycle.</p>
        <button className="button" onClick={() => setActiveTab('Home')}>Back to Home</button>
      </div>
    );
  }
}
export default BookAService;