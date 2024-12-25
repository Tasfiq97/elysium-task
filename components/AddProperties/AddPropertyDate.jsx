import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
const AddPropertyDate = ({ control, errors }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="date">Date</Label>
      <Controller
        name="date"
        control={control}
        rules={{ required: 'Date is required' }}
        render={({ field }) => (
          <Input
            id="date"
            type="date"
            {...field}
            value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
      {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
    </div>
  );
};

export default AddPropertyDate;
