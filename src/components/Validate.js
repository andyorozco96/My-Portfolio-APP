export default function validate(values) {
  const regExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const errors = {};
  if (!values.name) {
    errors.name = "This field cannot be empty";
  }

  if (values.name.length < 3) {
    errors.name = "Your first name must have at least 2 characters, it cannot be empty";
  }

  if (!values.email) {
    errors.email = "This field cannot be empty";
  }

  if((regExp.test(values.email)) === false){
    errors.email = "You must type a valid email address"
  }

  if (!values.message) {
    errors.message = "This field cannot be empty";
  }

  if (values.message.length < 10) {
    errors.message = "The message cannot be less than 15 characters, please explain everything in detail.";
  }

  return errors;
}
