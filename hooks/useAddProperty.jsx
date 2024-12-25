import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

const useAddProperty = ({ setIsModalOpen, onSubmit }) => {
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      type: '',
      status: 'Available',
      price: '',
      location: '',
      beds: '',
      baths: '',
      sqft: '',
      date: new Date(),
    },
  });

  const onSubmitForm = (data) => {
    onSubmit({
      ...data,
      price: parseFloat(data.price),
      beds: parseInt(data.beds),
      baths: parseInt(data.baths),
      sqft: parseInt(data.sqft),
      date: new Date(data.date).toISOString(),
    });
    toast({
      variant: 'destructive',
      title: 'Success',
      description: 'Property Created Successfully.',
      className: 'bg-green-500 text-white',
    });
    reset();
  };
  const handleClose = () => {
    setIsModalOpen(false);
    reset();
  };
  return {
    control,
    handleSubmit,
    errors,
    onSubmitForm,
    handleClose,
  };
};

export default useAddProperty;
