'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import useAddProperty from '@/hooks/useAddProperty';
import AddPropertyInput from './AddProperties/AddPropertyInput';
import AddPropertySelect from './AddProperties/AddPropertySelect';
import AddPropertyNumber from './AddProperties/AddPropertyNumber';
import AddPropertyDate from './AddProperties/AddPropertyDate';

const AddPropertyModal = ({ isOpen, setIsModalOpen, onSubmit }) => {
  const { control, handleSubmit, errors, onSubmitForm, handleClose } = useAddProperty({ setIsModalOpen, onSubmit });
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <AddPropertyInput
            name="name"
            label="Property Name"
            htmlFor={'propertyName'}
            control={control}
            errors={errors}
          />
          <AddPropertySelect
            name="type"
            label="Property Type"
            htmlFor={'propertyType'}
            placeholder="Select type"
            selectedContent={['House', 'Apartment', 'Commercial']}
            control={control}
            errors={errors}
          />
          <AddPropertySelect
            name="status"
            label="Property Status"
            htmlFor={'propertyStatus'}
            selectedContent={['Available', 'Rented', 'Sold']}
            control={control}
            errors={errors}
          />
          <AddPropertyDate control={control} errors={errors} />

          <AddPropertyNumber name="price" label="Property Price" htmlFor={'price'} control={control} errors={errors} />

          <AddPropertyInput name="location" label="Location" htmlFor="location" control={control} errors={errors} />

          <div className="grid grid-cols-3 gap-4">
            <AddPropertyNumber name="beds" label="Beds" htmlFor={'beds'} control={control} errors={errors} />

            <AddPropertyNumber name="baths" label="Baths" htmlFor={'baths'} control={control} errors={errors} />

            <AddPropertyNumber name="sqft" label="Sqft" htmlFor={'sqft'} control={control} errors={errors} />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Add Property</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPropertyModal;
