import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Controller } from 'react-hook-form';
const AddPropertySelect = ({ name, label, htmlFor, placeholder, selectedContent, control, errors }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={{ required: `${label} is required` }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger id={htmlFor}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {selectedContent.map((s) => {
                return (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
      />
      {errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>}
    </div>
  );
};

export default AddPropertySelect;
