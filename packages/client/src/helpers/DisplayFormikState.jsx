/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */

export const DisplayFormikState = (props) => {
  const { values, errors, touched } = props;
  return (
    <div
      className="display-formik-state"
    >
      <pre>
        <strong>Form Props</strong>
        {' '}
        =
        {' '}
        <br />
        <h1
          className="display-formik-state__values"
        >
          Values
        </h1>
        {JSON.stringify(values, null, 2)}
        <br />
        <h1
          className="display-formik-state__errors"
        >
          errors
        </h1>
        {JSON.stringify(errors, null, 2)}
        <br />
        <h1
          className="display-formik-state__touched"
        >
          touched
        </h1>
        {JSON.stringify(touched, null, 2)}
      </pre>
    </div>
  );
};
