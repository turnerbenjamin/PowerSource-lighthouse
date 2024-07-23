import FormItem from "../../../FormItem";
import FormInput from "../../../FormInput";
import FormInputValidator from "../../../FormInputValidator";
import ModalDetailsValidator from "../../../../../utils/validators/ModalDetailsValidator";

export default function ModalityInput({
  label = "Modality",
  modalityValue,
  isDisabled,
  onChange,
  isActive,
  doSkipValidation,
}) {
  if (!isActive) return;

  return (
    <FormInputValidator
      className="mb-2"
      values={[modalityValue]}
      validator={ModalDetailsValidator.validateModality}
      doSkipValidation={doSkipValidation}
      doUseDarkText
    >
      <FormItem labelTitle={label} doUseDarkText maxWidth="max-w-[32rem]">
        <FormInput
          value={modalityValue}
          title={label}
          placeholder="text,image; text,video"
          type="text"
          isDisabled={isDisabled}
          onChange={onChange}
        />
      </FormItem>
    </FormInputValidator>
  );
}
