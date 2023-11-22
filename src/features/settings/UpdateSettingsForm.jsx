import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const {isLoading, settings: {minBookingLength, maxBookingLength, maxGuestsBooking, breakfastPrice} = {}} = useSettings();
  const {isUpdating, updateSetting} = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const {value} = e.target;
    
    if (!value) return;
    updateSetting({[field]: value});
  }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input 
          type='number' 
          id='min-nights' 
          defaultValue={minBookingLength} 
          onBlur={e => handleUpdate(e, 'minBookingLength')} 
          disable={isUpdating} 
        />
      </FormRow>

      <FormRow label='Maximum nights/booking'>
        <Input 
          type='number' 
          id='max-nights' 
          defaultValue={maxBookingLength} 
          onBlur={e => handleUpdate(e, 'maxBookingLength')} 
          disable={isUpdating} 
        />
      </FormRow>

      <FormRow label='Maximum guests/booking'>
        <Input t
          ype='number' 
          id='max-guests' 
          defaultValue={maxGuestsBooking} 
          onBlur={e => handleUpdate(e, 'maxGuestsBooking')} 
          disable={isUpdating} 
        />
      </FormRow>

      <FormRow label='Breakfast price'>
        <Input 
          type='number' 
          id='breakfast-price' 
          defaultValue={breakfastPrice} 
          onBlur={e => handleUpdate(e, 'breakfastPrice')} 
          disable={isUpdating} 
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
