import React from 'react';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
const AddPropertyNumber = ({ name, label, htmlFor, control, errors }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required` }}
        render={({ field }) => <Input id={htmlFor} type="number" {...field} />}
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default AddPropertyNumber;
