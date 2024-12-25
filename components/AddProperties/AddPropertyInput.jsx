import React from 'react';
import { Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
const AddPropertyInput = ({ name, label, htmlFor, control, errors }) => {
  console.log('🚀 ~ AddPropertyInput ~ name:', name);
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required` }}
        render={({ field }) => <Input id={htmlFor} {...field} aria-invalid={errors.name ? 'true' : 'false'} />}
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default AddPropertyInput;
